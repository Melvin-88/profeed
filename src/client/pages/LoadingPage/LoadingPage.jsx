import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

function CircularProgressExampleSimple() {
  return (<div className='loading-page'>
    <CircularProgress size={100} thickness={7} />
  </div>);
}

export default CircularProgressExampleSimple;
