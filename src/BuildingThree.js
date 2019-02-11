import React, { Component } from 'react';
import { Button } from 'reactstrap';
import b3 from './b3.jpg';
import b31 from './building/b3/b31.jpg';
import b32 from './building/b3/b32.jpg';
import b33 from './building/b3/b33.jpg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import TableThree from './component/TableThree'

const items = [
  {
    src: b31,
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header'
  },
  {
    src: b32,
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    // header: 'Slide 2 Header'
  },
  {
    src: b33,
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    // header: 'Slide 2 Header'
  }
];

class BuildingThree extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img width="100%" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Card className="App-header">
                  <CardBody>
                    <CardTitle>คณะวิเทศศึกษา</CardTitle>
                    <CardSubtitle>Faculty of International Study</CardSubtitle>
                  </CardBody>
                  {/* <img width="70%" src={b3} /> */}
                  <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
                  <CardBody>
                    <CardText>อาคาร 3</CardText>
                    <TableThree />
                  </CardBody>
                </Card><br></br>
              </Col>
            </Row>
          </Container>


          <Container>
            <Row>
              <Col><a href="/buildingTwo"><Button outline color="success">prev</Button></a></Col>
              <Col><a href="/mixBuilding"><Button outline color="primary">Building</Button></a></Col>
              <Col><a href="/buildingFive"><Button outline color="success">next</Button></a></Col>
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
export default BuildingThree;