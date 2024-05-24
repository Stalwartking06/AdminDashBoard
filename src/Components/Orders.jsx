import styles from "./Orders.module.css";
import { HiClipboardDocumentList, HiCurrencyDollar } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";

const Orders = () => {
  const list = [
    { id: 1, date: "10/3/2024", amount: 50, status: "completed" },
    { id: 2, date: "14/3/2024", amount: 30, status: "pending" },
    { id: 3, date: "09/3/2024", amount: 100, status: "cancelled" },
  ];

  const arrayDataItems = list.map((i) => (
    <tr key={i.id}>
      <td>{i.id}</td>
      <td>{i.date}</td>
      <td>{i.status}</td>
      <td>$ {i.amount}</td>
    </tr>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Orders</h1>
        <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount </th>
              </tr>
              {arrayDataItems}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
