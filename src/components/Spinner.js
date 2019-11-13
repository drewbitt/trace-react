import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 10 auto;
  border-color: red;
`;

export const LoadingSpinnerComponent = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress === true ? (
        <div className="sweet-loading">
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={120}
            color={"#123abc"}
          />
        </div>
      ) : null}
    </div>
  );
};

export default LoadingSpinnerComponent;
