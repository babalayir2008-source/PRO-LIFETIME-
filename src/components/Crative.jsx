import React, { useState } from "react";

export function Creative() {
  const [watchType, setWatchType] = useState("Luxury");
  const [strap, setStrap] = useState("Leather");
  const [color, setColor] = useState("Gold");
  const [engraving, setEngraving] = useState("");

  return (
    <>
      <div className="creative-container">
        {/* Hero Section */}
        <div className="hero">
          <h1>🤖 AI Watch Creator</h1>
          <p>
            Design your dream watch with AI. Select your favorite style,
            material, color, and engraving to create a unique masterpiece.
          </p>
        </div>

        {/* Main Content */}
        <div className="creator-box">
          {/* Controls */}
          <div className="controls">
            <h2>Create Your Watch</h2>

            <label>Watch Type</label>
            <select
              value={watchType}
              onChange={(e) => setWatchType(e.target.value)}
            >
              <option>Luxury</option>
              <option>Sport</option>
              <option>Classic</option>
              <option>Diamond</option>
              <option>Royal</option>
            </select>

            <label>Strap Material</label>
            <select
              value={strap}
              onChange={(e) => setStrap(e.target.value)}
            >
              <option>Leather</option>
              <option>Metal</option>
              <option>Silicone</option>
              <option>Gold Chain</option>
            </select>

            <label>Watch Color</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option>Gold</option>
              <option>Silver</option>
              <option>Black</option>
              <option>Rose Gold</option>
              <option>Blue</option>
            </select>

            <label>Custom Engraving</label>
            <input
              type="text"
              placeholder="Enter Name or Message"
              value={engraving}
              onChange={(e) => setEngraving(e.target.value)}
            />

            <button>Create AI Design</button>
          </div>

          {/* Preview */}
          <div className="preview">
            <div
              className="watch"
              style={{
                background:
                  color === "Gold"
                    ? "linear-gradient(135deg,#FFD700,#B8860B)"
                    : color === "Silver"
                    ? "linear-gradient(135deg,#f5f5f5,#999)"
                    : color === "Black"
                    ? "linear-gradient(135deg,#111,#444)"
                    : color === "Rose Gold"
                    ? "linear-gradient(135deg,#E6B8A2,#C97B63)"
                    : "linear-gradient(135deg,#1E90FF,#001F54)",
              }}
            >
              <div className="watch-face">
                <h3>{watchType}</h3>
                <p>{strap}</p>
                <small>{engraving || "Your Name"}</small>
              </div>
            </div>

            <div className="details">
              <h2>AI Generated Watch</h2>
              <p>
                <strong>Type:</strong> {watchType}
              </p>
              <p>
                <strong>Strap:</strong> {strap}
              </p>
              <p>
                <strong>Color:</strong> {color}
              </p>
              <p>
                <strong>Engraving:</strong>{" "}
                {engraving || "No engraving selected"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        .creative-container{
          min-height:100vh;
          background:
          linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),
          url("https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1600");
          background-size:cover;
          background-position:center;
          color:white;
          padding:40px;
        }

        .hero{
          text-align:center;
          margin-bottom:50px;
        }

        .hero h1{
          font-size:4rem;
          color:gold;
          text-shadow:0 0 20px gold;
        }

        .hero p{
          max-width:800px;
          margin:20px auto;
          color:#ddd;
          line-height:1.8;
        }

        .creator-box{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:40px;
        }

        .controls,
        .preview{
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.2);
          border-radius:20px;
          padding:30px;
        }

        .controls h2{
          color:gold;
          margin-bottom:20px;
        }

        .controls label{
          display:block;
          margin-top:15px;
          margin-bottom:8px;
        }

        .controls select,
        .controls input{
          width:100%;
          padding:12px;
          border:none;
          border-radius:10px;
          outline:none;
          margin-bottom:10px;
        }

        .controls button{
          width:100%;
          padding:15px;
          margin-top:20px;
          border:none;
          border-radius:30px;
          background:gold;
          font-weight:bold;
          cursor:pointer;
          transition:.3s;
        }

        .controls button:hover{
          transform:scale(1.05);
        }

        .watch{
          width:250px;
          height:250px;
          border-radius:50%;
          margin:20px auto;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 0 40px rgba(255,215,0,.5);
          animation:float 3s infinite ease-in-out;
        }

        .watch-face{
          width:180px;
          height:180px;
          border-radius:50%;
          background:#111;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .watch-face h3{
          color:gold;
          margin-bottom:10px;
        }

        .details{
          text-align:center;
          margin-top:20px;
        }

        .details h2{
          color:gold;
          margin-bottom:15px;
        }

        @keyframes float{
          0%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-15px);
          }
          100%{
            transform:translateY(0);
          }
        }

        @media(max-width:900px){
          .creator-box{
            grid-template-columns:1fr;
          }

          .hero h1{
            font-size:2.5rem;
          }
        }
      `}</style>
    </>
  );
}