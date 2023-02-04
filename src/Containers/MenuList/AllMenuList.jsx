import Appslider from "../../Compnents/Appslider/Slider";
import Header from "../../Compnents/Header/Header";
import "../Container.css"
import { useNavigate } from "react-router-dom"
import {
    faClipboard,
    faHouse,
    faArchive,
    faTasks,
    faUsers,
    faCartPlus,
    faPentoSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import {
    SettingOutlined,
    EllipsisOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Avatar, Card } from 'antd';
import axios from "axios";
const { Meta } = Card;



function AllMenulist() {
    const [products, setproducts] = useState([]);
    const navigate = useNavigate()
    const gohome = () => {
        navigate("/")
    }

    useEffect(() => {
        axios.get(`http://localhost:5051/getproducts`)
            .then((res) => {
                console.log(res.data)
                setproducts(res.data)
            })
            .catch((err) => console.log(err))
    }, []);
    return (
        <>
            <div className="Header-app">
                <Header />
            </div>
            <div>
                <div className="Slider">
                    <Appslider />
                </div>
                <div className="main-section-allmenu">
                    <div style={{ marginTop: 10 }}>
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onClick={gohome}>
                            <FontAwesomeIcon icon={faHouse} />
                        </span> /
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onClick={gohome}> Home  </span> /
                        <span style={{ color: "#7E37D8" }}> Menu  </span> /
                        <span style={{ color: "#6c757d" }} >  All Menu List </span>
                    </div>
                    <div className="allproducts">
                        {products.map((items, i) => {
                            return (
                                <div className="allproductscards" style={{marginTop:15}} key={i}>
                                    <Card
                                        style={{
                                            width: 300,
                                        }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                        actions={[
                                            <DeleteOutlined  key="delete" style={{fontSize:20}} />,
                                            <EditOutlined key="edit" style={{fontSize:20}} />,
                                            // <EllipsisOutlined key="ellipsis" style={{fontSize:20}} />,
                                            <div>50 RS</div>
                                        ]}
                                    >
                                        <Meta
                                            title="Pizza"
                                            description="Pizza with hot flavor "
                                        />
                                    </Card>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

export default AllMenulist;