export function AboutWatches() {
  const sections = [
    {
      title: "Timeless Craftsmanship",
      text: "Every watch is crafted with precision engineering and timeless artistry to create a masterpiece that lasts generations.",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200",
    },
    {
      title: "Luxury Redefined",
      text: "Premium materials, elegant finishing, and sophisticated design come together to redefine luxury.",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200",
    },
    {
      title: "Swiss-Level Precision",
      text: "Inspired by world-class watchmaking standards, every second is measured with excellence.",
      image:
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200",
    },
    {
      title: "Made For Legends",
      text: "Designed for visionaries who value prestige, performance, and timeless elegance.",
      image:
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200",
    },
  ];

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .about-section{
          background:#050505;
          padding:100px 8%;
          position:relative;
          overflow:hidden;
        }

        .about-section::before{
          content:"";
          position:absolute;
          inset:0;
          background:url("https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200");
          background-size:cover;
          background-position:center;
          opacity:.08;
        }

        .heading{
          position:relative;
          z-index:2;
          text-align:center;
          color:white;
          margin-bottom:80px;
        }

        .heading h1{
          font-size:3.2rem;
          letter-spacing:3px;
          margin-bottom:15px;
        }

        .heading p{
          color:#bdbdbd;
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .zigzag-row{
          position:relative;
          z-index:2;
          display:flex;
          align-items:center;
          gap:60px;
          margin-bottom:80px;
          animation:fadeUp 1s ease;
        }

        .zigzag-row.reverse{
          flex-direction:row-reverse;
        }

        .watch-image{
          flex:1;
          overflow:hidden;
          border-radius:25px;
          position:relative;
        }

        .watch-image img{
          width:100%;
          height:420px;
          object-fit:cover;
          border-radius:25px;
          transition:.8s;
        }

        .watch-image:hover img{
          transform:scale(1.08);
        }

        .watch-content{
          flex:1;
          background:rgba(255,255,255,0.06);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,.1);
          padding:40px;
          border-radius:25px;
          color:white;
          transition:.5s;
        }

        .watch-content:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 40px rgba(255,255,255,.08);
        }

        .watch-content h2{
          font-size:2rem;
          margin-bottom:20px;
          color:silver;
        }

        .watch-content p{
          line-height:1.9;
          color:#d6d6d6;
        }

        .luxury-line{
          margin-top:20px;
          width:80px;
          height:4px;
          background:linear-gradient(to right,silver,white);
          border-radius:10px;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(50px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @media(max-width:900px){
          .zigzag-row,
          .zigzag-row.reverse{
            flex-direction:column;
          }

          .heading h1{
            font-size:2.2rem;
          }

          .watch-image img{
            height:300px;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="heading">
          <h1>ABOUT OUR WATCHES</h1>
          <p>
           "At PRO-LIFETIME ⌚, we create watches that combine timeless elegance, unmatched precision, and enduring craftsmanship—because every second of your life deserves excellence.
          </p>
        </div>

        {sections.map((item, index) => (
          <div
            key={index}
            className={`zigzag-row ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
          >
            <div className="watch-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="watch-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="luxury-line"></div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}