import axios from 'axios'
const baseUrl = 'http://localhost:3001/observations'

const create = (newObs) => {
    const request = axios.post(baseUrl, newObs)
    return request.then(response => response.data)
}

const update = (id, newObs) => {
    const request = axios.put(`${baseUrl}/${id}`, newObs)
    return request.then(response => response.data)
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(response)
    console.log(response.data)
    return response.data
}

export default {
    create, update, getAll
}