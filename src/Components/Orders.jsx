import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Orders.module.css";
import { HiClipboardDocumentList, HiCurrencyDollar } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend
    axios.get('http://localhost:3001/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the orders!", error);
      });
  }, []);

  const arrayDataItems = orders.map((order) => (
    <tr key={order._id}>
      <td>{order._id}</td>
      <td>{new Date(order.date).toLocaleDateString()}</td>
      <td> {order.amount}</td>
    </tr>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Orders</h1>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
              
              {arrayDataItems}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
