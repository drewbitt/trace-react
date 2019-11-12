import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import { Paper } from "@material-ui/core";
import { searchAnime } from "./../utils/main";
import { trackPromise } from "react-promise-tracker";

function PaperDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    var aniData = trackPromise(searchAnime(acceptedFiles)); // one file always
    // TODO: correctly tracks promise with var, but does not wait,
    // so executes the console.log and history push immediately
    console.log(aniData);
    // props.props.history.push({
    //   // TODO: why double props?
    //   pathname: "/results",
    //   state: { results: aniData }
    // });
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    multiple: false
  });
  const { ref, ...rootProps } = getRootProps();

  return (
    <RootRef rootRef={ref}>
      <Paper
        {...rootProps}
        elevation={7}
        className="FileUpload"
        style={{ width: "500px" }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </Paper>
    </RootRef>
  );
}

export default PaperDropzone;
