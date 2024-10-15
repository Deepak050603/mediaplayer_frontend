import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'


function Watchhistory() {
  const [allHisvideos, setallHisVideos] = useState([])
  const [deleteStatus,setdeleteStatus] = useState(false)

  const getAllHistoryVideos = async () => {
    const result = await getAllVideoHistoryApi()
    setallHisVideos(result.data);

  }
  console.log(allHisvideos);

  const handleDelete=async(id)=>{
    const result =await deleteHistoryVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setdeleteStatus(true)
    }
    
  }

  useEffect(() => {
    getAllHistoryVideos()
    setdeleteStatus(false)
  }, [deleteStatus])
  return (
    <div className='p-4'>
      <div className="d-flex mt-5">
        <h4>Watch history</h4>
        <Link to={'/home'} style={{ textDecoration: "none" }} className='ms-auto' ><h5><FontAwesomeIcon icon={faHouse} /> <span className='d-none d-md-inline'>Back home</span></h5></Link>
      </div>
      <div className='.container'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 table-responsive">
            {allHisvideos?.length > 0 ?
              <table className='table mt-5'>
                <thead>
                  <tr>
                    <th>SL.NO</th>
                    <th>Caption</th>
                    <th>URL</th>
                    <th>Time stamp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>


                  {allHisvideos?.map((item, index) => (
                    <tr>
                      <td>{index+1}</td>
                      <td>{item?.caption}</td>
                      <td>{item?.url}</td>
                      <td>{item?.time}</td>
                      <td><Button variant="danger" onClick={()=>{handleDelete(item?.id)}} ><FontAwesomeIcon icon={faTrash} /></Button></td>
                    </tr>
                  ))}

                </tbody>
              </table>
              :
              <h3 className='text-warning text-center'>No Watch history</h3>}
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>
    </div>
  )
}

export default Watchhistory
