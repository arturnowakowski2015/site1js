import React from "react";
import Button from "../../components/Button";
import { useView } from "./ViewModel";
import { useNavigate } from "react-router-dom";

import "../scss/style.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [openIcon, wrapper, onMouseOver, onClick] = useView();
  return (
    <div className="main-content">
      <div className={wrapper}>
        <div className="nav">
          <Button
            className={openIcon}
            title="X"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOver}
            onClick={onClick}
          />
          <div className="nav__body" onClick={() => navigate("settings")}>
            settings
          </div>
          <div className="nav__body">mmmmmmmm.{openIcon}</div>
          <div className="nav__body">mmmmmmmm.{openIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
