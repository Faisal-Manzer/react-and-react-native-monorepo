import React from 'react';
import { useSelector } from 'react-redux';

export const SessionClock = () => {
  const time = useSelector((state) => state.demo.sessionTime);

  return (
    <div>
      <h3>Session started</h3>
      {time}
      {' '}
      secs before
    </div>
  );
};
