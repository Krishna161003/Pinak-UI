import React from 'react';
import img1 from './Images/logo.png';

function Dashboard(){
    return(
        
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f1f1f1;
              margin: 0;
              padding: 0;
            }
            .container {
              display: flex;
            }
            .header {
              color: white;
              padding: 10px;
              text-align: left;
            }
            .logo {
              width: 170px;
              display: block;
            }
            .sidebar {
              background-color: #ddd;
              padding: 20px;
              width: 200px;
              float: left;
              text-align: left;
            }
            .sidebar-box {
              margin-bottom: 20px;
              padding: 10px;
              border-radius: 5px;
              background-color: #fff;
              box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
              height: auto;
            }
            .sidebar-box:hover {
              background-color: #f5f5f5;
            }
            .active {
              color: #fff;
            }
            .content {
              padding: 20px;
              margin-left: 220px;
              overflow: hidden;
            }
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }
            li {
              margin-bottom: -13px;
              margin-top: -10px;
            }
            a {
              text-decoration: none;
              color: #000000;
              display: block;
              padding: 5px;
              border-radius: 3px;
              transition: background-color 0.3s;
            }
            footer {
              position: fixed;
              bottom: 0;
              width: 100%;
              background-color: #333;
              color: #fff;
              text-align: center;
              padding: 2px 0;
              font-size: 10px;
              z-index: 999;
            }
            iframe {
              border: none;
              width: calc(100vw - 220px);
              height: calc(100vh - 20px);
              float: right;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <img src="logo.png" alt="Logo" className="logo" />
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar-box">
            <ul>
              <li><a href="DummyPage1.html" target="content">Dashboard</a></li>
            </ul>
          </div>

          <div className="sidebar-box">
            <ul>
              <li><a href="DummyPage2.html" target="content">Cloud Status</a></li>
            </ul>
          </div>

          <div className="sidebar-box">
            <ul>   
              <li><a href="DummyPage3.html" target="content">Central Cloud</a></li>
            </ul>
          </div>

          {/* Add other sidebar items here */}

        </div>

        <div className="content">
          <iframe name="content" src="DummyPage1.html"></iframe>
        </div>

        <footer>
          <p>
            &copy; <b>Turn-Key Cloud Platform for Academia, Research & Enterprises</b>
            <br />
            +91 9008488882 | cloud@pinakastra.com | www.pinakastra.com
            <br />
            ©2023 Pinakastra, Inc. All rights reserved. Pinakastra is a trademark of Pinakastra Computing Pvt Ltd.
            registered in India and other countries. All other brand names mentioned herein are for identification
            purposes only and may be the trademarks of their respective holder(s).
          </p>
        </footer>
      </body>
    </html>
    );
}
export default Dashboard;