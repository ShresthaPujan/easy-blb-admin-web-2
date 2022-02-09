import React, { useCallback, useEffect } from "react";
import { useState } from "react";

export default function Escpdetect(props) {


  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      console.log(props.asd)
       props.asd(false)
    }
    
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return escFunction;
}