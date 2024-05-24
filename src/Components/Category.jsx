import styles from "./Category.module.css";
import { LiaDrumSolid } from "react-icons/lia";
import { GiFlute, GiViolin, GiTrumpet } from "react-icons/gi";
import { VscPiano } from "react-icons/vsc";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Category() {
  const list = [
    { name: "Percussion", icon: <LiaDrumSolid />, products: "5" },
    { name: "Woodwind", icon: <GiFlute />, products: "8" },
    { name: "String", icon: <GiViolin />, products: "10" },
    { name: "Brass", icon: <GiTrumpet />, products: "9" },
    { name: "Keyboard", icon: <VscPiano />, products: "3" },
  ];

  const arrayDataItems = list.map((i) => (
    <div key={i.name} className={styles.card}>
      {/* <span className={styles.icon}>{i.icon}</span> */}
      <span className={styles.text}>{i.name}</span>
      <span className={styles.delIcon}>
        <RiDeleteBin6Fill />
      </span>
      <h2 className={styles.heading}>{i.products}</h2>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Categories</h1>
        <div className={styles.cards}>{arrayDataItems}</div>
        <br></br>
        <div>
          <button className={styles.btn}>ADD NEW CATEGORY</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
