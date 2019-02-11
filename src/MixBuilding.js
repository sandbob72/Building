import React, { Component } from 'react';
import { Button } from 'reactstrap';
import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';
import b5 from './b5.jpg';
import b6 from './b6.jpg';
import b7 from './b7.jpg';
import b8 from './b8.jpg';
import b9 from './b9.jpg';
import './App.css';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class MixBuilding extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>คณะเทคโนโลยีและสิ่งแวดล้อม</CardTitle>
                  <CardSubtitle>Faculty of Technology and Environment</CardSubtitle>
                </CardBody>
                <img width="100%" src={b1} />
                <CardBody>
                  <CardText>อาคาร 1</CardText>
                  <CardLink href="/buildingOne"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>คณะการบริการและการท่องเที่ยว</CardTitle>
                  <CardSubtitle>Faculty of Hospitality and Tourism</CardSubtitle>
                </CardBody>
                <img width="100%" src={b2} />
                <CardBody>
                  <CardText>อาคาร 2</CardText>
                  <CardLink href="/buildingTwo"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>คณะวิเทศศึกษา</CardTitle>
                  <CardSubtitle>Faculty of International Study</CardSubtitle>
                </CardBody>
                <img width="100%" src={b3} />
                <CardBody>
                  <CardText>อาคาร 3</CardText>
                  <CardLink href="/buildingThree"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>อาคารวิทยบริการ(ห้องสมุด)</CardTitle>
                  <CardSubtitle>Academic Service Center(Library)</CardSubtitle>
                </CardBody>
                <img width="100%" src={b5} />
                <CardBody>
                  <CardText>อาคาร 5</CardText>
                  <CardLink href="/buildingFive"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
          </Row>
          <Row>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>อาคารเรียนรวมและปฏิบัติการกลาง</CardTitle>
                  <CardSubtitle>Central Academic and Laboratory Facility</CardSubtitle>
                </CardBody>
                <img width="100%" src={b6} />
                <CardBody>
                  <CardText>อาคาร 6</CardText>
                  <CardLink href="/buildingsix"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>สำนักงานอธิการบดี วิทยาเขตภูเก็ต</CardTitle>
                  <CardSubtitle>The President's Office, Phuket Campus</CardSubtitle>
                </CardBody>
                <img width="100%" src={b7} />
                <CardBody>
                  <CardText>อาคาร 7</CardText>
                  <CardLink href="/buildingSeven"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>หอพักนักศึกษา</CardTitle>
                  <CardSubtitle>Dormitory</CardSubtitle>
                </CardBody>
                <img width="100%" src={b8} />
                <CardBody>
                  <CardText>อาคารหอพักนักศึกษาชาย,อาคารหอพักนักศึกษาหญิงในกำกับ 1 2 3</CardText>
                  <CardLink href="/buildingEight"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
            <Col sm="3">
              <Card>
                <CardBody>
                  <CardTitle>อาคารศูนย์การจัดการเรียนการสอนนานาชาติและพัฒนานักศึกษา</CardTitle>
                  <CardSubtitle>Psu SportsComplex</CardSubtitle>
                </CardBody>
                <img width="100%" src={b9} />
                <CardBody>
                  <CardText>ศูนย์กีฬา</CardText>
                  <CardLink href="/buildingNine"><Button color="info">รายละเอียด</Button></CardLink>
                </CardBody>
              </Card><br></br>
            </Col>
          </Row>
        </Container>
        <a href="/"><Button outline color="danger">Home</Button></a>
      </div>
    );
  }
}
export default MixBuilding;