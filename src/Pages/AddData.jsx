// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addProduct } from '../features/ProductSlice'
// import { useNavigate } from 'react-router-dom'

// const AddData = () => {

//     const dispatch =useDispatch()
//     const nav =useNavigate()
//     const [data, setData] = useState({
//         name: "",
//         price: "",
//         description: "",
//         category: "",
//         productImage: ""

//     })


//     const handleInput = (e) => {
//         let name = e.target.name
//         let value = e.target.value

//         setData((pre) => ({ ...pre, [name]: value }))

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(data);
//         dispatch (addProduct(data))

//         nav('/')
//         setData({
//             name: "",
//             price: "",
//             description: "",
//             category: "",
//             productImage: ""  
//         })




//     }
//     return (
//         <>
//             <div className="container mt-5">
//                 <div className="border rounded p-4 shadow-sm">
//                     <h2 className="mb-4 text-center">Add New Product</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="row">
//                             <div className="col-12 col-md-6 mb-3">
//                                 <label htmlFor="productName" className="form-label">Product Name</label>
//                                 <input type="text" className="form-control" id="productName" placeholder="Enter product name" required name='name' onChange={handleInput} value={data.name} />
//                             </div>
//                             <div className="col-12 col-md-6 mb-3">
//                                 <label htmlFor="productPrice" className="form-label">Price ($)</label>
//                                 <input type="number" className="form-control" id="productPrice" placeholder="Enter product price" required name='price' onChange={handleInput} value={data.price} />
//                             </div>
//                             <div className="col-12 mb-3">
//                                 <label htmlFor="productDescription" className="form-label">Description</label>
//                                 <textarea className="form-control" id="productDescription" rows={3} placeholder="Enter product description" required name='description' onChange={handleInput} value={data.description} />
//                             </div>
//                             <div className="col-12 col-md-6 mb-3">
//                                 <label htmlFor="productCategory" className="form-label">Category</label>
//                                 <select className="form-select" id="productCategory" required name='category' onChange={handleInput} value={data.category}>
//                                     <option value="Choose...">Choose...</option>
//                                     <option value="electronics">Electronics</option>
//                                     <option value="clothing">Clothing</option>
//                                     <option value="books">Books</option>
//                                     <option value="food">Food</option>
//                                 </select>
//                             </div>
//                             <div className="col-12 col-md-6 mb-3">
//                                 <label htmlFor="productImage" className="form-label">Product Image Url</label>
//                                 <input className="form-control"  id="productImage" type="url"  required name='productImage' onChange={handleInput} value={data.productImage}/>
//                                 {/* <input className="form-control" type="file" id="productImage" required name='productImage' onChange={handleInput} value={data.productImage} /> */}
//                             </div>
//                         </div>
//                         <div className="text-center">
//                             <button type="submit" className="btn btn-primary">Add Product</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default AddData





// new code 
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/ProductSlice'
import { useNavigate } from 'react-router-dom'

const AddData = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        productImage: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // if (data.category === "Choose...") {
        //     alert("Please select a valid category.")
        //     return
        // }

        // Wait for product to be added before navigating
        await dispatch(addProduct(data))

        // Navigate back to the list and trigger refresh
        nav('/', { state: { fromAdd: true } })

        // Reset form
        setData({
            name: "",
            price: "",
            description: "",
            category: "",
            productImage: ""
        })
    }

    return (
        <div className="container mt-5">
            <div className="border rounded p-4 shadow-sm">
                <h2 className="mb-4 text-center">Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="productName" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="productName" required name='name' onChange={handleInput} value={data.name} />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="productPrice" className="form-label">Price ($)</label>
                            <input type="number" className="form-control" id="productPrice" required name='price' onChange={handleInput} value={data.price} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="productDescription" className="form-label">Description</label>
                            <textarea className="form-control" id="productDescription" rows={3} required name='description' onChange={handleInput} value={data.description} />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="productCategory" className="form-label">Category</label>
                            <select className="form-select" id="productCategory" required name='category' onChange={handleInput} value={data.category}>
                                <option value="Choose...">Choose...</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                                <option value="food">Food</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="productImage" className="form-label">Product Image URL</label>
                            <input type="url" className="form-control" id="productImage" required name='productImage' onChange={handleInput} value={data.productImage} />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddData

