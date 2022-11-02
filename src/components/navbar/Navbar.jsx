import {
    AiFillCopyrightCircle,
    AiFillBulb,
    AiFillWechat,
    AiOutlineBug
  } from "react-icons/ai";
  import "./Navbar.css";
  
  
  function Navbar() {
    return (
  
      <nav className="navbar-container space-between d-flex">
        
        <div className="item1" >
          <span>PUFFI*</span> 
        </div>
  
        <div className="navCenter my-5 d-flex ">
        
          <div className="item">
            <AiOutlineBug />
            <span>PUFI PUF</span>
          </div>
          <div className="item">
            <AiFillBulb />
            <span> PUFI RAIN </span>
          </div>
          <div className="item">
            <AiFillWechat />
            <span> PUFI CART </span>
          </div>
          <div className="item">
            <AiFillCopyrightCircle />
            <span> PUFINAP </span>
          </div>
        
        </div>
  
        <div className="dates">
          
          <span>
            MI CUENTA <select> </select>{" "}
          </span>
          
          <span>MI COMPRA</span>
        </div>
      
      </nav>
    );
  }
  
  export default Navbar;