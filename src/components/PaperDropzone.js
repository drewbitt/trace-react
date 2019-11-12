import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import { Paper } from "@material-ui/core";
import { searchAnime } from "./../utils/main";

function PaperDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    var aniData = searchAnime(acceptedFiles); // one file always
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
