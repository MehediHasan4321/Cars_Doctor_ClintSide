import Rating from '../../../ShareCompo/Rating/Rating';

const AdminProductsTable = ({ product }) => {
    const { img_url, name, price, rating } = product
    return (
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
                <button className="px-4 py-1 bg-[#ff3811] text-white font-semibold">update</button>
            </th>
            <th>
                <button className="px-4 py-1 bg-[#ff3811] text-white font-semibold">Delete</button>
            </th>
        </tr>
    );
};

export default AdminProductsTable;