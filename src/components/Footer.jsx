export function Footer() {
  return (
    <>
      <style>{`
        .footer {
          position: relative;
          background: #0a0a0a;
          color: white;
          padding: 80px 7% 30px;
          overflow: hidden;
        }

        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3");
          background-size: cover;
          background-position: center;
          opacity: 0.12;
          filter: grayscale(100%);
        }

        .footer-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
        }

        .footer-box h3 {
          font-size: 18px;
          margin-bottom: 18px;
          color: silver;
          letter-spacing: 1px;
        }

        .footer-box p {
          color: #cfcfcf;
          line-height: 1.8;
          font-size: 14px;
          transition: 0.3s;
          cursor: pointer;
        }

        .footer-box p:hover {
          color: white;
          transform: translateX(5px);
        }

        .brand {
          font-size: 26px;
          font-weight: bold;
          color: white;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .brand span {
          color: silver;
        }

        /* SOCIAL ICONS */
        .social {
          display: flex;
          gap: 12px;
          margin-top: 15px;
        }

        .icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #151515;
          border: 1px solid rgba(255,255,255,0.1);
          color: silver;
          font-size: 12px;
          transition: 0.4s;
          cursor: pointer;
        }

        .icon:hover {
          background: silver;
          color: black;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(192,192,192,0.25);
        }

        /* Subscribe */
        .subscribe input {
          width: 100%;
          padding: 12px;
          border-radius: 30px;
          border: 1px solid #444;
          background: #111;
          color: white;
          margin-top: 10px;
          outline: none;
        }

        .subscribe input:focus {
          border-color: silver;
          box-shadow: 0 0 15px rgba(192,192,192,0.3);
        }

        .subscribe button {
          margin-top: 12px;
          width: 100%;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, silver, white);
          color: black;
          font-weight: bold;
          cursor: pointer;
          transition: 0.4s;
        }

        .subscribe button:hover {
          transform: translateY(-3px);
        }

        /* SUPPORT BOX */
        .support-box p {
          margin-bottom: 8px;
        }

        .support-box span {
          color: silver;
          font-weight: 600;
        }

        .bottom-line {
          text-align: center;
          margin-top: 50px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          color: #aaa;
          font-size: 13px;
        }

        .final-text {
          text-align: center;
          margin-top: 40px;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
          color: silver;
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px silver; }
          to { text-shadow: 0 0 20px white; }
        }

        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }

          .social {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-box">
            <div className="brand">
              PRO-LIFE<span>TIME⌚</span>
            </div>
            <p>
              Premium luxury watches crafted with precision,
              elegance, and timeless design.
            </p>

            {/* SOCIAL ICONS */}
            <div className="social">
              <div className="icon">IG</div>
              <div className="icon">TW</div>
              <div className="icon">CH</div>
              <div className="icon">RE</div>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-box">
            <h3>Explore</h3>
            <p>Home</p>
            <p>Collection</p>
            <p>New Arrivals</p>
            <p>Best Sellers</p>
          </div>

          {/* Get to Know Us */}
          <div className="footer-box get-to-know-us-box">
           <h3>Get To Know Us</h3>
           <p>Our Heritage</p>
           <p>Master Craftsmanship</p>
           <p>Watchmaking Excellence</p>
           <p>Brand Journey</p>
            <p>Careers</p>
          </div>

          {/* SUPPORT SECTION (UPDATED) */}
          <div className="footer-box support-box">
            <h3>Support</h3>
            <p><span>24/7:</span> Customer Care</p>
            <p><span>Email:</span> support@chronolux.com</p>
            <p><span>Warranty:</span> 2 Years Global</p>
            <p><span>Help:</span> Shipping & Returns</p>
          </div>


          {/* Subscribe */}
          <div className="footer-box subscribe">
            <h3>Stay Updated</h3>
            <p>Get latest luxury collections & offers</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Final Text */}
        <div className="final-text">
          TIME IS NOT JUST MEASURED — IT IS EXPERIENCED IN LUXURY
        </div>

        <div className="bottom-line">
          © 2026 Pro-LifeTime. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}