import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {

 const { user } = useAuth0();

 console.log(user);
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={user?.picture} alt='user pfp' height={'full'} width={50} style={{}}/>
        </div>    
        <p style={{margin: '4px'}}>{user?.name}</p>
    </>
  );
};

export default ProfilePage;