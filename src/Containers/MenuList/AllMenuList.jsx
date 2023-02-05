import Appslider from "../../Compnents/Appslider/Slider";
import Header from "../../Compnents/Header/Header";
import "../Container.css"
import { useNavigate } from "react-router-dom"
import {
    faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Button from 'react-bootstrap/Button';
import {
    SettingOutlined,
    ExclamationCircleFilled,
    EditOutlined,
    DeleteOutlined,
    EllipsisOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Avatar, Input, } from 'antd';
import Card from 'react-bootstrap/Card';
import { Button, Modal, Space } from 'antd';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const { Meta } = Card;


const { confirm } = Modal;


function AllMenulist() {
    const [deleteproducd, setdeleteproduct] = useState()
    const [datahandler, setdatahandler] = useState(false);
    const [products, setproducts] = useState();
    const [ProductTitle, setProductTitle] = useState();
    const [ProductDescription, setProductDescription] = useState();
    const [ProductPrice, setProductPrice] = useState();
    const [edit, setedit] = useState(false);
    const [EditingProduct, setEditingProduct] = useState({});
    const navigate = useNavigate()
    const gohome = () => {
        navigate("/")
    }

    useEffect(() => {
        axios.get(`http://localhost:5051/getproducts`)
            .then((res) => {
                console.log(res.data)
                if (res.data.length == 0) {
                    setproducts("")
                }
                else if (res.data.length >= 0)
                    setproducts(res.data)
            })
            .catch((err) => console.log(err))
    }, [datahandler]);

    const showPromiseConfirm = (id) => {
        confirm({
            title: 'Do you want to delete these item?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    console.log(id)
                    DeleteProduct(id)
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => { });
            },
            onCancel() { },
        });
    };


    const DeleteProduct = (id) => {
        axios.delete(`http://localhost:5051/removeproduct/${id}`)
            .then((res) => {
                console.log(res.data)
                toast.success("Product Delete Successfully !")
                setdatahandler(!datahandler)
            })
            .catch((err) => console.log(err))
        console.log("iddd deletepro", id)
    }

    const Changeitems = (product) => {
        setedit(true)
        console.log("edit pro", product)
        setEditingProduct(product)
        // console.log("mil raha hy ",EditingProduct)

        setProductTitle(product.ProductName)
        setProductDescription(product.Description)
        setProductPrice(product.Price)
    }

    const Cancel =()=>{
        setedit(false)
    }

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
                    <ToastContainer
                        position="bottom-right"
                        theme="colored"
                        autoClose={3000}
                    />
                    <div style={{ marginTop: 10 }}>
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onClick={gohome}>
                            <FontAwesomeIcon icon={faHouse} />
                        </span> /
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onClick={gohome}> Home  </span> /
                        <span style={{ color: "#7E37D8" }}> Menu  </span> /
                        <span style={{ color: "#6c757d" }} >  All Menu List </span>
                    </div>
                    <div className="allproducts">
                        {products ? products.map((items, i) => {
                            return (
                                <div className="allproductscards" style={{ marginTop: 15 }} key={i}>
                                    {/* <Card
                                        style={{
                                            width: 300,
                                        }}
                                        cover={
                                            <img
                                                alt="example"
                                                src={require("../../Assests/images/burgers.jpg")}
                                            />
                                        }
                                        actions={[
                                            <DeleteOutlined key="delete" style={{ fontSize: 20 }} onClick={() => showPromiseConfirm(items._id)} />,
                                            <EditOutlined key="edit" style={{ fontSize: 20 }} />,
                                            // <EllipsisOutlined key="ellipsis" style={{fontSize:20}} />,
                                            <div>{items.Price} RS</div>
                                        ]}
                                    >
                                        <Meta
                                            title={items.ProductName} 
                                            description={items.Description}
                                            
                                        />
                                    </Card> */}
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={require("../../Assests/images/burgers.jpg")} />
                                        <Card.Body>
                                            <Card.Title>{(edit && items._id === EditingProduct._id) ? <input type="text" value={ProductTitle} /> : items.ProductName}</Card.Title>
                                            <Card.Text>
                                                {items.Description}
                                            </Card.Text>
                                            <Card.Text>
                                                {edit && items._id === EditingProduct._id ? <button>Done</button> : <EditOutlined key="edit" style={{ fontSize: 20 }} onClick={() => Changeitems(items)} />}
                                                {edit && items._id === EditingProduct._id ? <button onClick={Cancel}>Cancel</button> : <DeleteOutlined key="delete" style={{ fontSize: 20 }} onClick={() => showPromiseConfirm(items._id)} />}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }) :
                            <div>
                                <h1 style={{
                                    color: "#7E37D8",
                                    boxShadow: " 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
                                    backgroundColor: "transparent",
                                    borderRadius: 7,
                                    padding: "7px 8px"
                                }}>
                                    Please Add Your Products
                                </h1>
                            </div>}


                    </div>
                </div>
            </div>
        </>
    );
}

export default AllMenulist;