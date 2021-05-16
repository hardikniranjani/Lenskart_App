import React, { useEffect } from 'react';
import "../Style/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {

    function getUnique(arr, comp) {
        const unique = arr
            .map(e => e[comp])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e])
            .map(e => arr[e]);

        return unique;
    }

    const data = require("../../dbglass.json");
    const uniqueGlass = getUnique(data.glasses, "category");
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(()=> {
        document.title=`Lenskart - Category`
    },[]);

    return (
        <div className="homepage">
            <div className="homepage_header">
                <h1>Categories</h1>
            </div>

            <div className="homepage_category_list">
                {
                    uniqueGlass.map((item, index) => {
                        return (
                            <div className="homepage_cetegory_name_main">
                                <Link 
                                    to={`/Cetegorypage/${item.category}`} 
                                    style={{ textDecoration: "none", color: "black" }}
                                    className="homepage_cetegory_name_link"
                                >
                                    <h2 className="homepage_cetegory_name">{index + 1} - {capitalizeFirstLetter(`${item.category}`)}</h2>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomePage;