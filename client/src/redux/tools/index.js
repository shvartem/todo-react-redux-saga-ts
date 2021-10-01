import axios from 'axios';

export async function getData(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw e.response.data;
  }
}

export async function editData(url, body) {
  try {
    await axios.put(`${url}/${body.id}`, body);
    return true;
  } catch (e) {
    throw e.response.data;
  }
}

export async function deleteData(url, id) {
  try {
    await axios.delete(`${url}/${id}`);
    return true;
  } catch (e) {
    throw e.response.data;
  }
}

export async function postData(url, body) {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (e) {
    throw e.response.data;
  }
}
