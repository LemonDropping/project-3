import React from 'react';

const Paddle = (props) => {
  const paddleStyle = {
    position: 'absolute',
    width: 10,
    height: 60,
    backgroundColor: 'white',
    ...props.style,
  };

  return <div style={paddleStyle}></div>;
};

export default Paddle;
