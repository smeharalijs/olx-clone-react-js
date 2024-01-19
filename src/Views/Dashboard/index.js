import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'




function Dashboard() {
  const navigate = useNavigate()
  const [product, setproduct] = useState([])

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = () => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setproduct(res.products))
  }

  return (
    <div className="card-container">

   


      <div className="poster">
        <img src="https://images.olx.com.pk/thumbnails/423979386-800x600.webp" />
      </div>


      {product.map((item) => {
        const { id, title, thumbnail, category } = item;
        return (
          <div className="card" id="btn" onClick={() => navigate(`Detail/${id}`)}>
            <img src={thumbnail} />
            <div className="card-body">
              <div className="card-title">
                {title}                                                                <br />
                {category}
                <h6>2 days ago</h6>
              </div>
              <div className="button-container">
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
export default Dashboard;    