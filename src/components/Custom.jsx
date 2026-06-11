import React, { useEffect } from "react";

export function Custom() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const watches = [
    {
      title: "Custom Golden Watch",
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000",
      desc: "Luxury handcrafted gold watches with premium finishing."
    },
    {
      title: "Custom Diamond Watch",
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1000",
      desc: "Exclusive diamond-studded watches designed for elegance."
    },
    {
      title: "Custom Silver Watch",
      img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=1000",
      desc: "Classic silver watches with modern craftsmanship."
    },
    {
      title: "Custom Platinum Watch",
      img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1000",
      desc: "Premium platinum watches for a royal appearance."
    },
    {
      title: "Custom Rose Gold Watch",
      img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000",
      desc: "Stylish rose-gold watches with personalized engraving."
    },
    {
      title: "Custom Luxury Watch",
      img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1000",
      desc: "Fully customized luxury watches made for collectors."
    }
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>

      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            textAlign: "center",
            padding: "120px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
              color: "#FFD700",
              textShadow: "0 0 20px gold",
            }}
          >
            ⌚ Custom Royal Watches
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              fontSize: "1.2rem",
              color: "#ddd",
            }}
          >
            Design your dream watch with premium materials, luxury finishes,
            and personalized engravings.
          </p>
        </section>

        {/* Watch Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
            padding: "50px",
          }}
        >
          {watches.map((watch, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "0.4s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0px 10px 30px rgba(255,215,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={watch.img}
                alt={watch.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h2
                  style={{
                    color: "#FFD700",
                    marginBottom: "10px",
                  }}
                >
                  {watch.title}
                </h2>

                <p style={{ color: "#ddd", lineHeight: "1.7" }}>
                  {watch.desc}
                </p>

                <button
                  style={{
                    marginTop: "15px",
                    padding: "12px 25px",
                    border: "none",
                    borderRadius: "30px",
                    background: "gold",
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Customize Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "40px",
            background: "rgba(0,0,0,0.7)",
            marginTop: "50px",
          }}
        >
          <h2 style={{ color: "#FFD700" }}>
            Create Your Own Signature Watch
          </h2>
          <p style={{ color: "#ccc" }}>
            Gold • Diamond • Silver • Platinum • Rose Gold • Luxury Editions
          </p>
        </footer>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          cursor:none;
        }

        .custom-cursor{
          width:25px;
          height:25px;
          border:2px solid gold;
          border-radius:50%;
          position:fixed;
          pointer-events:none;
          transform:translate(-50%,-50%);
          z-index:9999;
          box-shadow:0 0 20px gold;
          animation:pulse 1.2s infinite;
        }

        @keyframes pulse{
          0%{
            transform:translate(-50%,-50%) scale(1);
          }
          50%{
            transform:translate(-50%,-50%) scale(1.5);
          }
          100%{
            transform:translate(-50%,-50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}