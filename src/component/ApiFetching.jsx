import {useEffect, useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 

function ApiFetching(){
    const [products,setProducts]=useState([])
    async function showData(){
        const response=await fetch('https://fakestoreapi.com/products')
        const result=await response.json()
        setProducts(result)
        console.log("products = ", products)
    }
    useEffect(()=>{
        showData()
    },1000)

    return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-100">
            {products.map((product, i) => (
              <div key={i + 1} className="flex flex-col items-center">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-sm w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm text-center mb-4">
                      {product.description}
                    </p>
                    <p className="text-lg font-semibold text-gray-800 text-center mb-4">
                      {`$${product.price}`}
                    </p>
    
                    <div className="flex justify-between items-center space-x-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center w-full">
                        <FontAwesomeIcon icon={faHeart} className="mr-2" /> Like
                      </button>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center w-full">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Save to Cart
                      </button>
                    </div>
    
                    <div className="mt-4">
                      <button className="bg-red-500 text-white px-5 py-2 w-full rounded-full hover:bg-red-600 transition-colors">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
}
export default ApiFetching