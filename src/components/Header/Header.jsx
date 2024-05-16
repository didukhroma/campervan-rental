import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <Icon id="icon-logo" width="80" height="80" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
