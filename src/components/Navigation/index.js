import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
`;

const NavItem = styled.button`
  background: none;
  border: none;
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.text.primary};
  font-size: 1.2rem;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  
  &.focusable:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Settings', path: '/settings' }
  ];

  return (
    <NavWrapper>
      {navItems.map(({ label, path }) => (
        <NavItem
          key={path}
          className="focusable"
          active={location.pathname === path}
          onClick={() => navigate(path)}
        >
          {label}
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default Navigation;