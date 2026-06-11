import { useState } from "react";

export function Categories() {
  const categories = [
    {
      name: "Luxury",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      popular: true,
    },
    {
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
      popular: true,
    },
    {
      name: "Smart",
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
      popular: false,
    },
    {
      name: "Classic",
      image:
        "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56",
      popular: false,
    },
    {
      name: "Business",
      image:
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
      popular: true,
    },
    {
      name: "Premium",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
      popular: false,
    },
    {
      name: "Limited Edition",
      image:
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a",
      popular: true,
    },
    {
      name: "Minimal",
      image:
        "https://images.unsplash.com/photo-1617043786394-f977fa12eddf",
      popular: false,
    },
    {
      name: "Vintage",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
      popular: false,
    },
    {
      name: "Collector",
      image:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6",
      popular: true,
    },
  ];

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        .categories{
          background:#0b0b0b;
          padding:90px 7%;
          position:relative;
          overflow:hidden;
        }

        .cursor-glow{
          position:fixed;
          width:220px;
          height:220px;
          border-radius:50%;
          pointer-events:none;
          background:radial-gradient(
            circle,
            rgba(192,192,192,.15),
            transparent 70%
          );
          transform:translate(-50%,-50%);
          z-index:1;
        }

        .title{
          text-align:center;
          margin-bottom:60px;
        }

        .title h2{
          color:white;
          font-size:3rem;
          margin-bottom:15px;
        }

        .title p{
          color:#bdbdbd;
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .grid{
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(260px,1fr));
          gap:28px;
          position:relative;
          z-index:2;
        }

        .card{
          position:relative;
          height:340px;
          border-radius:24px;
          overflow:hidden;
          cursor:pointer;
          border:1px solid rgba(255,255,255,.08);
          transition:.5s;
          background:#111;
        }

        .card:hover{
          transform:translateY(-12px);
          box-shadow:0 20px 40px rgba(192,192,192,.18);
        }

        .card img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s;
        }

        .card:hover img{
          transform:scale(1.15) rotate(2deg);
          filter:brightness(1.1);
        }

        .overlay{
          position:absolute;
          inset:0;
          background:
          linear-gradient(
            to top,
            rgba(0,0,0,.95),
            rgba(0,0,0,.15)
          );
        }

        .content{
          position:absolute;
          bottom:25px;
          left:25px;
          right:25px;
          color:white;
        }

        .content h3{
          font-size:1.5rem;
          margin-bottom:8px;
        }

        .content p{
          color:#d0d0d0;
          font-size:.95rem;
        }

        .popular{
          position:absolute;
          top:15px;
          right:15px;
          background:linear-gradient(
            135deg,
            silver,
            white
          );
          color:black;
          font-size:.8rem;
          font-weight:700;
          padding:8px 14px;
          border-radius:50px;
          z-index:5;
        }

        .compare-section{
          margin-top:80px;
          background:
          linear-gradient(
            135deg,
            #151515,
            #1f1f1f
          );
          border:1px solid rgba(255,255,255,.08);
          border-radius:30px;
          padding:40px;
          text-align:center;
          position:relative;
          z-index:2;
        }

        .compare-section h3{
          color:white;
          font-size:2rem;
          margin-bottom:15px;
        }

        .compare-section p{
          color:#cfcfcf;
          max-width:800px;
          margin:auto;
          line-height:1.8;
        }

        .compare-boxes{
          margin-top:35px;
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
        }

        .compare-card{
          background:#0d0d0d;
          border:1px solid rgba(255,255,255,.08);
          border-radius:20px;
          padding:25px;
          transition:.4s;
        }

        .compare-card:hover{
          transform:translateY(-8px);
          border-color:silver;
        }

        .compare-card h4{
          color:silver;
          margin-bottom:10px;
        }

        .compare-card p{
          color:#bdbdbd;
          font-size:.9rem;
        }

        .compare-btn{
          margin-top:30px;
          padding:15px 35px;
          border:none;
          border-radius:50px;
          background:
          linear-gradient(
            135deg,
            silver,
            white
          );
          color:black;
          font-weight:700;
          cursor:pointer;
          transition:.4s;
        }

        .compare-btn:hover{
          transform:scale(1.08);
          box-shadow:0 12px 25px rgba(255,255,255,.2);
        }

      `}</style>

      <div
        className="cursor-glow"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />

      <section
        className="categories"
        onMouseMove={(e) =>
          setCursor({
            x: e.clientX,
            y: e.clientY,
          })
        }
      >
        <div className="title">
          <h2>Explore Categories</h2>
          <p>
            Browse premium collections designed for
            professionals, enthusiasts, and collectors.
          </p>
        </div>

        <div className="grid">
          {categories.map((item, index) => (
            <div className="card" key={index}>
              {item.popular && (
                <div className="popular">
                  Popular
                </div>
              )}

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="overlay"></div>

              <div className="content">
                <h3>{item.name}</h3>
                <p>
                  Discover premium designs and
                  exceptional craftsmanship.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Feature */}

        <div className="compare-section">
          <h3>Smart Comparison Tool</h3>

          <p>
            Compare specifications, pricing,
            materials, warranty, ratings and
            performance side-by-side before
            making a purchase decision.
          </p>

          <div className="compare-boxes">
            <div className="compare-card">
              <h4>Specifications</h4>
              <p>
                Compare dimensions, movement,
                materials and features.
              </p>
            </div>

            <div className="compare-card">
              <h4>Price Analysis</h4>
              <p>
                Evaluate value across multiple
                brands and collections.
              </p>
            </div>

            <div className="compare-card">
              <h4>Customer Ratings</h4>
              <p>
                View ratings and reviews side by
                side.
              </p>
            </div>

            <div className="compare-card">
              <h4>Warranty</h4>
              <p>
                Compare support, coverage and
                after-sales service.
              </p>
            </div>
          </div>

          <button className="compare-btn">
            Compare Products
          </button>
        </div>
      </section>
    </>
  );
}