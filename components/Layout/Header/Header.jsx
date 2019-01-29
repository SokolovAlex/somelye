import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import styles from './Header.module.scss';

const menuItems = [{
    text: 'Афоризмы',
    href: '/dictums',
    active: true,
  }, {
    text: 'Поэзия',
    href: '/poems'
  }, {
    text: 'Черновики',
    href: '/drafts'
  },
];

function Header({ user }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.menu}>
        <Menu menuItems={menuItems}/>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  user: null,
};

export { Header };