import Rating from '../../../ShareCompo/Rating/Rating';

const AdminProductsTable = ({ product,updateProduct,modalOpen,deleteProduct }) => {
    const { img_url, name, price, rating,_id } = product
    return (
        <>
            <tr>
                <th>
                    <Rating num={rating} />
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img_url} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>${price}</td>
                <th>
                <label onClick={()=>updateProduct(_id)} htmlFor={modalOpen} className="px-4 py-1 bg-[#ff3811] text-white font-semibold">Update</label>
                </th>
                <th>
                    <button onClick={()=>deleteProduct(_id)} className="px-4 py-1 bg-[#ff3811] text-white font-semibold">Delete</button>
                </th>

                {/* Put this part before </body> tag */}
            </tr>
            
        </>
    );
};

export default AdminProductsTable;