import React from 'react';

const Ball = (props) => {
  const ballStyle = {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: '50%',
    ...props.style,
  };

  return <div style={ballStyle}></div>;
};

export default Ball;
