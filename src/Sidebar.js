import { LocalHospital, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src=''title='david' />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
            <SidebarRow Icon={PeopleIcon} title="friends" />
            <SidebarRow Icon={ChatIcon} title="messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />

        </div>
    ) 
}

export default Sidebar
