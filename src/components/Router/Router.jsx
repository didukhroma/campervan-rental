import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../';
import { Home, Catalog, Favorites } from '../../pages';

export const Router = () => {
  return (
    <>
      <div>Router</div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
