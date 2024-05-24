import { RiDeleteBin6Fill } from "react-icons/ri";
import style from "./Products.module.css";
import { Link } from "react-router-dom";

function Products() {
  const list = [
    { name: "item1", sold: "100", remaining: "50" },
    { name: "item2", sold: "150", remaining: "90" },
    { name: "item3", sold: "100", remaining: "20" },
    { name: "item4", sold: "190", remaining: "20" },
  ];

  const arrayDataItems = list.map((i) => (
    <tr key={i.name}>
      <td>{i.name}</td>
      <td>{i.sold}</td>
      <td>{i.remaining}</td>
      <td>
        <button className={style.icon}>
          <RiDeleteBin6Fill />
        </button>
      </td>
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
                <th>Product Name</th>
                <th>Unit Sold</th>
                <th>In Stock</th>
                <th></th>
              </tr>
              {arrayDataItems}
            </tbody>
          </table>
        </div>
        <button className={style.btn}>
          <Link to="/addproduct">ADD NEW PRODUCT</Link>
        </button>
      </div>
    </div>
  );
}

export default Products;
