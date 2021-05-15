import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import "../../css/Login.css"

function Login() {

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
            <div>
                <h2>ĐĂNG NHẬP</h2>
                <Form onSubmit={handleSubmit} id={"LoginForm"}>
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
                            placeholder={"Password"}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()} id={"ButtonLogin"}>
                        ĐĂNG NHẬP
                    </Button>
                </Form>
                <p>Bạn chưa có tài khoản, <a href={"/register"}>đăng ký ngay</a></p>
            </div>
        </>
    )
}
export default Login