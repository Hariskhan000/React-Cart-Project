import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { addtoCart } from "../Redux.js/CartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    })

    // here we dispatch add slice
    const handleadd = (product) => {
        dispatch(addtoCart(product))
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={product.image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
                        <Link to="/" onClick={() => handleadd(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add To Cart
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Home