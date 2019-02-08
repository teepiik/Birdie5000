import axios from 'axios'
const baseUrl = 'http://localhost:3001/observations'

const create = async (newObs) => {
    const response = await axios.post(baseUrl, newObs)
    return response.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const update = async (id, newObs) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObs)
    return response.data
}

const destroy = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export default {
    create, destroy, getAll, update
}