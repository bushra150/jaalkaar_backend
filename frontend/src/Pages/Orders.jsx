import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState({});

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
      
      if (response.data.success) {
        setOrderData(response.data.orders.reverse()); // Reverse to show latest first
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrders(prev => ({ ...prev, [orderId]: !prev[orderId] }));
  };

  return (
    <div className='border-t pt-8 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[6vw]'>
      <Title text1={'MY'} text2={'ORDERS'} />
      <div>
        {orderData.map((order, index) => (
          <div key={index} className='py-4 border-t border-b text-gray-700'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer' onClick={() => toggleOrderDetails(order._id)}>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={order.items[0].image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{order.items.length} Items</p>
                  <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(order.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-400'>{order.paymentMethod}</span></p>
                  <p className='mt-1'>Order ID: <span className='text-gray-600'>{order._id}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{order.status}</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); loadOrderData(); }} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track order</button>
              </div>
            </div>
            {expandedOrders[order._id] && (
              <div className='mt-4 px-6'>
                {order.items.map((item, idx) => (
                  <div key={idx} className='flex items-center gap-6 py-2 border-b'>
                    <img className='w-12' src={item.image[0]} alt={item.name} />
                    <div>
                      <p className='font-medium'>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>{currency}{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
