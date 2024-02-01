import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Qcard from './QuickLinkCard';

export default function QuickLinks() {
  return (
    <>
   <div className='col-10'
    style={{marginTop:"1rem"}}
   >
    <h2 className='text-center my-4'>Quick Links</h2>
      <Row className='d-flex justify-content-center align-items-center'>
      <Col sm={6} md={4} className='d-flex justify-content-center align-items-center my-3'><Qcard/></Col>
      <Col sm={6} md={4} className='d-flex justify-content-center align-items-center my-3'><Qcard/></Col>
      <Col sm={6} md={4} className='d-flex justify-content-center align-items-center my-3'><Qcard/></Col>
      <Col sm={6} md={4} className='d-flex justify-content-center align-items-center my-3'><Qcard/></Col>
      <Col sm={6} md={4} className='d-flex justify-content-center align-items-center my-3'><Qcard/></Col>
      <Col sm={6} md={4} className='d-flex justify-content-center align-items-center my-3'><Qcard/></Col>
      </Row>
    </div>
    </>
  )
}
