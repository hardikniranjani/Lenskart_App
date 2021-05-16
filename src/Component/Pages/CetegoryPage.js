import React, { useEffect } from 'react';
import "../Style/CetegoryPage.css";
import { useParams, Link } from "react-router-dom";


function CetegoryPage() {


    const data = require("../../dbglass.json");
    const { category } = useParams();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

useEffect(()=> {
    return(
        document.title= `${category}`
    );
},[]);

    return (
        <div className="category_page">
            <div className="category_page_header">
                <Link
                    to={`/`}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <h1 className="category_page_back">{`< Back`}</h1>
                </Link>
                <h1 className="category_page_name">
                    Cetegory - {capitalizeFirstLetter(`${category}`)}
                </h1>
            </div>

            <div className="category_page_list">
                {data.glasses.filter((item) => item.category === category).map((itemGlass, i) => (
                    <Link
                        to={`/Cetegorypage/${itemGlass.category}/${itemGlass.name}/${itemGlass.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <h2
                            style={{  paddingBottom: '10px' }}
                            className="category_page_list_name_h2"
                        >
                            {i + 1} -<h2 className="category_page_list_name" > {itemGlass.name} - Price ${itemGlass.price}</h2>
                        </h2>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default CetegoryPage;

