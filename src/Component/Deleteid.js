import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Deleteid = () => {
  const [data, setData] = useState([]);
  const [productId, setProductId] = useState('');
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getProducts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  const fetchDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getProd/${productId}`);
      setData([response.data]); // Wrap the response data in an array to match the data structure expected by map
    } catch (error) {
      console.error('Error fetching data by ID:', error);
    }
  };
 
  const deleteProductById = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:8080/deleteProd/${id}`);
      fetchData(); // Refetch data after deletion to update the display
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
 
  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };
 
  const handleDeleteById = async () => {
    await deleteProductById(productId); // Delete the product by ID
    setProductId(''); // Clear the input field after deletion
  };
 
  return (
    <div>
      <h2>Product List</h2>
      <label>
        Enter Product ID:
        <input type="text" value={productId} onChange={handleInputChange} />
      </label>
      <button onClick={fetchDataById}>Fetch Data</button>
      <button onClick={handleDeleteById}>Delete Record</button>
    </div>
  );
};
 
export default Deleteid;