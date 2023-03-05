import { lazy } from 'react';

/* ==================== CONTACT ==================== */
export const ContactPage = lazy(
  () => import('../pages/ContactPage/ContactPage'),
);

/* ==================== PAGES ==================== */
export const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
export const FaqPage = lazy(() => import('../pages/FAQPage/FAQPage'));
export const NotFoundPage = lazy(
  () => import('../pages/NotFoundPage/NotFoundPage'),
);

/* ==================== Listing ==================== */
export const ListingPage = lazy(
  () => import('../pages/ListingPage/ListingPage'),
);

/* ==================== NEWS ==================== */
export const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));

/* ==================== HOME ==================== */
export const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
