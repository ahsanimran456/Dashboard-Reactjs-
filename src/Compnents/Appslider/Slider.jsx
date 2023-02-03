import "./Slider.css"
import {
    HomeOutlined,
    UsergroupAddOutlined,
    FormOutlined,
    FileAddOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons"

import { Button, Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,
    faClipboard,
    faHouse,
    faArchive ,
    faTasks,
} from '@fortawesome/free-solid-svg-icons'
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('General', '1',<FontAwesomeIcon icon={faHouse} />),
    getItem('Menu', 'sub1', <FontAwesomeIcon icon={faArchive} />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Orders', '2',<FontAwesomeIcon icon={faClipboard}   />),
    getItem('Restaurants List', 'sub2',  <FontAwesomeIcon icon={faTasks}/>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
    getItem('Restaurants List', '3', <FontAwesomeIcon icon={faTasks} />),
];




function Appslider() {
    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const allusers = () => {
        navigate("/users")
    }
    const gohome = () => {
        navigate("/")
    }
    return (
        <div className="slider-main">
            {/* <ul className="slider-list">
                <li className="active" onClick={gohome}>
                    <HomeOutlined /><br />
                    <span>General</span>
                </li>
                <li onClick={allusers}>
                    <UsergroupAddOutlined />  <br />
                    <span>Users</span>
                </li>
                <li >
                    <FormOutlined /><br />
                    <span>Products</span>
                </li>
                <li >
                    <FileAddOutlined /><br />
                    <span>Add Products</span>
                </li>
            </ul> */}
                <Menu className="collaps"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['']}
                    mode="inline"
                    theme="light"
                    items={items}
                />
        </div>
    )
}

export default Appslider;