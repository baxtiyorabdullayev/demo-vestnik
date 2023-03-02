import "./Registration.css";
import axios from "axios";
import React, { useContext, useState, useMemo } from "react";
import { StateContext } from "../../context";
import Select from "react-select";
import countryList from "react-select-country-list";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Registration() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [middle_name, setMiddle_name] = useState("");
  const [initials, setInitials] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [photo, setPhoto] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const countryHandler = (country) => {
    setCountry(country.value);
  };

  return (
    <div className="registration">
      <Container className="px-5">
        <h1 className="mt-5">РЕГИСТРАЦИЯ</h1>
        <Form>
          {/* username  */}
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

          {/* first name  */}
          <FloatingLabel controlId="first_name" label="Имя" className="mb-3">
            <Form.Control
              name="first_name"
              value={first_name}
              type="text"
              placeholder="Имя"
              required
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </FloatingLabel>

          {/* lats name  */}
          <FloatingLabel controlId="last_name" label="Фамилия" className="mb-3">
            <Form.Control
              name="last_name"
              value={last_name}
              type="text"
              placeholder="Фамилия"
              required
              onChange={(e) => setLast_name(e.target.value)}
            />
          </FloatingLabel>

          {/* email  */}
          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          {/* password1  */}
          <FloatingLabel controlId="password1" label="Пароль" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Пароль"
              name="password1"
              value={password1}
              required
              onChange={(e) => setPassword1(e.target.value)}
            />
            <Form.Text className="text-muted">
              Пароль должен содержать не менее 6 знаков.
            </Form.Text>
          </FloatingLabel>

          {/* password2  */}
          <FloatingLabel
            controlId="password2"
            label="Повторить пароль"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Повторить пароль"
              name="password2"
              value={password2}
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
          </FloatingLabel>

          {/* profile  */}
          <h3 className="mb-3">профиль</h3>

          {/* middle name  */}
          <FloatingLabel
            controlId="middle_name"
            label="Отчество"
            className="mb-3"
          >
            <Form.Control
              name="middle_name"
              value={middle_name}
              type="text"
              placeholder="Отчество"
              required
              onChange={(e) => setMiddle_name(e.target.value)}
            />
          </FloatingLabel>

          {/* initials  */}
          <FloatingLabel controlId="initials" label="Инициалы" className="mb-3">
            <Form.Control
              name="initials"
              value={initials}
              type="text"
              placeholder="Инициалы"
              required
              onChange={(e) => setInitials(e.target.value)}
            />
            <Form.Text className="text-muted">
              Алексей Алексеевич Бородин = ААБ
            </Form.Text>
          </FloatingLabel>

          {/* gender  */}
          <FloatingLabel controlId="gender" label="Пол" className="mb-3">
            <Form.Select
              aria-label="Floating label select example"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="m">мужчина</option>
              <option value="f">женщина</option>
            </Form.Select>
          </FloatingLabel>

          {/* specialization */}
          <FloatingLabel
            controlId="specialization"
            label="Специализация"
            className="mb-3"
          >
            <Form.Control
              name="specialization"
              value={specialization}
              type="text"
              placeholder="Специализация"
              required
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </FloatingLabel>

          {/* affiliation  */}
          <FloatingLabel
            controlId="affiliation"
            label="Учреждения (перечислить)"
            className="mb-3"
          >
            <Form.Control
              name="affiliation"
              value={affiliation}
              as="textarea"
              placeholder="Учреждения (перечислить)"
              required
              onChange={(e) => setAffiliation(e.target.value)}
              style={{ height: "100px" }}
            />
          </FloatingLabel>

          {/* country  */}
          <Form.Group className="mb-3">
            <Form.Label>Страна</Form.Label>
            <Select
              options={options}
              value={country}
              onChange={countryHandler}
            />
          </Form.Group>

          {/* phone number  */}
          <FloatingLabel
            controlId="phone_number"
            label="номер телефона"
            className="mb-3"
          >
            <Form.Control
              name="phone_number"
              value={phone_number}
              type="number"
              placeholder="тел номер"
              required
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </FloatingLabel>

          {/* image  */}
          <Form.Group className="mb-3">
            <Form.Label>Pic</Form.Label>
            <Form.Control
              name="photo"
              value={photo}
              type="file"
              placeholder="pic"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              const newUser = {
                username,
                password1,
                password2,
                email,
                first_name,
                last_name,
                profile: {
                  middle_name,
                  initials,
                  gender,
                  specialization,
                  affiliation,
                  country,
                  // phone_number,
                  // photo,
                },
              };
              dispatch({ type: "registration", payload: newUser });
              {
                console.log(newUser);
              }
              axios.post("https://vestnik.tiu-edu.uz/api/v1/register/", {
                ...newUser,
                profile: {
                  ...newUser.profile,
                  phone_number: "+" + phone_number,
                },
              });
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
