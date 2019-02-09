import React, { Component } from 'react';
import logo from './logo.svg';
import psu from './psu.jpg';
import './App.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import ReactMapGL, { Popup, Marker, LinearInterpolator, FlyToInterpolator } from 'react-map-gl';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZGJvYjcyIiwiYSI6ImNqcjljNWU3NzBmbWg0M3BnZzF3N2lkNTYifQ.GF26IHfSbbWZz1Q9J0T_9g';

class App extends Component {
  state = {
    viewport: {
      width: 800,
      height: 800,
      latitude: 7.89441,
      longitude: 98.352656,
      zoom: 9
    }
  };
  render() {
    return (

      <div>
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Card className="App-header">
                  {/* <img width="80%" src={psu} /> */}
                  <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                    mapboxApiAccessToken={MAPBOX_TOKEN}>
                    <Popup latitude={7.89441} longitude={98.352656} closeButton={true} closeOnClick={false} anchor="top">
                      <div>Prince of Songkla University, Phuket Campus</div>
                    </Popup>
                  </ReactMapGL>
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
