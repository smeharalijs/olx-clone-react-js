import './style.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Border from "./border.png"

function Header() {
  const navigate = useNavigate();
  return (
        <div>
          <div className="container-fluid nav">
            <div className="container">
              <div className="navbar">
                
                <div ><img onClick={()=>navigate("/")} width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQJI4fcgjbnFRfxWuqNj6g5RZV2qqXYIlWE3RYGmU2Q&s'/></div>
               
              
                
                <div className="logo">
                  <span>
                    Motors
                  </span>
                  <span>
                    Property
                  </span>
                </div>
              </div>
    
              <div className="header2">
                <div className="logo2">
                <div><img onClick={()=>navigate("/")} width={90} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79bTJB7XfjyYlw_VtAZ_3dY6X2CLRRjOAD4OE3QEs0Oz0k77VILen6qutTpsU5kdnw1M&usqp=CAU' /></div>
                </div>
                <div className="search1">
                  <input type="text" placeholder="Pakistan"/>
                  
                </div>
    
                <div className="search">
                  <input type="text" placeholder="Find Cars, Mobile Phones and more" />
                </div>
    
                <div className="loginSellBtns">
                  <button onClick={()=>navigate("/login")} className="loginBtn">Login</button>
                  <div>

                  <button onClick={()=>navigate("/ads")} className="sellBtn"><img width={110} src={Border}  />+ sell</button>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="headerBottom">
              <div className="container">
                <div className="categoryTitle">All Categories</div>
                <div className="sideMenu">
                  <ul>
                    <li>Mobile Phones</li>
                    <li>Cars</li>
                    <li>Motorcycles</li>
                    <li>Houses</li>
                    <li>Video-Audios</li>
                    <li>Tablets</li>
                    <li>Land & Plots</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default Header;
