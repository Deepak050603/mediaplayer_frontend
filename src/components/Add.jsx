import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

faFilm


function Add({setAddVideoStatus}) {

  const [videoDetails, setVideoDetails]=useState({
    caption:"",
    imageUrl:"",
    embedLink:""
  })

    const [show, setShow] = useState(false);

    console.log(videoDetails);

     
    // const getEmbedLink=(e)=>{
    //   const link = e.target.value
    //   if(link.startsWith('https://youtu.be/')){
    //     const embedL=`https://www.youtube.com/embed/${link.slice(17,28)}`
    //     setVideoDetails({...videoDetails,embedLink:embedL})
    //   }
    //   else{
    //     const embedL=`https://www.youtube.com/embed/${link.slice(-11)}`
    //     setVideoDetails({...videoDetails,embedLink:embedL})
    //   }
     
    // }
    const handleCancel =()=>{
      setVideoDetails({
        caption:"",
        imageUrl:"",
        embedLink:""
      })
    }
    const handleAdd=async() =>{
      const{caption,imageUrl,embedLink}=videoDetails
      if(!caption || !imageUrl || !embedLink){
        toast.info('add something')
      }
      else{
        if(videoDetails.embedLink.startsWith('https://youtu.be/')){
          const embedL=`https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`
          // setVideoDetails({...videoDetails,embedLink:embedL})

          const result = await AddVideoApi({...videoDetails,embedLink:embedL})
          console.log(result);
          
          if(result.status>=200 && result.status<300){
            toast.success('video uploaded succesfully')
            handleClose()
            setAddVideoStatus(result.data)
          }
          else{
            toast.error('something went wrong')
            handleClose()
          }
          }
          
        
        else{
          const embedL=`https://www.youtube.com/embed/${videoDetails.embedLink.slice(-11)}`
          // setVideoDetails({...videoDetails,embedLink:embedL})

          const result = await AddVideoApi({...videoDetails,embedLink:embedL})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video uploaded succesfully')
            handleClose()
            setAddVideoStatus(result.data)
          }
          else{
            toast.error('something went wrong')
            handleClose()
          }

        }
      }
    }

   
   
    
    

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);
  return (
    <>
        <div className='d-flex align-items-center'>
            <h5 className='d-none d-md-inline'>Upload a New Video</h5>
            <button className='btn pb-3'onClick={handleShow} ><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
         
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>please fill the following details
            <div className='mt-2 p-3 border border-dark rounded'>
                <div className="mb-3">
                    <input type="text" value={videoDetails.caption} onChange={(e)=> setVideoDetails({...videoDetails,caption : e.target.value})} placeholder='Video caption' className='form-control' />
                </div>
                <div className="mb-3">
                    <input type="text" value={videoDetails.imageUrl}  onChange={(e)=> setVideoDetails({...videoDetails, imageUrl : e.target.value})}  placeholder='Video image' className='form-control' />
                </div>
                <div className="">
                    <input type="text" value={videoDetails.embedLink} onChange={(e)=> setVideoDetails({...videoDetails, embedLink : e.target.value})}   placeholder='Video url' className='form-control' />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel} >
           Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </>
  )
}

export default Add
