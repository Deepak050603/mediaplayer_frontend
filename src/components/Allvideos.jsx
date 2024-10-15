import React, { useState } from 'react'
import Videocard from './Videocard'
import { useEffect } from 'react'
import { addVideoTocategoryApi, getVideosApi } from '../services/allApi'



function Allvideos({addVideoStatus,setcategoryStatus}) {
     const[allvideos,setAllVideos]=useState([])
     const[deleteVideoStatus,setdeleteVideoStatus] = useState({})

    // side effect
    const getAllVideo=async()=>{
        const result = await getVideosApi()
        setAllVideos(result.data)
    }
    console.log(allvideos);

    const ondrag =(e)=>{
        e.preventDefault()
      }

      const videoDrop =async(e)=>{
        const {category,video} = JSON.parse(e.dataTransfer.getData("dataShare"))

        const newArray = category.allvideos.filter((item)=>item.id!=video.id)

        const newCategory = {
            Category : category.Category,
            allvideos : newArray,
            id : category.id

        }
       
         
        const result = await addVideoTocategoryApi(category.id,newCategory)
        if(result.status>=200 && result.status<300){
            setcategoryStatus(result.data)
        }
        
   
      }
     
      

    // to handle side effects
    useEffect(()=>{
        getAllVideo()
    },[addVideoStatus,deleteVideoStatus]) 
    

  return (
    <>
   <div>
    <h4>All videos</h4>
    {/* vdeo added */}
        { allvideos.length>0?
            <div className="container " droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e)}>
            <div className="row">
                {allvideos.map((item)=>(
                     <div className="col-md-3 p-2">
                     <Videocard video={item} setdeleteVideoStatus={setdeleteVideoStatus}/>
                 </div>
                
            ))}
               
               
            </div>
        </div>
        :
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4  ">
                    <img src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" alt="no image" className='w-100' />
                    <h5 className='text-warning text-center'>No videos added yet</h5>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
        }
   </div>
      
    </>
  )
}

export default Allvideos
