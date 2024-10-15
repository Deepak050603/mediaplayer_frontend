import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addCategoryApi, addVideoTocategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { all } from 'axios';


function Category({categoryStatus}) {

    const [show, setShow] = useState(false);


    const [CategoryName,setACategoryName] = useState("")
    const [allCategory,setallCategory] =useState([])
    const [addCategorystatus,setaddCategorystatus] = useState({})
    const [deleteCategoryStatus,setdeleteCategoryStatus] = useState("")
    const [categoryVideoStatus,setcategoryVideoStatus] = useState("")
    console.log(CategoryName);

    const handleCancel=()=>{
      setACategoryName("")
    }
    

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);

    const handleAdd =async()=>{
      if(CategoryName){
        const reqBody ={
          Category:CategoryName,
          allvideos:[]
        }

        const result = await addCategoryApi(reqBody)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('Category Added Succesfully')
          setaddCategorystatus(result.data)
          handleClose()
        }
        else{
          toast.error('something went wrong')
          handleClose()
        }
        
      }
      else{
        toast.info('please add a category name')
      }
    }

    const getCategory =async()=>{
     const result = await getAllCategoryApi()
     setallCategory(result.data);
     
     
     

    }
    console.log(allCategory);

    const handleDelete=async(id)=>{
      const result = await deleteCategoryApi(id)
      setdeleteCategoryStatus(result.data)
      console.log(result);
      
    }

    const ondrag =(e)=>{
      e.preventDefault()
    }

    const videoDrop = async (e,categoryDetails)=>{
      console.log(categoryDetails);

      const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
      console.log(videoDetails);





      if(categoryDetails.allvideos.find((item)=>item.id==videoDetails.id)){
        toast.error('video already in the category')
      }
      else{
        categoryDetails.allvideos.push(videoDetails)
        console.log(categoryDetails);

            const result = await addVideoTocategoryApi(categoryDetails.id,categoryDetails)
            console.log(result.data);
            

            if(result.status>=200 && result.status<300){
              toast.success('video added succesfully')
              setcategoryVideoStatus(result.data)
            }
            else{
              toast.error('something went wrong')
            }
      }

      
      
     
    }
    
    const videoDrag =(e,video,category)=>{
      console.log(video);
      console.log(category);
      const dataShare ={
        category,
        video
      }
      

      e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
       
    }


    useEffect(()=>{
      getCategory()
    },[addCategorystatus,deleteCategoryStatus,categoryVideoStatus,categoryStatus])
    
  return (
    <>

    <h4>Category</h4>
    <button onClick={handleShow} className='w-100 btn btn-warning mt-3'>Add category </button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='p-3 border border-secondary rounded'>
                <input type="text" placeholder='category'value={CategoryName} onChange={(e)=>{setACategoryName(e.target.value)}} className='form-control' />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

   {allCategory?.length>0 &&


   allCategory.map((item)=>(
    <div className=' p-3 border border-3 border-dark rounded mt-5'droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e,item)}>
    <div className='d-flex justify-content-between mb-3'>
         <h5>{item?.Category}</h5>
         <Button variant="danger" onClick={()=>{handleDelete(item?.id)}} ><FontAwesomeIcon icon={faTrash} /></Button>
    </div>
    {item?.allvideos?.length>0 &&
      item?.allvideos?.map((video)=>(
        <div className='mb-2' draggable onDragStart={(e)=>videoDrag(e,video,item)} >
     <Videocard video={video} isPresent={true}  />
     </div>
      ))
    }
   

 </div>
   ))

   
    }


      
    </>
  )
}

export default Category
