import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} 
from 'react-icons/bs';

function Header({OpenSidebar}){
  return(
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} style={{color:"black",cursor:"pointer"}}/>
      </div>
      <div className='header-left'>
        {/* <BsSearch className='icon'/> */}
        <h2 style={{color: "black"}}>Admin Dashboard</h2>
      </div>
      <div className='header-right'>
        {/* <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' /> */}
        <a href='#' style={{color: "black"}}>Logout</a>
      </div>
    </header>
  )
}

export default Header;