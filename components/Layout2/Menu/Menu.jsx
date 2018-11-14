import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Menu.module.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    const { menuItems } = this.props;
    this.state = { activeMenu: menuItems[0] };
  }

  activeMenu(menuItem) {
    this.setState({activeMenu: menuItem});
  }

  render() {
    const { menuItems } = this.props;
    const { activeMenu } = this.state;
    return (
    <ul className={styles.menu}>
      { menuItems.map((item, i) => (
        <li key={i}
          className={classnames({
            [styles.menuItem]: true,
            [styles.active]: item === activeMenu
          })}
          onClick={() => this.activeMenu(item)}>
          <span className={styles.menuLink}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
    );
  }
};

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export { Menu };