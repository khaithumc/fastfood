import React, {useEffect, useState} from 'react';
import {Button, Card, CardImg} from "react-bootstrap";
import "../../css/CartPageEmpty.css"
import axios from "axios";

function CartPageEmpty() {
    return (
        <>
            <div className={'Wrapper'}>
                <h4>GIỎ HÀNG CỦA BẠN</h4>
                <hr/>
                <div className={"Wrapper2"}>
                    <img src={"https://seeklogo.com/images/F/fastfood-logo-D673849A4C-seeklogo.com.png"} width={300} />
                    <h5>Giỏ hàng của bạn trống ?
                        Đặt hàng để thưởng thức công thức đặt biệt của Fastfood.</h5>
                    <button className={"ButtonCartOrder"}>
                        <a href={'/'}>
                            ĐẶT HÀNG NGAY
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartPageEmpty