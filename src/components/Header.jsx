import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Header() {
  return (
  <>
 <Navbar className="bg-body-transparent">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}} >
          <Navbar.Brand className='text-warning fs-4' href="#home">
          <FontAwesomeIcon icon={faVideo} className=' me-3' />
       
          Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  </>
  )
}

export default Header
