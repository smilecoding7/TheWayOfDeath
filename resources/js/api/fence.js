import axios from 'axios'

let apiUrl = 'http://open.aichezaixian.com/route/rest';

function getData(payload){
    return axios.get(apiUrl,{params:payload})
}

// function postData(payload){

// }

function getFence(payload){
    return axios.get('/api/v1/fence',{params:payload})
}

function createFence(payload){
    return axios.post('/api/v1/fence',payload)
}

function updateFence(payload){
    return axios.put('/api/v1/fence',payload)
}

function deleteFence(payload){
    return axios.delete('/api/v1/fence',{data:payload})
}

function getInstruction(payload){
    return axios.get('/api/v1/instruction',{params:payload})
}

function createInstruction(payload){
    return axios.post('/api/v1/instruction',payload)
}

function updateInstruction(payload){
    return axios.put('/api/v1/instruction',payload)
}

function deleteInstruction(payload){
    return axios.delete('/api/v1/instruction',{data:payload})
}

export{
    getData,
    getFence,
    createFence,
    updateFence,
    deleteFence,
    getInstruction,
    createInstruction,
    updateInstruction,
    deleteInstruction,
}