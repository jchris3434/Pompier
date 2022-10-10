import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ open }) {
  const { getRootProps, getInputProps } = useDropzone({});
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <p className="dropzone-content">
          zone de largage
        </p>        
      </div>
    </div>
  );
}

export default Dropzone;