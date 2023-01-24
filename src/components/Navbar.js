import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import records from '../record.json'
function Navbar() {
  return (
    <div>
      <nav>
        <div className='div1'>
          <img src="/assets/logo.svg" className='girl' alt="logo" />
        </div>
        <div className='div2'>
          <div className='icons'>
            <div className='home'>
              <span class="dot">
                <img src="/assets/home.png" className='homeicon' alt="logo" />
              </span>
            </div>
            <div className='tools'>
              <span class="dot">
                <img src="/assets/tools.png" className='toolsicon' alt="logo" />
              </span>
            </div>
            <div className='bell'>
              <span class="dot">
                <img src="/assets/bell.png" className='bellicon' alt="logo" />
              </span>
            </div>
            <div className='user'>
              <img src="/assets/user.png" className='usericon' alt="logo" />
            </div>
            <div className='more'>
              <span className='dot1'></span>
              <span className='dot1'></span>
              <span className='dot1'></span>
            </div>
          </div>
        </div>
      </nav>
      <nav>
      <DropdownButton id="dropdown-basic-button" >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </nav>
    <div className='box' key='asset_id'>
    {
      //  records.tasks.assets.map(record => {
      //    return(
      //     <div className='task' key = 'assets.asset_id'>
      //      {assets.asset_title}
      //     </div>
      //    )
      //  })
    }
      
    </div>
    </div>
  );
}
export default Navbar;