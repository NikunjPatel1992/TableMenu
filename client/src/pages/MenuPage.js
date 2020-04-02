import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../redux/action';
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import Card from '../components/Card';

export default function Menu() {
  const dispatch = useDispatch();
  const menuInfo = useSelector(state => state.menu.menuInfo);
  const status = useSelector(state => state.menu.status);
  console.log(menuInfo);
  console.log(status);


  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  const renderMenu = () => {
    if (status === "success") {
      return (
        <div>
          <Row>
            {menuInfo.map((menu) => (
              <Col size="md-4 sm-4">
                <Card id={menu._id} title={menu.name} body={menu.description} />
              </Col>
            ))}
          </Row>
        </div>
      )
    }
  }

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Menu</h1>
            </Jumbotron>
          </Col>
        </Row>
        {renderMenu()}
      </Container>
    </Container >
  )
}