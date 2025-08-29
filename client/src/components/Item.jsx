import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

const Item = (props) => { 
    
    const [item, setItem] = useState({id: 0, name: "", price: "", image: "", description:"", category: ""})

    useEffect(() => {
        setItem({id: props.id, name: props.name, price: props.price, image: props.image, description: props.description, category: props.category});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${item.image})`}}></div>
            <div className='bottom-container'>
                <h3>{item.name}</h3>
                <p>{'Price: ' + item.price}</p>
                <p>{'Category: ' + item.category}</p>
                <p>{'Description: ' + item.description}</p>
                <Link to={'/items/' + item.id}>Read More →</Link>
            </div>
        </div>
    )
}

export default Item