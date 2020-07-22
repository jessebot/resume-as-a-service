import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Row from 'react-bootstrap/Row'
import Tooltip from 'react-bootstrap/Tooltip'
import './App.css';

function renderTooltip(props) {
  return (
    <Tooltip id="github-tooltip" {...props}>
      GitHub Profile
    </Tooltip>
  );
}

function renderTooltip2(props) {
  return (
    <Tooltip id="linkedin-tooltip" {...props}>
      LinkedIn Profile
    </Tooltip>
  );
}

function renderTooltip3(props) {
  return (
    <Tooltip id="resume-tooltip" {...props}>
      Resume as a PDF
    </Tooltip>
  );
}

function App() {
  return (
    <div className="App">
     <Container>
      <Row className="justify-content-md-center">
      <Col md={{ span: 7 }}>
			<Card className="text-center" bg="dark">
				<Card.Header>About the Engineer</Card.Header>
				<Card.Body>
                  <Image src="/jesse_july_2020.jpg" alt="Jesse A Hitch" style={{ height: '200px' }} roundedCircle fluid />
                  <Card.Title className="text-muted">(They/Them)</Card.Title>
				  <Card.Text>
				  My name is Jesse Hitch, and I'm a master of being a jack of all trades, also known as a DevOps engineer. I automate, create tool sets, and nerd out on the back end of the internet. Python is my weapon of choice, and Linux remains my valiant companion! Together we navigate the dark waters of Kubernetes and ECS, and conquer the beast that is Docker! I have also been known to wrangle your CI/CD process and relieve developer headaches. You can learn more about what I do in my resume below. Click the top right corner of this page to see the source code, and other project I've worked on.
				  </Card.Text>
				</Card.Body>
                <Card.Footer>
                 <Row className="justify-content-center">
                 <Col sm={3} xs={3}>
						<OverlayTrigger
						  placement="left"
						  delay={{ show: 250, hide: 400 }}
						  overlay={renderTooltip}
                         >
                             <a href="https://github.com/jessebot"><Image src="/github-cat.svg" alt="GitHub" style={{ height: '60px' }} /></a>
                        </OverlayTrigger>
                     </Col>
                     <Col sm={3} xs={3}>
						<OverlayTrigger
						  placement="left"
						  delay={{ show: 250, hide: 400 }}
						  overlay={renderTooltip2}
                         >
                        <a href="https://www.linkedin.com/in/jesse-hitch/"><Image src="/linkedin.svg" alt="LinkedIn" style={{ height: '60px' }} /></a>
                        </OverlayTrigger>
                     </Col>
                     <Col sm={3} xs={3}>
						<OverlayTrigger
						  placement="right"
						  delay={{ show: 250, hide: 400 }}
						  overlay={renderTooltip3}
                         >
                        <a href="https://docs.google.com/document/d/1O-qsyVP444QeaBi9EwygDlGzIWvMMUJP80cPsk2Z6lg/export?format=pdf"><Image src="/googledocs.svg" alt="Resume as a PDF" style={{ height: '60px' }} /></a>
                        </OverlayTrigger>
                     </Col>
                   </Row>
                </Card.Footer>
			</Card>
          </Col>
        </Row>
	  </Container>
	  </div>
  );
}

export default App;
