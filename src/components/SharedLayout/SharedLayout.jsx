import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Icon, Container, Modal } from '../';
import styles from './SharedLayout.module.css';
export const SharedLayout = () => {
  return (
    <>
      <header>
        <Container className={styles.container}>
          <nav className={styles.nav}>
            <NavLink className={styles.link} to="/">
              <Icon id="icon-logo" width="60" height="60" />
            </NavLink>
            <ul className={styles.list}>
              <li>
                <NavLink className={styles.link} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/favorites">
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
