import "./Slider.css"
import {
    HomeOutlined,
    UsergroupAddOutlined,
    FormOutlined,
    FileAddOutlined
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
function Appslider() {
    const navigate = useNavigate()

    const allusers = () => {
        navigate("/users")
    }
    const gohome = () => {
        navigate("/")
    }
    
    return (
        <div className="slider-main">
            <ul className="slider-list">
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
            </ul>
        </div>
    );
}

export default Appslider;