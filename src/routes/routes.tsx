import { lazy } from 'react';

/* ==================== AUTH ==================== */
export const LogInPage = lazy(() => import('../pages/LogInPage/LoginPage'));

export const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));

/* ==================== DESTINATION ==================== */
export const DestinationPage = lazy(
  () => import('../pages/DestinationPage/DestinationPage')
);

/* ==================== CONTACT ==================== */
export const ContactPage = lazy(
  () => import('../pages/ContactPage/ContactPage')
);

/* ==================== LISTING ==================== */
export const ListingPage = lazy(
  () => import('../pages/ListingPage/ListingPage')
);

/* ==================== PAGES ==================== */
export const PagesPage = lazy(() => import('../pages/PagesPage/PagesPage'));

/* ==================== HOME ==================== */
export const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
