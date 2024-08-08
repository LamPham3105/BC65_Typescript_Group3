import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const UserMenu: React.FC = () => {
  const navigate = useNavigate();

  const dispatch: DispatchType = useDispatch();

  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogOut = () => {
    dispatch(logout());
    navigate(0);
  };

  const handleManage = () => {
    navigate("/info-user");
  };

  const renderPopup = () => {
    if (userLogin) {
      return (
        <>
          <a className="dropdown-item" onClick={handleManage}>
            Manage information
          </a>
          <a className="dropdown-item" onClick={handleLogOut}>
            Log out
          </a>
        </>
      );
    } else {
      return (
        <>
          <a
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#authModal"
          >
            Log in
          </a>
          <a
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#authModal"
          >
            Register
          </a>
        </>
      );
    }
  };

  const renderLogin = () => {
    if (userLogin) {
      return (
        <div
          className="dropdown-toggle"
          id="dropdownMenuButton"
          aria-haspopup="true"
          aria-expanded={showMenu}
          onClick={handleMenuToggle}
          style={{ cursor: "pointer" }}
        >
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{ color: "white" }}
          >
            <span
              style={{ paddingLeft: "10px", color: "white", fontWeight: "400" }}
            >
              {userLogin.user?.name}
            </span>
          </i>
        </div>
      );
    } else {
      return (
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          aria-haspopup="true"
          aria-expanded={showMenu}
          onClick={handleMenuToggle}
          style={{ marginTop: "0px" }}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
        </button>
      );
    }
  };

  return (
    <div className="dropdown">
      {renderLogin()}
      <div
        className={`dropdown-menu ${showMenu ? "show" : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        {renderPopup()}
      </div>
    </div>
  );
};

export default UserMenu;
