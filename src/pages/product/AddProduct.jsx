import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import { AddNewProduct, GetProduct, UpdateProduct } from '../../services/product.service';

const AddProduct = () => {
      const { id } = useParams();
      const [formData, setFormData] = useState({
            productName: '',
            productType: '',
            productPrice: '',
            productShortDescription: ''
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const fetchProductDetails = async () => {
            const res = await GetProduct(id)
            if (res) {
                  setFormData(res)
            }
      };

      const navigate = useNavigate();

      useEffect(() => {
            if (id) {
                  fetchProductDetails()
            }
      }, [id]);

      const [formErrors, setFormErrors] = useState({});

      const handleSubmit = async (e) => {
            e.preventDefault();
            let res;
            if (id) {
                  res = await UpdateProduct(id, formData)
            } else {
                  res = await AddNewProduct(formData)
            }

            if (res) {
                  setFormData({
                        productName: '',
                        productType: '',
                        productPrice: '',
                        productShortDescription: ''
                  });
                  navigate('/')
            }else {
            setFormErrors({
                  productName: 'Product name is required.',
                  productType: 'Please choose product type.',
                  productPrice: 'Please enter product price.',
            });
        }
      };

      return (
            <div className='container'>
                  <form onSubmit={handleSubmit} className='container'>
                        <div className="mb-3">
                              <label htmlFor="productName" className="form-label">Product Name:</label>
                              <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleChange}
                              />
                              {formErrors.productName && <div className="text-danger">{formErrors?.productName}</div>}
                        </div>
                        <div className="mb-3">
                              <label htmlFor="productType" className="form-label">Product Type:</label>
                              <select
                                    className="form-select"
                                    id="productType"
                                    name="productType"
                                    value={formData.productType}
                                    onChange={handleChange}
                              >
                                    <option value="">Select Product Type</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                              </select>
                              {formErrors.productType && <div className="text-danger">{formErrors?.productType}</div>}
                        </div>

                        <div className="mb-3">
                              <label htmlFor="productPrice" className="form-label">Product Price:</label>
                              <input
                                    type="number"
                                    className="form-control"
                                    id="productPrice"
                                    name="productPrice"
                                    value={formData.productPrice}
                                    onChange={handleChange}
                              />
                              {formErrors.productPrice && <div className="text-danger">{formErrors?.productPrice}</div>}
                        </div>
                        <div className="mb-3">
                              <label htmlFor="productShortDescription" className="form-label">Product Short Description:</label>
                              <textarea
                                    className="form-control"
                                    id="productShortDescription"
                                    name="productShortDescription"
                                    value={formData.productShortDescription}
                                    onChange={handleChange}
                              />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
      );
};

export default AddProduct;
