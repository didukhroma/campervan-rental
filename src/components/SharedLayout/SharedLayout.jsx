import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

import { Icon, Container, Modal } from '../';

import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.nav}>
            <NavLink className={clsx(styles.link, styles.logo)} to="/">
              <Icon id="logo" width="80" height="80" />
            </NavLink>
            <ul className={styles.list}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx(styles.link, isActive && styles.active)
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx(styles.link, isActive && styles.active)
                  }
                  to="/catalog"
                >
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx(styles.link, isActive && styles.active)
                  }
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Modal />
    </>
  );
};
