import React, { useEffect } from 'react';
import "../Style/ProductDetails.css";
import { useParams, Link } from "react-router-dom";


function ProductDetail() {

    const data = require("../../dbglass.json");
    const { name } = useParams();
    const { category } = useParams();
    const {id} = useParams();
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=> {
        document.title = `${category} - ${name}`
    },[`${category} - ${name}`])
    return (
        <div className="product_details">
            <div className="product_header">
                <Link to={`/Cetegorypage/${category}`} style={{ textDecoration: 'none', color: 'black' }}><h1 className="product_back">{`< Back`}</h1></Link>
                <h1>{name}</h1>
            </div>
            { data.glasses.filter((item) => item.id == id).map((Product_id, i) => (
                <div className="product_main">
                    <div className="product_image">
                        <img 
                            src={Product_id.url} 
                            alt={Product_id.name}
                            className="product_image_size" />
                    </div>
                    <div className="product_details">
                        <h2 className="product_price">Price: ${Product_id.price}</h2>
                        <h2 className="product_category"> Category: {capitalizeFirstLetter(`${Product_id.category}`)}</h2>
                    </div>
                </div>
            ))}
            <div className="other_products">
                {data.glasses.map((glasses) => (

                    <Link
                        to={`/Cetegorypage/${glasses.category}/${glasses.name}/${glasses.id}`}
                        className="other_products_img_link" >
                        <img
                            src={glasses.url}
                            alt={glasses.name}
                            style={{ width: '90px', height: '60px' }}
                            className="other_products_img"
                        />
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default ProductDetail
