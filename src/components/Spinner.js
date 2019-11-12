import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingSpinnerComponent = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {+(promiseInProgress === true) ? (
        <h3>Hey I'm a spinner loader wannabe !!!</h3>
      ) : null}
    </div>
  );
};

export default LoadingSpinnerComponent;