import { useState, useRef } from "react";

const useView = () => {
  const [navIcon, setNavIcon] = useState(true);
  const [wrapperOption, setWrapperOption] = useState(false);
  let openIcon = useRef("nav_icon");
  const wrapper = useRef("wrapper");
  const onMouseOver = () => {
    setNavIcon(!navIcon);

    openIcon.current = navIcon ? "nav_icon" : "nav_icon_hover";
    //alert(openIcon + "::");
  };
  const onClick = () => {
    setWrapperOption(!wrapperOption);
    wrapper.current = wrapperOption ? "wrapper" : "wrapper_open";
  };
  return [openIcon.current, wrapper.current, onMouseOver, onClick];
};
export { useView };
