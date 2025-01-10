import React from "react";
import "./OrdersPage.css";

function OrdersPage({ orders }) {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Order Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderNumber}</td>
              <td>{order.customerName}</td>
              <td>{order.phone}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.orderDetails}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
