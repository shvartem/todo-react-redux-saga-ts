/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices';

const { Header } = Layout;

interface INavbar {
  isAuth: boolean;
}

const Navbar: React.FC<INavbar> = ({ isAuth }) => {
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(actions.logoutUserPending());
  }

  if (!isAuth) {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="Register">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="Login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="Home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="Logout">
          <Button type="link" onClick={logoutHandler}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
