import styles from "./Customers.module.css";
import { HiClipboardDocumentList, HiCurrencyDollar } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";

const Customers = () => {
  const list = [
    {
      id: 1,
      first: "Ryan",
      last: "Malik",
      email: "ryan@gmail.com",
      orders: 5,
      spent: 200,
    },
    {
      id: 2,
      first: "Alia",
      last: "Bhatt",
      email: "alia@gmail.com",
      orders: 9,
      spent: 250,
    },
    {
      id: 3,
      first: "Siya",
      last: "Khurana",
      email: "siya@gmail.com",
      orders: 2,
      spent: 10,
    },
    {
      id: 4,
      first: "Robin",
      last: "Francis",
      email: "robin@gmail.com",
      orders: 2,
      spent: 150,
    },
  ];

  const arrayDataItems = list.map((i) => (
    <tr key={i.id}>
      <td>{i.id}</td>
      <td>{i.first}</td>
      <td>{i.last}</td>
      <td>{i.email}</td>
      <td>{i.orders}</td>
      <td>${i.spent}</td>
    </tr>
  ));

  const orderSum = list.reduce(
    (total, num) => {
      return Number(total) + Number([num.orders]);
    },
    [0]
  );

  const amount = list.reduce(
    (sum, i) => {
      return Number(sum) + Number(i.spent);
    },
    [0]
  );

  const count = list.reduce((total, i) => {
    return i.id;
  });

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Customers</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.text}>Customers</span>
            <span>
              <BsPeopleFill className={styles.icon} />
            </span>
            <p className={styles.digit}>{count}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.text}>Order Count</span>
            <span>
              <HiClipboardDocumentList className={styles.icon} />
            </span>
            <p className={styles.digit}>{orderSum}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.text}>Total Amount</span>
            <span>
              <HiCurrencyDollar className={styles.icon} />
            </span>
            <p className={styles.digit}>$ {amount}</p>
          </div>
        </div>
        <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <th>S.no</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Amount Spent</th>
              </tr>
              {arrayDataItems}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
