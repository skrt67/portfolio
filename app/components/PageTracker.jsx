"use client";

import { useEffect } from 'react';
import { useStats } from '@/contexts/StatsContext';

export default function PageTracker() {
  const { trackVisit } = useStats();

  useEffect(() => {
    // Enregistrer la visite de la page d'accueil
    trackVisit('/');
  }, [trackVisit]);

  return null; // Ce composant ne rend rien
}
