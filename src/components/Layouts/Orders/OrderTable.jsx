const OrderTable = ({ order,deleteItem }) => {
    const { img, orderId, orderDate, serviceName, orderPrice,_id } = order
    return (
        <tr>
            <th>
                <button onClick={()=>deleteItem(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-32 rounded">
                            <img src={img} alt="service images" />
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <div>
                    <h1 className="font-bold">{serviceName}</h1>
                    <small className="text-sm opacity-50">car doctor</small>
                </div>
            </td>
            <td>
                <h3>{orderId}</h3>
            </td>
            <td>
                <h3>${orderPrice}</h3>
            </td>
            <td>{orderDate}</td>
            <th>
                <button className="bg-[#ff3811] text-white px-4 py-1 rounded-md">Painding</button>
            </th>
        </tr>
    );
};

export default OrderTable;