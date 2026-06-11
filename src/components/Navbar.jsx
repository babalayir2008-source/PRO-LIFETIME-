import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Font (no library) */}
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

        /* NAVBAR */
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

        /* BRAND */
        .logo{
          font-size:22px;
          font-weight:700;
          letter-spacing:3px;
          color:silver;
          text-transform:uppercase;
          cursor:pointer;
          position:relative;
        }

        .logo::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-5px;
          width:0%;
          height:2px;
          background:silver;
          transition:0.4s;
        }

        .logo:hover::after{
          width:100%;
        }

        /* LINKS */
        .links{
          display:flex;
          gap:18px;
          align-items:center;
        }

        .nav-link{
          text-decoration:none;
          color:#c0c0c0;
          font-size:15px;
          padding:8px 14px;
          border-radius:25px;
          transition:0.3s ease;
          position:relative;
          overflow:hidden;
        }

        .nav-link::before{
          content:"";
          position:absolute;
          top:0;
          left:-100%;
          width:100%;
          height:100%;
          background:linear-gradient(90deg,transparent,rgba(192,192,192,0.15),transparent);
          transition:0.5s;
        }

        .nav-link:hover::before{
          left:100%;
        }

        .nav-link:hover{
          color:white;
          background:rgba(192,192,192,0.08);
          transform:translateY(-2px);
          box-shadow:0 4px 15px rgba(192,192,192,0.15);
        }

        .active{
          color:black;
          background:silver;
          font-weight:600;
          box-shadow:0 4px 20px rgba(192,192,192,0.3);
        }

        /* SEARCH */
        .searchBox{
          display:flex;
          align-items:center;
          background:#111;
          border:1px solid rgba(192,192,192,0.25);
          border-radius:25px;
          padding:6px 12px;
          transition:0.3s;
        }

        .searchBox:hover{
          border-color:silver;
          box-shadow:0 0 10px rgba(192,192,192,0.2);
          transform:scale(1.02);
        }

        .searchBox input{
          background:transparent;
          border:none;
          outline:none;
          color:white;
          padding:6px 8px;
          width:180px;
        }

        .searchBox input::placeholder{
          color:#888;
        }

        /* BUTTON */
        .btn{
          padding:9px 18px;
          border:none;
          border-radius:25px;
          cursor:pointer;
          font-weight:600;
          transition:0.3s;
        }

        .signin{
          background:transparent;
          color:silver;
          border:1px solid rgba(192,192,192,0.4);
        }

        .signin:hover{
          background:silver;
          color:black;
          transform:translateY(-2px);
          box-shadow:0 6px 15px rgba(192,192,192,0.3);
        }

        /* RIGHT SECTION */
        .right{
          display:flex;
          align-items:center;
          gap:12px;
        }

        /* RESPONSIVE */
        @media(max-width:900px){
          nav{
            flex-wrap:wrap;
            gap:12px;
          }

          .links{
            flex-wrap:wrap;
            justify-content:center;
          }

          .searchBox input{
            width:120px;
          }
        }
      `}</style>

      <nav>
        {/* BRAND */}
        <div className="logo">Pro-LifeTime⌚</div>

        {/* LINKS */}
        <div className="links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>

          <NavLink to="/collection" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Collection
          </NavLink>

          <NavLink to="/custom" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Custom Watch
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact Us
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          {/* SEARCH */}
          <div className="searchBox">
            🔍
            <input type="text" placeholder="Search watches..." />
          </div>

          {/* SIGN IN */}
          <button className="btn signin">Sign In</button>
        </div>
      </nav>
    </>
  );
}

export { Navbar };