import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'

import profilePic from './jesse_july_2020.jpg';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col sm>
			<Card className="text-center" bg="Dark">
				<Card.Header>
				About Me
				</Card.Header>
				<Card.Body>
                <Card.Title>Im Jesse!</Card.Title>
                  <Card.Img variant="top" src={profilePic} alt="Jesse A Hitch" />
				  <Card.Text>
				  I automate, create tool sets, and nerd out on the back end of the internet. Python is my weapon of choice, and Linux remains my valiant companion! Together we navigate the dark waters of Kubernetes and ECS, and conquer the beast that is Docker! I have also been known to wrangle your CI/CD process and relieve developer headaches. You can learn more about what I do in my resume below. Click the top right corner of this page to see the source code, and other project I have worked on.
				  </Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">Links to Github, LinkedIn, My Resume</Card.Footer>
			</Card>
          </Col>
        </Row>
	  </Container>
  );
}

export default App;
