import axios from "axios";
const baseUrl = "http://localhost:3001/observations";

/*
axios.interceptors.request.use(function (config) {
  if (config.metod === 'post' && !navigator.onLine) {
    window.dispatchEvent(new CustomEvent('axios', {detail: config}))
  } return config
}, function (error) {
  return Promise.reject(error)
})
*/

const config = () => {
  return {
    headers: {'Content-type': 'Application/json'}
  }
}


const create = async newObs => {
  const response = await axios.post(baseUrl, newObs, config);
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const update = async (id, newObs) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObs, config);
  return response.data;
};

const destroy = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default {
  create,
  destroy,
  getAll,
  update
};
