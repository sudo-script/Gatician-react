import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewOrderPage.css";

function NewOrderPage({ setOrders, orders }) {
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    orderNumber: "",
    customerName: "",
    phone: "",
    email: "",
    address: "",
    orderDetails: "",
    status: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new order to the existing orders
    setOrders([...orders, orderData]);
    // Navigate back to the Orders Page
    navigate("/orders");
  };

  return (
    <div className="new-order-page">
      <h1>Add New Order</h1>
      <form onSubmit={handleSubmit} className="new-order-form">
        <div className="form-group">
          <label htmlFor="orderNumber">Order Number</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            placeholder="Enter order number"
            value={orderData.orderNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Enter customer name"
            value={orderData.customerName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={orderData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={orderData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter delivery address"
            value={orderData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="orderDetails">Order Details</label>
          <textarea
            id="orderDetails"
            name="orderDetails"
            placeholder="Enter order details (e.g., items, quantity)"
            value={orderData.orderDetails}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="status">Order Status</label>
          <select
            id="status"
            name="status"
            value={orderData.status}
            onChange={handleInputChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Add Order
        </button>
      </form>
    </div>
  );
}

export default NewOrderPage;
