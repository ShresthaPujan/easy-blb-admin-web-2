import { useEffect ,useState, useCallback} from "react";

const useEscapse = (setPopup) =>{

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setPopup(false)
         }
        
    }, []);


    useEffect(() => {
        document.addEventListener("keydown", escFunction);
        return () => {
          document.removeEventListener("keydown", escFunction);
       
        };
      }, [escFunction]);


};
export default useEscapse;