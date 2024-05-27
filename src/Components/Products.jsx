import { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import style from "./Products.module.css";
import { Link } from "react-router-dom";

function Products() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/product");
        setList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (p_id) => {
    try {
      await axios.delete(`http://localhost:3001/product/${p_id}`);
      setList(list.filter(item => item.p_id !== p_id));
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const arrayDataItems = list.map((item, index) => (
    <tr key={item.p_id}>
      <td>{item.p_id}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      {/* <td>
        <button className={style.icon} onClick={() => deleteProduct(item.p_id)}>
          <RiDeleteBin6Fill />
        </button>
      </td> */}
    </tr>
  ));

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <h1>Products</h1>
        <div className={style.table}>
          <table>
            <tbody>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
              </tr>
              {arrayDataItems}
            </tbody>
          </table>
        </div>
        <button className={style.btn}>
          <Link to="/addproduct" style={{color:"white" , textDecoration:"none"}}>ADD NEW PRODUCT</Link>
        </button>&nbsp;
        <button className={style.btn}>
          <Link to="/updateproduct"style={{color:"white" , textDecoration:"none"}}>UPDATE PRODUCT</Link>
        </button>&nbsp;
        <button className={style.btn}>
          <Link to="/deleteproduct" style={{color:"white", textDecoration:"none"}}>DELETE PRODUCT</Link>
        </button>
      </div>
    </div>
  );
}

export default Products;
