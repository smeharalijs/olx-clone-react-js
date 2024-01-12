import './style.css';

function Header() {
  return (
    <div>
      <div className="container-fluid nav">
        <div className="container">
          <div className="navbar">
            
            <div><img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQJI4fcgjbnFRfxWuqNj6g5RZV2qqXYIlWE3RYGmU2Q&s'/></div>
           
          
            
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
            <div><img width={90} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79bTJB7XfjyYlw_VtAZ_3dY6X2CLRRjOAD4OE3QEs0Oz0k77VILen6qutTpsU5kdnw1M&usqp=CAU' /></div>
            </div>
            <div className="search1">
              <input type="text" placeholder="Pakistan"/>
              
            </div>

            <div className="search">
              <input type="text" placeholder="Find Cars, Mobile Phones and more" />
            </div>

            <div className="loginSellBtns">
              <button className="loginBtn">Login</button>
              <button className="sellBtn">+ Sell</button>
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
