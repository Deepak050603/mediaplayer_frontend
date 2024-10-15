import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
         <Container className='d-flex justify-content-center align-items-center my-5 mx-4'>
      <Row className='mt-5'>
       
        <Col md={6}>
        <h2>Welcome to <span className='text-warning'>media player</span></h2>
        <p style={{textAlign:'justify'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, harum. A velit eius sint eveniet distinctio repudiandae, maiores vero rem doloribus soluta perspiciatis placeat sed similique tempore, excepturi, reprehenderit quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta mollitia ullam error, aut vitae doloribus. Iure quidem magnam animi nobis tempore unde! Quaerat excepturi libero, eum sit quasi tempora nemo.</p>
       <Link to={'/home'}> <button className='btn btn-warning'>Get started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center '>
        <img src="https://t3.ftcdn.net/jpg/07/53/31/20/360_F_753312075_Q1j95Lp7jouCkRjQZJEoCoj1bJpDnvDl.jpg" alt="no image" className='w-75 mt-4 mt-md-0' />
        </Col>
       
      </Row>
    </Container>
    <Container className='mt-5'>
      <h2 className='text-center'>Features</h2>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.tenor.com/b8o4QL3NxV4AAAAM/sound-wave-waves.gif" style={{height:200}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://gifdb.com/images/high/simple-audio-sound-wave-awolo4ekfaknri0n.gif" style={{height:200}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.tenor.com/sFXhY5dsVeYAAAAM/audio-electromagnetic-waves.gif" style={{height:200}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          
        </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
    <div className='container'>
      <div className='row p-md-5 p-3'>
        <div className='col border border-secondary border-2 rounded p-md-5 p-3'> 
          <div className='row'>
            <div className="col-md-6">
            <h3 className='text-warning'>Simple fast and PowerFul</h3>
              <p><span className='fs-4'>Play Everything</span>:amet consectetur adipisicing elit. Nam architecto ad consectetur, animi iusto eius unde impedit labore blanditiis laudantium</p>
              <p><span className='fs-4'>Play Everything</span>:amet consectetur adipisicing elit. Nam architecto ad consectetur, animi iusto eius unde impedit labore blanditiis laudantium</p>
              <p><span className='fs-4'>Play Everything</span>:amet consectetur adipisicing elit. Nam architecto ad consectetur, animi iusto eius unde impedit labore blanditiis laudantium</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <iframe width="100%" height="380" src="https://www.youtube.com/embed/rFgS10V8908" title="ARM (Malayalam) - Trailer |Tovino Thomas,Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing
