import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

const index = async () => {
    try {
      const res = await axios.get(BASE_URL)
      console.log(res)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

const updatePet = async (formData, petId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${petId}`, formData)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

const deletePet = async (petId) => {
  try {
    const deletedPet = await axios.delete(`${BASE_URL}/${petId}`)
    return deletedPet.data
  } catch (err) {
    console.log(err)
  }
}

export { index, create, updatePet, deletePet }