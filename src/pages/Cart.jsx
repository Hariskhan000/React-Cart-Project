import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { removeCart } from "../Redux.js/CartSlice";




function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleremove = (id) => {
        dispatch(removeCart(id))

    }
    return (
        <div className="grid grid-cols-4 gap-4">
            {cartItems.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={item.image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.price}</p>
                        <Link to="/cart" onClick={() => handleremove(item.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Remove
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Cart