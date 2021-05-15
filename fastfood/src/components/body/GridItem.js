import React, {useEffect, useState} from 'react';
import {Button, Card, CardImg} from "react-bootstrap";
import "../../css/GridItem.css"
import axios from "axios";

function GridItem() {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/items", {})
            .then(res => {
                const items = res.data;
                setItems(items)
            })
    }, [])

    return (
        <>
            <div className={"Wrapper"}>
                <div className={'GridTitle'}>
                    <h3><b>COMPO 1 NGƯỜI</b></h3>
                </div>
                <div className={'ListCard'}>
                    {items.map((item) => (
                        <Card key={item.id} className={'CardPost'}>
                            <a href={'detail-item-' + item.id}><CardImg variant={'top'} src={item.thumbnail}
                                                                        className={'CardImg'}/></a>
                            <Card.Body className={'CardBody'}>
                                <Card.Title className={'CardTitle'}><b>{item.title}</b></Card.Title>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                <Card.Text className={'CardText'}>
                                    {item.description}
                                </Card.Text>
                                <button className={'ButtonCustom'}>
                                    <a href={'detail-item-' + item.id}>TÙY CHỈNH</a>
                                </button>
                                <button className={'ButtonOrder'}>
                                    <a href={'/'}>ĐẶT HÀNG</a>
                                </button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GridItem