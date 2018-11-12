import React from 'react';
import Link from 'next/link';

import styles from './Menu.module.scss';

const Menu = ({ menuItems }) => (
  <div className={styles.menu}>
    { menuItems.map((item) => (
      <div className={styles.menuItem}>
        {item.text}
      </div>
    ))
    }
  </div>
);

export { Menu };