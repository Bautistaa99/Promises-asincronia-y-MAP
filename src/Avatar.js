import React, { useEffect } from 'react';

const Avatar = () => {
  useEffect(() => {
    console.log('el componente se monta');
    return () => {
      console.log('el componente de desomonta');
    };
  }, []);

  return <div>Avatar</div>;
};

export default Avatar;
