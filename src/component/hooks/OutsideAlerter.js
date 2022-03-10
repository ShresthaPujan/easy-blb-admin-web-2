import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import cooperativeContext from "../Cooperative/cooperativeContext";
import collectorContext from "../Collector/collectorContext";
import notificationContext from "../Notification/Notificationcontext";
import $ from "jquery";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  const context = useContext(cooperativeContext);
  const { setPopup, setlogoutDropdownactive, setBasicFormErrors, setBasicIsSubmit } = context;

  const contextCcollector = useContext(collectorContext)
  const { collectorBasicFormError, setCollectorBasicFormError,
    collectorIsSubmit, setCollectorIsSubmit } = contextCcollector;

  const { setnotificationPopup, notiFormError, setNotiFormError, notiIsSubmit, setNotiIsSubmit } = useContext(notificationContext)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {

      if (ref.current && !ref.current.contains(event.target)) {
        setPopup(false);
        setnotificationPopup(false);
        contextCcollector.setPopup(false);
        $('.displayPopup').fadeOut();
        $('.displayPopupCollector').fadeOut();
        setBasicFormErrors({ err: 1 });
        setBasicIsSubmit(false);
        setNotiFormError({ err: 1 });
        setNotiIsSubmit(false);
        setCollectorIsSubmit(false);
        setCollectorBasicFormError({});
      }

    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;