import React, {useState} from 'react';
import "css/NavigationBar.css";
import {CartIcon} from 'assets/images';
import {Modal} from "react-bootstrap";
import Login from "../body/Login";

function NavigationBar() {

    const [click1, setClick1] = useState(true)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [click4, setClick4] = useState(false)
    const [show, setShow] = useState(false)

    const handleClick1 = () => {
        setClick1(true)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        console.log("1")
    }

    const handleClick2 = () => {
        setClick1(false)
        setClick2(true)
        setClick3(false)
        setClick4(false)
        console.log("2")
    }
    const handleClick3 = () => {
        setClick1(false)
        setClick2(false)
        setClick3(true)
        setClick4(false)
        console.log("3")
    }
    const handleClick4 = () => {
        setClick1(false)
        setClick2(false)
        setClick3(false)
        setClick4(true)
        console.log("4")
    }

    const clickLogo = () => {
        console.log("clik vao logo")
    }

    return (
        <div className={"navbar-handing"}>
            <nav className="navbar-handing-1">
                <div className={"nav-menu-1"}>
                    <div className={"nav-item-1"}>
                        <a className="nav-logo" onClick={clickLogo}>
                            <img src={"https://seeklogo.com/images/F/fastfood-logo-D673849A4C-seeklogo.com.png"}
                                 width={150} height={80} alt={"Fast food"}/>
                        </a>
                    </div>
                    <div className={"nav-item-1"}>
                        <button className={"button-login"} onClick={() => setShow(true)}>
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </nav>
            <nav className="navbar-handing-2">
                <div className={"nav-menu-2"}>
                    <a className={click1 ? "nav-item-2-click" : "nav-item-2"} onClick={handleClick1}>
                        <p>COMBO 1 NGƯỜI</p>
                    </a>

                    <a className={click2 ? "nav-item-2-click" : "nav-item-2"} onClick={handleClick2}>
                        <p>COMBO NHÓM</p>
                    </a>

                    <a className={click3 ? "nav-item-2-click" : "nav-item-2"} onClick={handleClick3}>
                        <p>MENU ƯU ĐÃI</p>
                    </a>

                    <a className={click4 ? "nav-item-2-click" : "nav-item-2"} onClick={handleClick4}>
                        <p>MÓN LẺ</p>
                    </a>

                    <div className="nav-cart">
                        <div className="nav-cart-prod">
                            <img src={CartIcon} alt=""/>
                            <span>0</span>
                        </div>
                        <a href={"/cart-page-empty"}>
                            GIỎ HÀNG
                        </a>
                    </div>
                </div>
            </nav>
            <div className={"ModalLogin"}>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="my-modal"
                >
                    <Modal.Body>
                        <Login/>
                    </Modal.Body>
                </Modal>
            </div>
        </div>

    );
}

export default NavigationBar;