import Head from "next/head";
import cx from "classnames";
// import styles from "../styles/Hub.module.css";
// console.log(styles.sidebar);

import hubStyles from "../styles/hub.css";
import { useState } from "react";

export default () => {
  const [active, setActive] = useState(false);
  const sidebarStyle = cx("sidebar", {
    active,
  });
  const sidebarBtnStyle = cx("bx sidebarBtn", {
    "bx-menu": !active,
    "bx-menu-alt-right": active,
  });
  return (
    <>
      <Head>
        <title>Hub</title>
      </Head>
      <div className={sidebarStyle}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-box"></i>
              <span className="links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Order list</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-coin-stack"></i>
              <span className="links_name">Stock</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-book-alt"></i>
              <span className="links_name">Total order</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">Team</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-message"></i>
              <span className="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i
              className={sidebarBtnStyle}
              onClick={() => setActive(!active)}
            ></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div>
          <div className="profile-details">
            {/* <img src="images/profile.jpg" alt=""> */}
            <span className="admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Order</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Sales</div>
                <div className="number">38,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Profit</div>
                <div className="number">$12,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className="bx bx-down-arrow-alt down"></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li>
                    <a href="#">Alex Doe</a>
                  </li>
                  <li>
                    <a href="#">David Mart</a>
                  </li>
                  <li>
                    <a href="#">Roe Parter</a>
                  </li>
                  <li>
                    <a href="#">Diana Penty</a>
                  </li>
                  <li>
                    <a href="#">Martin Paw</a>
                  </li>
                  <li>
                    <a href="#">Doe Alex</a>
                  </li>
                  <li>
                    <a href="#">Aiana Lexa</a>
                  </li>
                  <li>
                    <a href="#">Rexel Mags</a>
                  </li>
                  <li>
                    <a href="#">Tiana Loths</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Sales</li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li>
                    <a href="#">$204.98</a>
                  </li>
                  <li>
                    <a href="#">$24.55</a>
                  </li>
                  <li>
                    <a href="#">$25.88</a>
                  </li>
                  <li>
                    <a href="#">$170.66</a>
                  </li>
                  <li>
                    <a href="#">$56.56</a>
                  </li>
                  <li>
                    <a href="#">$44.95</a>
                  </li>
                  <li>
                    <a href="#">$67.33</a>
                  </li>
                  <li>
                    <a href="#">$23.53</a>
                  </li>
                  <li>
                    <a href="#">$46.52</a>
                  </li>
                </ul>
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Top Seling Product</div>
              <ul className="top-sales-details">
                <li>
                  <a href="#">
                    {/* <img src="images/sunglasses.jpg" alt=""> */}
                    <span className="product">Vuitton Sunglasses</span>
                  </a>
                  <span className="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/jeans.jpg" alt=""> */}
                    <span className="product">Hourglass Jeans </span>
                  </a>
                  <span className="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/nike.jpg" alt=""> */}
                    <span className="product">Nike Sport Shoe</span>
                  </a>
                  <span className="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/scarves.jpg" alt=""> */}
                    <span className="product">Hermes Silk Scarves.</span>
                  </a>
                  <span className="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/blueBag.jpg" alt=""> */}
                    <span className="product">Succi Ladies Bag</span>
                  </a>
                  <span className="price">$1456</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/bag.jpg" alt=""> */}
                    <span className="product">Gucci Womens's Bags</span>
                  </a>
                  <span className="price">$2345</span>
                </li>

                <li>
                  <a href="#">
                    {/* <img src="images/addidas.jpg" alt=""> */}
                    <span className="product">Addidas Running Shoe</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/shirt.jpg" alt=""> */}
                    <span className="product">Bilack Wear's Shirt</span>
                  </a>
                  <span className="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>
        {`
          @import url("https://fonts.font.im/css2?family=Poppins:wght@200;300;400;500;600;700&amp;display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>
      <style jsx>{hubStyles}</style>
    </>
  );
};
