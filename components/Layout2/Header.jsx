import PropTypes from 'prop-types';

import { Logo } from './Logo/Logo';

import MenuDrop from '../MenuDrop/MenuDrop';

const optionsMenuCustomer = [
  {
    text: 'My books',
    href: '/customer/my-books',
    as: '/my-books',
  },
  {
    text: 'Log out',
    href: '/logout',
    noPrefetch: true,
  },
];

const optionsMenuAdmin = [
  {
    text: 'Admin',
    href: '/admin',
  },
  {
    text: 'Log out',
    href: '/logout',
    noPrefetch: true,
  },
];

function Header({ user }) {
  return (
    <div>
      <Logo></Logo>
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