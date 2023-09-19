import React from 'react';
import { useState, useEffect } from "react"; 

const Vegetables = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/products")
        .then((res) => res.json())
        .then((data) => {
          setItems(data?.products);
          console.log(data.products)
        });
    }, []);
    return (
        <div>
            this is discover page :{items.length}
        </div>
    );
};

export default Vegetables;