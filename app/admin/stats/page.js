"use client";

import { useState, useEffect } from 'react';
import { useStats } from '@/contexts/StatsContext';

export default function AdminStats() {
  const { stats } = useStats();
  const [timeRange, setTimeRange] = useState('7d');

  const topPages = stats.topPages || [];
  const topProjects = stats.topProjects || [];
  const trafficSources = stats.trafficSources || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Statistiques</h1>
          <p className="text-gray-600">Analysez les performances de votre portfolio</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
        >
          <option value="7d">7 derniers jours</option>
          <option value="30d">30 derniers jours</option>
          <option value="90d">90 derniers jours</option>
        </select>
      </div>

      {/* Métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-500 text-white text-2xl">
              👥
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Visites totales</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalVisits.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-500 text-white text-2xl">
              👤
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Visiteurs uniques</p>
              <p className="text-2xl font-bold text-gray-900">{stats.uniqueVisitors.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-500 text-white text-2xl">
              📄
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pages vues</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pageViews.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-500 text-white text-2xl">
              📊
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Taux de rebond</p>
              <p className="text-2xl font-bold text-gray-900">{stats.bounceRate}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-500 text-white text-2xl">
              ⏱️
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Durée moyenne</p>
              <p className="text-2xl font-bold text-gray-900">{stats.avgSessionDuration}min</p>
            </div>
          </div>
        </div>
      </div>

      {/* Graphiques et analyses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pages les plus visitées */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pages les plus visitées</h3>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{page.page}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-[#16f2b3] h-2 rounded-full" 
                      style={{ width: `${page.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm font-medium text-gray-900">{page.views}</p>
                  <p className="text-xs text-gray-500">{page.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projets populaires */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Projets les plus vus</h3>
          <div className="space-y-3">
            {topProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{project.name}</p>
                  <p className="text-xs text-gray-500">{project.clicks} clics</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{project.views}</p>
                  <p className="text-xs text-gray-500">vues</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sources de trafic */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sources de trafic</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {trafficSources.map((source, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${source.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2`}>
                {source.source === 'Direct' && '🔗'}
                {source.source === 'Google' && '🔍'}
                {source.source === 'LinkedIn' && '💼'}
                {source.source === 'GitHub' && '🐙'}
                {source.source === 'Autres' && '📊'}
              </div>
              <p className="text-sm font-medium text-gray-900">{source.source}</p>
              <p className="text-lg font-bold text-gray-900">{source.visitors}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
