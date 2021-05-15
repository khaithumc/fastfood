import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import "../../css/Slide.css"

function Slide() {
    return(
        <div className={"slide"}>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/33ca53a80cc682c16ddedcb42c136e96.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/db2341cafbc5cf77ff27b1720bd1d26a.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/567ba9457ba25e2d7aaa8eabaa8d7574.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/9c40abcee6dfa8c67062fce43fb9b948.png"
                        alt="Four slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/9c773a4c9b4f9a28bb762d81131bf340.png"
                        alt="Five slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/8f2529b31790ecf3876bf726e1cfc346.png"
                        alt="Six slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/2ec32651d4cffd624c986cd801691dd4.png"
                        alt="Seven slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://kfcvietnam.com.vn/uploads/banner/1e31f49bb8bbf9691a8de2ac27464766.png"
                        alt="Eight slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slide