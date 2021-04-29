import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Logo =  styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 3.5vh;
  padding: 1rem;
  a {
    color: black !important;
  }
  + div {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoM = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 3.5vh;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  a {
    color: black !important;
  }
  Button {
    background: black !important;
    border: none;
  }
`;

function NavBar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  return(
    <div>
      <BrowserView>
        <Logo>
          <Link to="/">
            VARRAM SHOP
          </Link>
        </Logo>
        <MenuList>
          <Menu selectedKeys="mail" mode="horizontal">
            <Menu.Item key="timeline">
              타임라인
            </Menu.Item>
            <Menu.Item key="class">
              클래스
            </Menu.Item>
          </Menu>
          <Menu mode="horizontal">
            <Menu.Item key="login">
              로그인
            </Menu.Item>
            <Menu.Item key="signup">
              회원가입
            </Menu.Item>
          </Menu>
        </MenuList>
      </BrowserView>
      <MobileView>
        <LogoM>
          <Link to="/">
            VARRAM SHOP
          </Link>
          <div >
            <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16 }}>
              { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
            </Button>
          </div>
        </LogoM>
        { toggleMenu ?
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
          >
            <Menu.Item key="timeline">
              타임라인
            </Menu.Item>
            <Menu.Item key="class">
              클래스
            </Menu.Item>
            <Menu.Item key="login">
              로그인
            </Menu.Item>
            <Menu.Item key="signup">
              회원가입
            </Menu.Item>
          </Menu>
          : <></>
        }
      </MobileView>
    </div>
  )
}

export default NavBar;
