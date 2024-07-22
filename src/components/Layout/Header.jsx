import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LogoutButton from '../common/LogoutButton';
import LoginButton from '../common/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';
import ProfilePage from '../ProfilePage';


const { primary_accent_color } = colors;

function HeaderContent() {

  const { isAuthenticated, user } = useAuth0();
  const AuthNav = () => {
    return (
      <Nav className='justify-content-end' style={{marginLeft: '10px'}}>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
    );
  };
 console.log(user);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        <ProfilePage />
        <AuthNav />
      </div>
    </div>
  );
}

export { HeaderContent };
