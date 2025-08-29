import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import '../styles/ItemDetails.css'

const ItemDetails = ({ items }) => {
    const { id } = useParams()
    const [item, setItem] = useState({id: 0, name: "", price: "", image: "", description: "", category: ""})


    useEffect(() => {
        const fetchItemById = async () => {
            const response = await fetch(`http://localhost:5050/api/items/${id}`)
            const json = await response.json()
            setItem(json)
        }
        fetchItemById()
    }, [items, id]);


    return (
        <div className="ItemDetails">
            <main id="item-content" class="item-info">
                <div className="image-container">
                    <img id="image" src={item.image} />
                </div>
                <div className="item-details">
                    <h2 id="name">{item.name}</h2>
                    <p id="price">{'Price: ' + item.price}</p>
                    <p id="category">{'Great For: ' + item.category}</p>
                    <p id="description">{item.description}</p>
                </div>
            </main>
        </div>
    )
}

export default ItemDetails;