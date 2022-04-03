import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarRow.css";
const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarRow
