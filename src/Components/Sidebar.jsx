import {
  BsFillArchiveFill,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
  BsGrid1X2Fill,
  BsPeopleFill,
} from "react-icons/bs";
import { GiMusicalNotes } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <GiMusicalNotes className="icon_header" />
          beatZY..!!
          {/* <BsCart3 className='icon_header'/>*/}
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <ImCross />
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products">
            <BsFillArchiveFill className="icon" />
            Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/category">
            <BsFillGrid3X3GapFill className="icon" />
            Categories
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/customers">
            <BsPeopleFill className="icon" />
            Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/orders">
            <HiClipboardDocumentList className="icon" />
            Orders
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/setting">
            <BsFillGearFill className="icon" />
            Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
