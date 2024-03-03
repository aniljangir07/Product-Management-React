import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const AllProduct = async() => {
      try {
            const res = await axios.get(`${baseUrl}/product/list`);
            return res.data.products
      } catch (error) {
            console.log("failed", error.message)
      }
};

export const GetProduct = async(id) => {
      try {
            const res = await axios.get(`${baseUrl}/product/view/${id}`);
            return res.data
      } catch (error) {
            console.log("failed", error.message)
      }
};

export const AddNewProduct = async(payload) => {
      try {
            const res = await axios.post(`${baseUrl}/product/add`, payload);
            console.log('res ',res.data)
            return res.data
      } catch (error) {
            console.log("failed", error.message)
      }
};

export const UpdateProduct = async(id, payload) => {
      try {
            const res = await axios.put(`${baseUrl}/product/update/${id}`, payload);
            console.log('res ',res.data)
            return res.data
      } catch (error) {
            console.log("failed", error.message)
      }
};

export const DeleteProduct = async(id) => {
      try {
            const res = await axios.delete(`${baseUrl}/product/delete/${id}`);
            console.log('res ',res.data)
            return res.data
      } catch (error) {
            console.log("failed", error.message)
      }
};

export const StatusProduct = async(id,status) => {
      try {
            let productStatus = status  === 'active' ? 'inactive' : 'active';
            const res = await axios.put(`${baseUrl}/product/update-status/${id}/${productStatus}`);
            console.log('res ',res.data)
            return res.data
      } catch (error) {
            console.log("failed", error.message)
      }
};