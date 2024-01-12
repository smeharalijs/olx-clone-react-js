import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';

function Detail() {
    const { adId } = useParams();
    const [detail, setDetail] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        fetch(`https://dummyjson.com/products/${adId}`)
            .then(res => res.json())
            .then(res => setDetail(res))
            .catch(error => console.error("Error fetching data:", error));
    }

    if (!detail) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    const { thumbnail, title, discountPercentage, images, price, description, brand, category, stock, rating } = detail;

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    }

    return (
        <div className="body">
            <div className="main">
                <div className="thumbnail">
                    <img src={thumbnail} alt="Thumbnail" onClick={() => handleThumbnailClick(thumbnail)} />
                </div>

                <div className="image">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected" />
                    ) : null}
                    {images.map((item, index) => (
                        <img key={index} src={item} alt={`Image ${index}`} onClick={() => handleThumbnailClick(item)} />
                    ))}
                </div>

                <div className="details">
                    <div className="price">
                        <h2>Rs {price}</h2>
                    </div>

                    <div className="detail">
                        <h3>Details</h3>
                        <p><strong>Title :    </strong>{title}</p>
                        <p><strong>Brand :    </strong>{brand}</p>
                        <p><strong>Category : </strong>{category}</p>
                        <p><strong>Stock : </strong>{stock}</p>
                        <p><strong>Rating :</strong>{rating}</p>
                        <p><strong>Discount :</strong>{discountPercentage}</p>
                    </div>

                    <div className="description">
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
