import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import { Paper } from "@material-ui/core";
import { searchAnime } from "./../utils/main";
import { trackPromise } from "react-promise-tracker";

function PaperDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    trackPromise(
      searchAnime(acceptedFiles).then(res => {
        console.log(res);
        props.props.history.push("/results", { results: res });
      })
    );
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
