import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    const cursor = document.querySelector(".luxury-cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <style>{`
        .contact-page{
          min-height:100vh;
          position:relative;
          overflow:hidden;
          background:#000;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:50px 8%;
        }

        .contact-page::before{
          content:"";
          position:absolute;
          inset:0;
          background:url("https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1600");
          background-size:cover;
          background-position:center;
          animation:zoomBg 20s infinite alternate;
          opacity:.35;
        }

        .contact-page::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            135deg,
            rgba(0,0,0,.85),
            rgba(0,0,0,.75)
          );
        }

        @keyframes zoomBg{
          from{
            transform:scale(1);
          }
          to{
            transform:scale(1.15);
          }
        }

        .contact-box{
          position:relative;
          z-index:5;
          max-width:1100px;
          width:100%;
          padding:60px;
          border-radius:35px;
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,.1);
          text-align:center;
        }

        .contact-box h1{
          font-size:4rem;
          color:white;
          letter-spacing:4px;
          margin-bottom:15px;
        }

        .contact-box span{
          color:silver;
        }

        .contact-box p{
          color:#d0d0d0;
          line-height:1.8;
          max-width:700px;
          margin:auto;
        }

        .cards{
          margin-top:50px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:25px;
        }

        .card{
          padding:30px;
          border-radius:20px;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          transition:.4s;
        }

        .card:hover{
          transform:translateY(-10px);
          box-shadow:0 15px 35px rgba(255,255,255,.12);
        }

        .card h3{
          color:silver;
          margin-bottom:10px;
        }

        .card p{
          color:#ccc;
          font-size:14px;
        }

        .thanks{
          margin-top:50px;
          font-size:1.4rem;
          color:silver;
          letter-spacing:2px;
          animation:glow 2s infinite alternate;
        }

        @keyframes glow{
          from{
            text-shadow:0 0 5px silver;
          }
          to{
            text-shadow:0 0 25px white;
          }
        }

        /* Floating particles */
        .particle{
          position:absolute;
          width:8px;
          height:8px;
          background:silver;
          border-radius:50%;
          opacity:.4;
          animation:float 10s linear infinite;
        }

        @keyframes float{
          from{
            transform:translateY(100vh);
          }
          to{
            transform:translateY(-100vh);
          }
        }

        /* Cursor */
        .luxury-cursor{
          width:20px;
          height:20px;
          border:2px solid silver;
          border-radius:50%;
          position:fixed;
          pointer-events:none;
          z-index:9999;
          transform:translate(-50%,-50%);
          box-shadow:0 0 15px silver;
        }

        @media(max-width:768px){
          .contact-box{
            padding:35px 25px;
          }

          .contact-box h1{
            font-size:2.5rem;
          }
        }
      `}</style>

      <div className="contact-page">

        <div className="luxury-cursor"></div>

        <div className="particle" style={{left:"10%",animationDelay:"0s"}}></div>
        <div className="particle" style={{left:"30%",animationDelay:"2s"}}></div>
        <div className="particle" style={{left:"55%",animationDelay:"4s"}}></div>
        <div className="particle" style={{left:"75%",animationDelay:"1s"}}></div>
        <div className="particle" style={{left:"90%",animationDelay:"3s"}}></div>

        <div className="contact-box">
          <h1>
            CONTACT <span>US</span>
          </h1>

          <p>
            Thank you for exploring PRO-LIFETIME. Every watch tells a story,
            and we would love to be part of yours. Reach out anytime and let
            us help you discover timeless luxury.
          </p>

          <div className="cards">
            <div className="card">
              <h3>📧 Email</h3>
              <p>support@prolifetime.com</p>
            </div>

            <div className="card">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="card">
              <h3>📍 Location</h3>
              <p>Mumbai, India</p>
            </div>

            <div className="card">
              <h3>🕒 Support</h3>
              <p>24/7 Customer Assistance</p>
            </div>
          </div>

          <div className="thanks">
            TIME IS NOT JUST MEASURED — IT IS EXPERIENCED IN LUXURY
          </div>
        </div>
      </div>
    </>
  );
}