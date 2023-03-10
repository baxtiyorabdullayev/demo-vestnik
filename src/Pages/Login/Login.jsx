import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Container>
        <h1 className="pt-5">Войти</h1>
        <Form>
          <FloatingLabel controlId="username" label="Логин" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Логин"
              name="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              Обязательное поле. Не более 150 символов. Только буквы, цифры и
              символы @/./+/-/_.
            </Form.Text>
          </FloatingLabel>

          <FloatingLabel controlId="password1" label="Пароль" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Пароль"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Пароль должен содержать не менее 6 знаков.
            </Form.Text>
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить меня" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              const newUser = {
                username,
                password,
              };

              axios.post("https://vestnik.tiu-edu.uz/api/v1/login/", newUser);
            }}
          >
            Submit
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
