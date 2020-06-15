import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { demoButtonClicked } from 'common/actions/demo';

export const HelloButton = () => {
  const count = useSelector((state) => state.demo.clicked);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Hello Redux</h3>
      Count: 
      {' '}
      {count}
      {' '}
      <button type='button' onClick={() => dispatch(demoButtonClicked())}>
        Click me to increase count.
      </button>
    </div>
  );
};
