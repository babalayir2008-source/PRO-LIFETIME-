import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        body{
          background:#0a0a0a;
        }

        nav{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:16px 40px;
          background:linear-gradient(135deg,#0d0d0d,#1a1a1a,#0d0d0d);
          border-bottom:1px solid rgba(192,192,192,0.2);
          box-shadow:0 8px 25px rgba(0,0,0,0.6);
          position:sticky;
          top:0;
          z-index:1000;
        }

        .logo{
          font-size:22px;
          font-weight:700;
          letter-spacing:3px;
          color:silver;
          text-transform:uppercase;
          cursor:pointer;
        }

        .links{
          display:flex;
          gap:15px;
          align-items:center;
          flex-wrap:wrap;
        }

        .nav-link{
          text-decoration:none;
          color:#c0c0c0;
          font-size:15px;
          padding:8px 14px;
          border-radius:25px;
          transition:.3s;
        }

        .nav-link:hover{
          color:white;
          background:rgba(255,255,255,.08);
          transform:translateY(-2px);
        }

        .active{
          background:silver;
          color:black;
          font-weight:600;
        }

        /* ADD PRODUCT BUTTON */
        .add-product-btn{
          background:linear-gradient(135deg,#00c853,#00e676);
          color:white !important;
          font-weight:600;
          box-shadow:0 5px 15px rgba(0,200,83,.3);
        }

        .add-product-btn:hover{
          background:linear-gradient(135deg,#00e676,#00c853);
          color:white !important;
          transform:translateY(-2px);
        }

        .add-product-btn.active{
          background:#00e676;
          color:black !important;
        }

        .right{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .searchBox{
          display:flex;
          align-items:center;
          background:#111;
          border:1px solid rgba(192,192,192,.25);
          border-radius:25px;
          padding:6px 12px;
        }

        .searchBox input{
          background:transparent;
          border:none;
          outline:none;
          color:white;
          padding-left:8px;
          width:180px;
        }

        .searchBox input::placeholder{
          color:#888;
        }

        .btn{
          padding:10px 22px;
          border:none;
          border-radius:25px;
          cursor:pointer;
          font-weight:600;
          transition:.3s;
        }

        .signin{
          background:silver;
          color:black;
        }

        .signin:hover{
          transform:translateY(-2px);
          box-shadow:0 5px 15px rgba(255,255,255,.25);
        }

        @media(max-width:900px){

          nav{
            flex-direction:column;
            gap:15px;
          }

          .links{
            justify-content:center;
          }

          .searchBox input{
            width:120px;
          }
        }
      `}</style>

      <nav>
        {/* Logo */}
        <div className="logo">PRO-LIFETIME⌚</div>

        {/* Navigation Links */}
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Collection
          </NavLink>

          <NavLink
            to="/add-product"
            className={({ isActive }) =>
              isActive
                ? "nav-link add-product-btn active"
                : "nav-link add-product-btn"
            }
          >
            + Add Product
          </NavLink>

          <NavLink
            to="/custom"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Custom Watch
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="searchBox">
            🔍
            <input type="text" placeholder="Search watches..." />
          </div>

          <button className="btn signin">Sign In</button>
        </div>
      </nav>
    </>
  );
}

export { Navbar };