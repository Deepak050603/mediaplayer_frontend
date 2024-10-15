import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'


function Footer() {
  return (
<div className="container-fluid p-4 ">
  <div className="row">
    <div className="col-md-4">
      <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-2'/>Media player</h4>
      <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perferendis repellat! Blanditiis alias necessitatibus corporis ipsa nulla sit dolorum, voluptatum consequatur tenetur optio, ducimus fugit voluptatem ad. Corporis, numquam vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus assumenda deserunt sint illo in facere necessitatibus a, quidem, doloribus commodi voluptatem nostrum repudiandae fugiat? Recusandae esse similique veniam sed doloremque? </p>
    </div>
    <div className="col-md-2 d-flex justify-content-center">
      <div>
        <h4>Links</h4>
        <p className='mt-4'>Landing page</p>
        <p>Home page</p>
        <p>watch history</p>

      </div>
    </div>
    <div className="col-md-2 d-flex justify-content-center">
    <div>
        <h4>Guides</h4>
        <p>react </p>
        <p>react bootstraop</p>
        <p>bootstrap</p>

      </div>
    
    </div>
    <div className="col-md-4 px-5">
          <div>
              <h4>Contact Us</h4>
              <div className='d-flex mt-4'>
                <input type="text" className='form-control' placeholder='Emali Id' />
                <button className='btn btn-warning ms-3'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-between mt-4'>
              <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
              <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
              <FontAwesomeIcon icon={faFacebook} className='fa-2x' />

              </div>
            </div>
          </div>
  </div>
</div>
  )
}

export default Footer
