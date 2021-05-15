import React, {useState} from 'react';
import "../../css/Register.css"
import {Button, Card, Col, Form} from "react-bootstrap";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <div className={"Wrapper"}>
                <Card id={"CardRegister"}>
                    <Card.Body id={"CardBody"}>
                        <div>
                            <h1>HÃY LÀ MỘT THÀNH VIÊN CỦA FASTFOOD NGAY HÔM NAY</h1>
                            <p>Tận hưởng là thành viên của fastfood với các ưu đãi & khuyến mãi đặc biệt!</p>
                        </div>
                        <div>
                            <Form onSubmit={handleSubmit} id={"LoginForm"}>

                                <Form.Group size="lg" controlId="FullName">
                                    <Form.Control
                                        id={"EditText"}
                                        autoFocus
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={"Họ tên"}
                                    />
                                </Form.Group>

                                <Form.Group size="lg" controlId="email">
                                    <Form.Control
                                        id={"EditText"}
                                        autoFocus
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={"Email"}
                                    />
                                </Form.Group>

                                <Form.Group size="lg" controlId="password">
                                    <Form.Control
                                        id={"EditText"}
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={"Mật khẩu"}
                                    />
                                </Form.Group>

                                <Form.Group size="lg" controlId="ConfirmPassword">
                                    <Form.Control
                                        id={"EditText"}
                                        autoFocus
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={"Nhập lại mật khẩu"}
                                    />
                                </Form.Group>

                                <Form.Group size="lg" controlId="PhoneNumber">
                                    <Form.Control
                                        id={"EditText"}
                                        autoFocus
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={"Điện thoại"}
                                    />
                                </Form.Group>

                                <Form.Group size="lg" controlId="Gender">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form.Check
                                        type={"radio"} label={"Nam"}/>
                                    <Form.Check
                                        type={"radio"} label={"Nữ"}/>
                                </Form.Group>

                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col} size="lg" controlId="DateOfBirth">
                                        <Form.Control as={"select"} defaultValue="Ngày">
                                            <option>Ngày</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Button block size="lg" type="submit" disabled={!validateForm()} id={"ButtonLogin"}>
                                    ĐĂNG KÝ
                                </Button>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
export default Register