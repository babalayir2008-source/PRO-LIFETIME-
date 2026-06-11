import { useEffect, useState } from "react";

export function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
    "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56",
  ];

  const [current, setCurrent] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <style>{`

      *{
        box-sizing:border-box;
      }

      .cursor-glow{
        width:300px;
        height:300px;
        position:fixed;
        border-radius:50%;
        pointer-events:none;
        background:radial-gradient(
          circle,
          rgba(192,192,192,.20),
          transparent 70%
        );
        transform:translate(-50%,-50%);
        z-index:0;
      }

      .hero{
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:60px;
        position:relative;
        overflow:hidden;
        background:#080808;
      }

      .hero-bg{
        position:absolute;
        inset:0;
        background-size:cover;
        background-position:center;
        transition:all 1.5s ease;
        filter:brightness(.35);
      }

      .hero-overlay{
        position:absolute;
        inset:0;
        background:
        linear-gradient(
          90deg,
          rgba(0,0,0,.9),
          rgba(0,0,0,.4)
        );
      }

      .hero-content{
        position:relative;
        z-index:2;
        max-width:1300px;
        width:100%;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:60px;
        align-items:center;
      }

      .left h1{
        font-size:4.5rem;
        color:white;
        line-height:1.1;
        margin-bottom:20px;
      }

      .left h1 span{
        color:silver;
      }

      .left p{
        color:#d4d4d4;
        font-size:1.1rem;
        line-height:1.8;
        margin-bottom:35px;
      }

      .buttons{
        display:flex;
        gap:20px;
        margin-bottom:40px;
      }

      .primary-btn{
        padding:16px 34px;
        border:none;
        border-radius:50px;
        background:linear-gradient(
          135deg,
          silver,
          white
        );
        color:black;
        font-weight:700;
        cursor:pointer;
        transition:.4s;
      }

      .primary-btn:hover{
        transform:translateY(-5px);
        box-shadow:0 15px 35px rgba(255,255,255,.25);
      }

      .secondary-btn{
        padding:16px 34px;
        border-radius:50px;
        border:1px solid silver;
        background:transparent;
        color:white;
        cursor:pointer;
        transition:.4s;
      }

      .secondary-btn:hover{
        background:silver;
        color:black;
      }

      .features{
        display:flex;
        gap:20px;
        flex-wrap:wrap;
      }

      .feature{
        background:rgba(255,255,255,.06);
        border:1px solid rgba(255,255,255,.1);
        padding:15px 20px;
        border-radius:15px;
        color:white;
        backdrop-filter:blur(10px);
      }

      .right{
        display:flex;
        justify-content:center;
        position:relative;
      }

      .image-card{
        width:420px;
        height:520px;
        overflow:hidden;
        border-radius:30px;
        border:1px solid rgba(255,255,255,.1);
        box-shadow:0 20px 50px rgba(0,0,0,.5);
        animation:float 4s ease-in-out infinite;
      }

      .image-card img{
        width:100%;
        height:100%;
        object-fit:cover;
      }

      .stats{
        position:absolute;
        bottom:20px;
        left:-30px;
        background:rgba(20,20,20,.95);
        color:white;
        padding:18px 24px;
        border-radius:18px;
        border:1px solid rgba(255,255,255,.1);
      }

      .rating{
        position:absolute;
        top:30px;
        right:-30px;
        background:rgba(20,20,20,.95);
        color:white;
        padding:18px 24px;
        border-radius:18px;
        border:1px solid rgba(255,255,255,.1);
      }

      .slider-dots{
        display:flex;
        gap:12px;
        margin-top:30px;
      }

      .dot{
        width:12px;
        height:12px;
        border-radius:50%;
        background:#555;
        transition:.4s;
      }

      .dot.active{
        background:silver;
        transform:scale(1.4);
      }

      @keyframes float{
        50%{
          transform:translateY(-15px);
        }
      }

      @media(max-width:900px){
        .hero-content{
          grid-template-columns:1fr;
          text-align:center;
        }

        .left h1{
          font-size:3rem;
        }

        .image-card{
          width:320px;
          height:420px;
        }

        .features{
          justify-content:center;
        }
      }

      `}</style>

      <div
        className="cursor-glow"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />

      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(${images[current]})`,
          }}
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="left">
            <h1>
              Premium <span>Luxury</span>
              <br />
              Collection
            </h1>

            <p>
              Discover timeless craftsmanship, elegant designs,
              and premium quality built for modern lifestyles.
              Trusted by thousands of customers worldwide.
            </p>

            <div className="buttons">
              <button className="primary-btn">
                Explore Collection
              </button>

              <button className="secondary-btn">
                View Catalog
              </button>
            </div>

            <div className="features">
              <div className="feature">
                24/7 Customer Support
              </div>

              <div className="feature">
                Secure Payment
              </div>

              <div className="feature">
                Trusted Worldwide
              </div>

              <div className="feature">
                Fast Delivery
              </div>
            </div>

            <div className="slider-dots">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${
                    current === i ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="right">
            <div className="image-card">
              <img
                src={images[current]}
                alt="Luxury Product"
              />
            </div>

            <div className="stats">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="rating">
              <h3>4.9/5</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}