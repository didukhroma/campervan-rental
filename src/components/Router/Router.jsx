import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../';

const AsyncHomePage = lazy(() => import('../../pages/HomePage'));
const AsyncCatalogPage = lazy(() => import('../../pages/CatalogPage'));
const AsyncFavoritesPage = lazy(() => import('../../pages/FavoritesPage'));

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AsyncHomePage />} />
        <Route path="catalog" element={<AsyncCatalogPage />} />
        <Route path="favorites" element={<AsyncFavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
