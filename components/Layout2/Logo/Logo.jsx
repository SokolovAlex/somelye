import React from 'react';

import styles from './Logo.module.scss';

const Logo = () => (
  <div>
    <a className={styles.logo} href="#">
      <span data-letters-l="somme" data-letters-r="lier">sommelier</span>
    </a>
  </div>
);

export { Logo };