import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <div className="login">
      <Container>
        <h1 className="pt-5">Войти</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Логин" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить меня" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-5">
            ВХОД
          </Button>
        </Form>

        <NavLink to="/registration">Регистрация нового пользователя</NavLink>
        <br />
        <NavLink to="/forgetPassword">Забыли Ваш пароль?</NavLink>
      </Container>
    </div>
  );
}

export default Login;
