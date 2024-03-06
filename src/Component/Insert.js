import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Insert = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
     id: '',
    pname: '',
    price: '',
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/addProd', formData);
      console.log(response);
      // Navigate to the display page after adding a record
      navigate('/Display');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
 
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <label>
          Name:
          <input type="text" name="pname" value={formData.pname} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
 
export default Insert;