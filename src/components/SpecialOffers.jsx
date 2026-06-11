export function SpecialOffers() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .offerSection{
          padding:80px 20px;
          background:linear-gradient(135deg,#050505,#111,#1a1a1a);
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .offerCard{
          width:90%;
          max-width:1100px;
          padding:50px;
          border-radius:25px;
          background:linear-gradient(
            135deg,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.02)
          );
          border:1px solid rgba(192,192,192,0.2);
          backdrop-filter:blur(10px);
          text-align:center;
          position:relative;
          overflow:hidden;
          transition:0.4s ease;
        }

        .offerCard::before{
          content:"";
          position:absolute;
          top:-50%;
          left:-50%;
          width:200%;
          height:200%;
          background:linear-gradient(
            45deg,
            transparent,
            rgba(192,192,192,0.08),
            transparent
          );
          transform:rotate(25deg);
          animation:shine 6s linear infinite;
        }

        @keyframes shine{
          0%{
            transform:translateX(-100%) rotate(25deg);
          }
          100%{
            transform:translateX(100%) rotate(25deg);
          }
        }

        .offerCard:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 50px rgba(192,192,192,0.15);
        }

        .badge{
          display:inline-block;
          background:silver;
          color:black;
          padding:8px 18px;
          border-radius:30px;
          font-weight:700;
          margin-bottom:20px;
        }

        .title{
          color:white;
          font-size:3rem;
          font-weight:700;
          margin-bottom:15px;
        }

        .discount{
          color:silver;
          font-size:4rem;
          font-weight:800;
          margin-bottom:15px;
          text-shadow:0 0 20px rgba(192,192,192,0.3);
        }

        .desc{
          color:#cfcfcf;
          font-size:1.1rem;
          max-width:700px;
          margin:0 auto 30px;
          line-height:1.8;
        }

        .btn{
          padding:14px 35px;
          border:none;
          border-radius:40px;
          background:silver;
          color:black;
          font-size:1rem;
          font-weight:700;
          cursor:pointer;
          transition:0.3s ease;
        }

        .btn:hover{
          transform:scale(1.08);
          background:white;
          box-shadow:0 10px 25px rgba(192,192,192,0.3);
        }

        .timer{
          margin-top:25px;
          color:#aaa;
          letter-spacing:2px;
          font-size:0.9rem;
        }

        @media(max-width:768px){
          .offerCard{
            padding:35px 20px;
          }

          .title{
            font-size:2rem;
          }

          .discount{
            font-size:2.8rem;
          }
        }
      `}</style>

      <section className="offerSection">
        <div className="offerCard">
          <div className="badge">🔥 LIMITED TIME OFFER</div>

          <h2 className="title">
           PRO-LIFETIME⌚ Luxury Collection
          </h2>

          <div className="discount">
            UP TO 40% OFF
          </div>

          <p className="desc">
            Discover timeless elegance with our premium watch collection.
            Exclusive discounts on luxury, sports, and limited-edition
            timepieces. Upgrade your style today.
          </p>

          <button className="btn">
            Shop Offers ⌚
          </button>

          <div className="timer">
            OFFER ENDS SOON • DON'T MISS OUT
          </div>
        </div>
      </section>
    </>
  );
}