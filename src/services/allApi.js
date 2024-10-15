import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const AddVideoApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
export const getVideosApi=async()=>{
    return await commonApi('GET',`${serverUrl}/videos`)
}
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

export const getAllVideoHistoryApi =async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}

export const deleteVideoApi =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

export const deleteHistoryVideoApi =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}
export const addCategoryApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}
export const getAllCategoryApi =async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

export const deleteCategoryApi =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

export const addVideoTocategoryApi =async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
