import { useEffect ,useState, useCallback} from "react";
import $ from "jquery";
const useEscapse = (setPopup) =>{

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
          $('.displayPopup').fadeOut();
          $('.displayPopupCollector').fadeOut();
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