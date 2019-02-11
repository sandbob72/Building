import React, { Component } from 'react';
import PSUbuilding from './PSUbuilding.jpg';
import './App.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

class App extends Component {
  render() {
    return (

      <div>
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Card className="App-header">
                <CardText>PSU.Phuket Building</CardText>
                  <img width="80%" src={PSUbuilding} />
                </Card><br></br>
              </Col>
            </Row>
          </Container>
          <div className = "app">
          <Container>
            <Row>
              <Col><a href="/"><Button outline color="danger">Home</Button></a></Col>
              <Col><a href="/mixBuilding"><Button outline color="primary">Building</Button></a></Col>
            </Row><br></br>
          </Container>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
