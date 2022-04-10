import React from 'react';
import "./Bar.css";
import BarOption from "./BarOptions";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import BarOptions from "./BarOptions";

function Bar(props) {
    return (
    <div className="Bar">
      <TwitterIcon className="bar__twitterIcon" />
      <BarOption Icon={HomeIcon} text="Home" active={true} />
      <BarOptions Icon={SearchIcon} text="Explore" />
      <BarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <BarOptions Icon={MailOutlineIcon} text="Messages" />
      <BarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <BarOptions Icon={ListAltIcon} text="Lists" />
      <BarOptions Icon={PermIdentityIcon} text="Profile" />
      <BarOptions Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="bar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
    );
}

export default Bar;