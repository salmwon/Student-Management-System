import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

//student register API
export const studentRegisterAPI = async(user) => {
    return await commonAPI('POST', `${SERVER_URL}/studentregister`,user,"")
}

//student login API
export const studentLoginAPI = async(user) => {
    return await commonAPI('POST', `${SERVER_URL}/studentlogin`,user,"")
}

//admin login API
export const adminLoginAPI = async(admin) => {
    return await commonAPI('POST', `${SERVER_URL}/adminlogin`,admin,"")
}

//leave submit
export const leaveSubmitAPI = async(reqBody,reqHeader) => {
    return await commonAPI('POST', `${SERVER_URL}/leavesubmit`,reqBody,reqHeader)
}

//get allleave API
export const getAllLeaveAPI = async() => {
    return await commonAPI('GET', `${SERVER_URL}/allleave`,"","")
}

//handle leave remove Api
export const leaveRemoveAPI = async(id,reqHeader) => {
    return await commonAPI('DELETE', `${SERVER_URL}/leave/remove/${id}`,{},reqHeader)
}

//notes submit
export const notesSubmitAPI = async(reqBody,reqHeader) => {
    return await commonAPI('POST', `${SERVER_URL}/notesupload`,reqBody,reqHeader)
}

//get allnotes API
export const getAllNotesAPI = async() => {
    return await commonAPI('GET', `${SERVER_URL}/allnotes`,"","")
}

//post announcement api
export const postAnnouncementAPI = async(reqBody) => {
    return await commonAPI('POST', `${SERVER_URL}/postannouncement`,reqBody,"")
}

//get announcement api
export const getAllAnnouncementAPI = async() => {
    return await commonAPI('GET', `${SERVER_URL}/getannouncement`,"","")
}

//handle announcement remove Api
export const announceRemoveAPI = async(id,reqHeader) => {
    return await commonAPI('DELETE', `${SERVER_URL}/announcement/remove/${id}`,{},reqHeader)
}