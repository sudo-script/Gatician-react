import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import LoginPage from "./components/LoginPage";
import OrdersPage from "./components/OrdersPage";
import ProfilePage from "./components/ProfilePage";
import NewOrderPage from "./components/NewOrderPage";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  // State for managing orders
  const [orders, setOrders] = useState([
    {
      orderNumber: "#9583120",
      time: "16:00 10/6/2024",
      progress: "Complete",
    },
    {
      orderNumber: "#9583119",
      time: "10:00 07/6/2024",
      progress: "In Progress",
    },
    {
      orderNumber: "#9583118",
      time: "12:30 01/6/2024",
      progress: "Pending",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard orders={orders} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orders" element={<OrdersPage orders={orders} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/new-order"
          element={<NewOrderPage setOrders={setOrders} orders={orders} />}
        />
      </Routes>
    </Router>
  );
}

function Dashboard({ orders }) {
  const navigate = useNavigate();

  const graphData = {
    labels: ["April", "May", "June"],
    datasets: [
      {
        label: "Orders",
        data: [0.5, 2, 3],
        borderColor: "#63b3ed",
        backgroundColor: "rgba(99, 179, 237, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#3182ce",
        pointBorderColor: "#ffffff",
        pointRadius: 5,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e2e8f0",
        },
      },
    },
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Gatician</div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li onClick={() => navigate("/orders")}>Orders</li>
            <li onClick={() => navigate("/new-order")}>+New</li>
            <li onClick={() => navigate("/profile")}>Profile</li>
            <li onClick={() => navigate("/login")}>Log Out</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        <header className="header">
          <h1>Dashboard</h1>
          <input type="text" placeholder="Type here..." />
        </header>

        <section className="content">
          {/* Cards Section */}
          <div className="cards">
            <div className="card">
              <h3>Orders</h3>
              <p>(+200% than last month)</p>
              <div className="stats">
                <div>
                  <span>Total Orders</span>
                  <h2>{orders.length}</h2>
                </div>
                <div>
                  <span>Revenue</span>
                  <h2>₹435</h2>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Orders</h3>
              <p>200% more in June</p>
              <div className="chart">
                <Line data={graphData} options={graphOptions} />
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="orders">
            <h3>Orders</h3>
            <table>
              <thead>
                <tr>
                  <th>NUMBER</th>
                  <th>TIME</th>
                  <th>PROGRESS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.orderNumber}</td>
                    <td>{order.time}</td>
                    <td>
                      <div className="progress-bar-container">
                        <div
                          className={`progress-bar ${
                            order.progress.toLowerCase().replace(" ", "-")
                          }`}
                          style={{
                            width:
                              order.progress === "Complete"
                                ? "100%"
                                : order.progress === "In Progress"
                                ? "70%"
                                : "50%",
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
