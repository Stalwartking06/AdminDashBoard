import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";
import Category from "./Components/Category";
import AddProduct from "./Components/AddProduct";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <BrowserRouter>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/">
            <Route path="dashboard" element={<Home />} />
            <Route path="products" element={<Products />}>
            </Route>
            <Route path="addproduct" element={<AddProduct />} />

            <Route path="category" element={<Category />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Products /> */}
      {/* <Category /> */}
      {/* <AddProduct /> */}
      {/* <Customers /> */}
      {/* <Orders /> */}
    </div>
    // <AddProduct></AddProduct>
  );
}

export default App;
