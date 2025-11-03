"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const StatsContext = createContext();

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    pageViews: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    topProjects: [],
    trafficSources: []
  });

  // Fonction pour mettre à jour les statistiques
  const updateStats = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const visits = JSON.parse(localStorage.getItem('portfolio_visits') || '[]');
      const projectViews = JSON.parse(localStorage.getItem('project_views') || '{}');
    
      // Calculer les statistiques
      const totalVisits = visits.length;
      const uniqueVisitors = new Set(visits.map(v => v.userAgent)).size;
      
      // Calculer les pages les plus visitées
      const pageCounts = {};
      visits.forEach(visit => {
        pageCounts[visit.page] = (pageCounts[visit.page] || 0) + 1;
      });
      
      const topPages = Object.entries(pageCounts)
        .map(([page, count]) => ({ page, views: count }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      // Calculer les projets les plus vus
      const topProjects = Object.entries(projectViews)
        .map(([name, views]) => ({ name, views }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      // Calculer les sources de trafic
      const sourceCounts = {};
      visits.forEach(visit => {
        let source = 'Direct';
        if (visit.referrer.includes('google')) source = 'Google';
        else if (visit.referrer.includes('linkedin')) source = 'LinkedIn';
        else if (visit.referrer.includes('github')) source = 'GitHub';
        else if (visit.referrer && visit.referrer !== 'direct') source = 'Autres';
        
        sourceCounts[source] = (sourceCounts[source] || 0) + 1;
      });

      const totalSources = Object.values(sourceCounts).reduce((a, b) => a + b, 0);
      const trafficSources = Object.entries(sourceCounts)
        .map(([source, count]) => ({
          source,
          visitors: Math.round((count / totalSources) * 100)
        }))
        .sort((a, b) => b.visitors - a.visitors);

      // Calculer le taux de rebond (visites d'une seule page)
      const singlePageVisits = visits.filter((visit, index, arr) => {
        const userVisits = arr.filter(v => v.userAgent === visit.userAgent);
        return userVisits.length === 1;
      }).length;
      
      const bounceRate = totalVisits > 0 ? Math.round((singlePageVisits / totalVisits) * 100) : 0;

      setStats({
        totalVisits,
        uniqueVisitors,
        pageViews: totalVisits, // Pour simplifier, on considère que chaque visite = 1 page vue
        bounceRate,
        avgSessionDuration: 2.5, // Valeur par défaut
        topPages,
        topProjects,
        trafficSources
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour des statistiques:', error);
    }
  }, []);

  // Fonction pour enregistrer une visite
  const trackVisit = useCallback((page = '/') => {
    // Vérifier que nous sommes côté client
    if (typeof window === 'undefined') return;
    
    try {
      const visitData = {
        page,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      };

      // Sauvegarder en localStorage
      const visits = JSON.parse(localStorage.getItem('portfolio_visits') || '[]');
      visits.push(visitData);
      
      // Garder seulement les 1000 dernières visites
      if (visits.length > 1000) {
        visits.splice(0, visits.length - 1000);
      }
      
      localStorage.setItem('portfolio_visits', JSON.stringify(visits));
      updateStats();
    } catch (error) {
      console.error('Erreur lors du tracking de visite:', error);
    }
  }, [updateStats]);

  // Fonction pour enregistrer une interaction avec un projet
  const trackProjectView = useCallback((projectName) => {
    if (typeof window === 'undefined') return;
    
    try {
      const projectViews = JSON.parse(localStorage.getItem('project_views') || '{}');
      projectViews[projectName] = (projectViews[projectName] || 0) + 1;
      localStorage.setItem('project_views', JSON.stringify(projectViews));
      updateStats();
    } catch (error) {
      console.error('Erreur lors du tracking de projet:', error);
    }
  }, [updateStats]);

  // Charger les statistiques au montage
  useEffect(() => {
    updateStats();
  }, [updateStats]);

  const value = {
    stats,
    trackVisit,
    trackProjectView,
    updateStats
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  );
};