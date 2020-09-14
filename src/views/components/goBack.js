import React from 'react';
import {withRouter} from 'react-router-dom';

const GoBack = ({history}) => {
  return (
    <div onClick={() => {
      history.goBack()
    }}>
      <img className="goback__icon" src="/icons/chevron-right.svg" alt="checkout"/>
    </div>
  );
};

export default withRouter(GoBack);


