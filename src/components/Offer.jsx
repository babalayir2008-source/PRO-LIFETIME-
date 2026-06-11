export function Offer() {
  return (
    <>
      <style>{`
        .offer-section{
          padding:100px 8%;
          background:
          linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.85)),
          url("https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1600");
          background-size:cover;
          background-position:center;
          color:white;
          text-align:center;
        }

        .offer-title h1{
          font-size:3rem;
          color:silver;
          margin-bottom:15px;
          letter-spacing:3px;
        }

        .offer-title p{
          color:#ccc;
          margin-bottom:50px;
        }

        .offer-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
          max-width:1200px;
          margin:auto;
        }

        .offer-card{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.1);
          border-radius:25px;
          padding:30px;
          transition:.4s;
        }

        .offer-card:hover{
          transform:translateY(-10px);
          box-shadow:0 15px 35px rgba(255,255,255,.12);
        }

        .offer-card h2{
          color:silver;
          margin-bottom:15px;
        }

        .offer-card p{
          color:#ddd;
          line-height:1.7;
        }

        .special-banner{
          margin-top:50px;
          padding:20px;
          border-radius:20px;
          background:linear-gradient(135deg,silver,white);
          color:black;
          font-weight:bold;
          font-size:1.2rem;
          animation:pulse 2s infinite;
        }

        @keyframes pulse{
          50%{
            transform:scale(1.03);
          }
        }
      `}</style>

      <section className="offer-section">
        <div className="offer-title">
          <h1>SPECIAL OFFERS</h1>
          <p>Exclusive luxury deals available for a limited time.</p>
        </div>

        <div className="offer-grid">

          <div className="offer-card">
            <h2>🎉 First Purchase Offer</h2>
            <p>
              Get an additional 10% OFF on your first order with
              PRO-LIFETIME.
            </p>
          </div>

          <div className="offer-card">
            <h2>🚚 Free Delivery</h2>
            <p>
              Enjoy FREE shipping across India on all luxury watch orders.
            </p>
          </div>

          <div className="offer-card">
            <h2>☀️ Seasonal Sale</h2>
            <p>
              Up to 30% OFF on selected premium collections during
              the season sale.
            </p>
          </div>

          <div className="offer-card">
            <h2>💰 Cashback Offer</h2>
            <p>
              Purchase watches worth ₹25,000 or more and get
              cashback up to ₹10,000.*
            </p>
          </div>

        </div>

        <div className="special-banner">
          ⌚ LIMITED TIME OFFER — BUY NOW & EXPERIENCE LUXURY FOR LESS!
        </div>
      </section>
    </>
  );
}