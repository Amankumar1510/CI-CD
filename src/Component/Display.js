import  { useEffect, useState } from 'react';
import axios from 'axios';
 
const Display = () => {
    console.log("hello");
  const [data, setData] = useState([]);
  console.log(data);
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
        //console.log("chaman");
      const response = await axios.get('http://localhost:8080/getProducts');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  return (
    
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
            {console.log(data)}
          {data && data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.pname}</td> 
              <td>{product.price}</td>
              {/* Render more columns if there are more fields in the data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Display;