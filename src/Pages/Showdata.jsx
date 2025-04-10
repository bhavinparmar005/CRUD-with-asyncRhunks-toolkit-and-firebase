import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../features/ProductSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../features/ProductSlice'

const Showdata = () => {

    const nav = useNavigate();
    const location = useLocation();
    console.log(location);


    const dispatch = useDispatch();

    const { product } = useSelector((state) => state.all) || []

    // useEffect(() => {
    //     dispatch(getProduct());

    // }, [dispatch]);


    // Optional: if you want to re-fetch only when returning from edit



    useEffect(() => {
        dispatch(getProduct());
    }, [location.state]);




    // const deleteProductItem = async (id) => {

    //   await  patch(deleteProduct(id))
    //     getProduct()
    // }
    const deleteProductItem = async (id) => {
        await dispatch(deleteProduct(id));
        dispatch(getProduct());
    }



    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Product List</h2>
                <div className="container">
                    <button className='m-2' onClick={() => { nav('/add') }}>add Data</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-dark table-striped table-bordered align-middle">
                        <thead className="table-secondary text-dark">
                            <tr>
                                <th>Product No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Product Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (product?.length > 0) ?
                                    (
                                        product?.map((val, index) => {
                                            return (
                                                <tr key={val?.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{val?.name}</td>
                                                    <td>${val?.price}</td>
                                                    <td>{val?.description}</td>
                                                    <td>{val?.category}</td>
                                                    <td><img src={val?.productImage} alt="Red Wine" width={50} height={50} /></td>
                                                    <td>
                                                        <button className="btn btn-primary btn-sm m-2" onClick={() => { nav('/edit', { state: val }) }}>
                                                            <i className="bi bi-pencil "></i>
                                                        </button>
                                                        <button className="btn btn-danger btn-sm m-2" onClick={() => deleteProductItem(val.id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        <tr>
                                            <td colSpan={7}>

                                                <h1 style={{ textAlign: "center" }} >Data Not Found...!</h1>

                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Showdata
