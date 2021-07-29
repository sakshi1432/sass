import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./l.scss";
import Icon from "@material-ui/core/Icon";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsTwoToneIcon from "@material-ui/icons/AppsTwoTone";
import { BsFillChatDotsFill } from "react-icons/bs";
import SearchIcon from "@material-ui/icons/Search";

const File = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <a class="nav-link" href="#">
            <Icon className="ic">
              <LinkedInIcon />
            </Icon>
          </a>
          <div className="sa">
            <a class="nav-link" href="#">
              <Icon className="se">
                <SearchIcon />
              </Icon>
            </a>
            <input className="inp" placeholder="Search" type="text" />
            <a class="nav-link" href="#">
              <Icon className="ic">
                <NotificationsIcon />
              </Icon>
            </a>
            <a class="nav-link" href="#">
              <Icon className="ic">
                <AppsTwoToneIcon />
              </Icon>
            </a>
            <a class="nav-link" href="#">
              <Icon className="ic">
                <BsFillChatDotsFill />
              </Icon>
            </a>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default File;
