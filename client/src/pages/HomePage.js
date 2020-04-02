import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../redux/action';
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import { Input, FormBtn, PasswordInput } from "../components/Form";

export default function Home() {
  const dispatch = useDispatch();
  const booksInfo = useSelector(state => state.userDetails.userInfo);
  // const status = useSelector(state => state.userDetails.status);

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = values

    for (let i = 0; i < booksInfo.length; i++) {
      if (booksInfo[i].username === username && booksInfo[i].password === password) {
        // console.log("Login Username = " + booksInfo[i].username + " Login Password = " + booksInfo[i].password);
        window.location.assign("/menu");
        return
      }
    }
    alert("Plese Enter Valid Username and Password ");
    window.location.reload();

  }
  const [values, setValues] = useState({ username: '', password: '' })


  return (
    <Container fluid>
      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>User Login</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col size="md-12 sm-12">
            <Input
              value={values.username}
              onChange={handleInputChange}
              name="username"
              placeholder="User Name(Required)"
            />
            <PasswordInput
              value={values.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Password (Required)"
            />
            <FormBtn
              onClick={handleFormSubmit}
            >
              Login
            </FormBtn>
          </Col>
        </Row>
      </Container>
    </Container>

  );
};
