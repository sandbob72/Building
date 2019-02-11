import React, { Component } from 'react';
import { Button } from 'reactstrap';
import b9 from './b9.jpg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import TableNine from './component/TableNine'

class BuildingNine extends Component{
    render(){
        return(
        <div className="App">
           <header className="App-header">
          <Container>
            <Row>
              <Col>
              <Card>
                <CardBody>
                  <CardTitle>อาคารศูนย์การจัดการเรียนการสอนนานาชาติและพัฒนานักศึกษา</CardTitle>
                  <CardSubtitle>Psu SportsComplex</CardSubtitle>
                </CardBody>
                <img width="100%" src={b9} />
                <CardBody>
                  <CardText>ศูนย์กีฬา</CardText>
                  <TableNine />
                </CardBody>
              </Card><br></br>
              </Col>
            </Row>
          </Container>


          <Container>
            <Row>
              <Col><a href="/buildingEight"><Button outline color="success">prev</Button></a></Col>
              <Col><a href="/mixBuilding"><Button outline color="primary">Building</Button></a></Col>
            </Row><br></br>
          </Container>
        </header>
        <header className="App-hOne">

          <a href="/"><Button outline color="danger">Home</Button></a>

        </header>
        </div>
        );
    }
}
export default BuildingNine;