import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Row from 'react-bootstrap/Row'
import Tooltip from 'react-bootstrap/Tooltip'
import './App.css'

function renderTooltip (props) {
  return (
    <Tooltip id='github-tooltip' {...props}>
      GitHub Profile
    </Tooltip>
  )
}

function renderTooltip2 (props) {
  return (
    <Tooltip id='linkedin-tooltip' {...props}>
      LinkedIn Profile
    </Tooltip>
  )
}

function renderTooltip3 (props) {
  return (
    <Tooltip id='resume-tooltip' {...props}>
      Resume as a PDF
    </Tooltip>
  )
}

function App () {
  return (
    <div className='App'>
      <Row className='justify-content-md-center align-items-center'>
        <Col md={10} sm={12} lg={8} xl={6}>
          <Container fluid>
            <Card className='text-center' bg='dark'>
              <Card.Body>
                <Card.Text>
                  <Row className='justify-content-center align-items-center'>
                    <Col sm={5} xs={12}>
                      <Image src={process.env.REACT_APP_PROFILE_PHOTO}
                             alt={process.env.REACT_APP_PROFILE_PHOTO_ALT_TEXT}
                             roundedCircle fluid />
                      <Card.Title>
                        {process.env.REACT_APP_NAME}
                        <div className='text-muted'>({process.env.REACT_APP_PRONOUNS})</div>
                      </Card.Title>
                    </Col>
                    <Col sm={7} xs={12}>
                      <div className='blurb'>
                        {process.env.REACT_APP_BLURB}
                      </div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row className='justify-content-center'>
                  <Col sm={4} xs={4}>
                    <OverlayTrigger placement='right' delay={{ show: 250, hide: 400 }} overlay={renderTooltip3}>
                      <a href={process.env.REACT_APP_RESUME_PDF_URL}><Image src='/googledocs.svg' alt='Resume as a PDF' style={{ height: '60px' }} /></a>
                    </OverlayTrigger>
                  </Col>
                  <Col sm={4} xs={4}>
                    <OverlayTrigger placement='left' delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                      <a href={process.env.REACT_APP_GIT_URL} target='_blank' rel="noreferrer"><Image src='/github-cat.svg' alt='GitHub' style={{ height: '60px' }} /></a>
                    </OverlayTrigger>
                  </Col>
                  <Col sm={4} xs={4}>
                    <OverlayTrigger placement='left' delay={{ show: 250, hide: 400 }} overlay={renderTooltip2}>
                      <a href={process.env.REACT_APP_LINKEDIN_URL} target='_blank' rel="noreferrer"><Image src='/linkedin.svg' alt='LinkedIn' style={{ height: '60px' }} /></a>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default App
