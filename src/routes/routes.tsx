import { lazy } from 'react';

/* ==================== CONTACT ==================== */
export const ContactPage = lazy(
  () => import('../pages/ContactPage/ContactPage'),
);

/* ==================== PAGES ==================== */
export const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));

/* ==================== HOME ==================== */
export const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
