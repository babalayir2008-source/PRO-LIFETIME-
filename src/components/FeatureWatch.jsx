export function FeatureWatch() {
  return (
    <>
      <style>{`
        .feature-watch{
          padding:100px 8%;
          background:
          linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),
          url("https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1600");
          background-size:cover;
          background-position:center;
          color:white;
        }

        .feature-title{
          text-align:center;
          margin-bottom:60px;
        }

        .feature-title h2{
          font-size:3rem;
          letter-spacing:3px;
          color:silver;
        }

        .feature-title p{
          color:#ccc;
          margin-top:10px;
          font-size:1.1rem;
        }

        .watch-card{
          max-width:1200px;
          margin:auto;
          display:flex;
          align-items:center;
          gap:50px;
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:30px;
          overflow:hidden;
          transition:0.5s;
        }

        .watch-card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 50px rgba(255,255,255,0.15);
        }

        .watch-image{
          flex:1;
        }

        .watch-image img{
          width:100%;
          height:550px;
          object-fit:cover;
        }

        .watch-content{
          flex:1;
          padding:40px;
        }

        .watch-content h3{
          font-size:2.5rem;
          margin-bottom:15px;
          color:silver;
        }

        .watch-content p{
          color:#ddd;
          line-height:1.8;
          margin-bottom:25px;
        }

        .features{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:15px;
        }

        .feature-box{
          background:rgba(255,255,255,0.05);
          padding:15px;
          border-radius:15px;
          border:1px solid rgba(255,255,255,0.08);
          transition:0.3s;
        }

        .feature-box:hover{
          background:rgba(255,255,255,0.12);
          transform:scale(1.05);
        }

        .feature-box h4{
          color:silver;
          margin-bottom:8px;
        }

        .feature-box p{
          font-size:14px;
          margin:0;
        }

        .btn{
          margin-top:30px;
          padding:14px 35px;
          border:none;
          border-radius:30px;
          background:linear-gradient(135deg,silver,white);
          color:black;
          font-weight:bold;
          cursor:pointer;
          transition:0.4s;
        }

        .btn:hover{
          transform:translateY(-4px);
        }

        @media(max-width:900px){
          .watch-card{
            flex-direction:column;
          }

          .watch-image img{
            height:350px;
          }

          .features{
            grid-template-columns:1fr;
          }

          .feature-title h2{
            font-size:2.2rem;
          }
        }
      `}</style>

      <section className="feature-watch">
        <div className="feature-title">
          <h2>FEATURED WATCH</h2>
          <p>Designed for those who value luxury, precision, and timeless elegance.</p>
        </div>

        <div className="watch-card">
          <div className="watch-image">
            <img
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200"
              alt="Luxury Watch"
            />
          </div>

          <div className="watch-content">
            <h3>PRO-LIFETIME ROYAL EDITION</h3>

            <p>
              Experience exceptional craftsmanship with a watch that combines
              modern engineering, timeless design, and premium materials.
              Every second reflects elegance and prestige.
            </p>

            <div className="features">
              <div className="feature-box">
                <h4>⌚ Sapphire Glass</h4>
                <p>Scratch-resistant crystal for lasting clarity.</p>
              </div>

              <div className="feature-box">
                <h4>💧 Water Resistant</h4>
                <p>Built to withstand everyday adventures.</p>
              </div>

              <div className="feature-box">
                <h4>⚙ Precision Movement</h4>
                <p>Reliable performance with accurate timekeeping.</p>
              </div>

              <div className="feature-box">
                <h4>✨ Premium Finish</h4>
                <p>Luxury craftsmanship with elegant detailing.</p>
              </div>

              <div className="feature-box">
                <h4>🔋 Long Battery Life</h4>
                <p>Designed for dependable everyday use.</p>
              </div>

              <div className="feature-box">
                <h4>🏆 2-Year Warranty</h4>
                <p>Confidence backed by quality assurance.</p>
              </div>
            </div>

            <button className="btn">Explore Collection</button>
          </div>
        </div>
      </section>
    </>
  );
}