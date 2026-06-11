import React from "react";

export function CompareTwo() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .compare-page{
          min-height:100vh;
          background:linear-gradient(135deg,#050505,#111,#050505);
          padding:50px 30px;
          color:white;
        }

        .title{
          text-align:center;
          font-size:42px;
          color:silver;
          margin-bottom:10px;
          letter-spacing:3px;
        }

        .subtitle{
          text-align:center;
          color:#aaa;
          margin-bottom:50px;
        }

        .compare-container{
          display:flex;
          gap:30px;
          justify-content:center;
          flex-wrap:wrap;
        }

        .watch-card{
          width:420px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(192,192,192,0.2);
          border-radius:25px;
          overflow:hidden;
          transition:.4s;
          backdrop-filter:blur(10px);
        }

        .watch-card:hover{
          transform:translateY(-10px);
          border-color:silver;
          box-shadow:0 15px 40px rgba(192,192,192,.15);
        }

        .watch-img{
          width:100%;
          height:320px;
          object-fit:cover;
          transition:.5s;
        }

        .watch-card:hover .watch-img{
          transform:scale(1.05);
        }

        .content{
          padding:25px;
        }

        .watch-name{
          font-size:26px;
          color:silver;
          margin-bottom:10px;
        }

        .price{
          font-size:22px;
          margin-bottom:20px;
        }

        .specs{
          width:100%;
          border-collapse:collapse;
          margin-bottom:20px;
        }

        .specs td{
          border-bottom:1px solid rgba(255,255,255,.1);
          padding:10px 0;
        }

        .label{
          color:#bbb;
        }

        .value{
          color:white;
          text-align:right;
        }

        .btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:30px;
          background:silver;
          color:black;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
        }

        .btn:hover{
          background:white;
          transform:scale(1.03);
        }

        .vs{
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:40px;
          font-weight:bold;
          color:silver;
        }

        @media(max-width:1100px){
          .vs{
            display:none;
          }
        }
      `}</style>

      <div className="compare-page">
        <h1 className="title">PRO-LIFETIME⌚ </h1>
        <p className="subtitle">
          Compare features, design and pricing before buying.
        </p>

        <div className="compare-container">

          {/* Watch 1 */}
          <div className="watch-card">
            <img
              className="watch-img"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Watch One"
            />

            <div className="content">
              <h2 className="watch-name">Royal Silver</h2>
              <div className="price">₹29,999</div>

              <table className="specs">
                <tbody>
                  <tr>
                    <td className="label">Brand</td>
                    <td className="value">CRONOLUX</td>
                  </tr>
                  <tr>
                    <td className="label">Case Size</td>
                    <td className="value">42 mm</td>
                  </tr>
                  <tr>
                    <td className="label">Water Resistant</td>
                    <td className="value">100 m</td>
                  </tr>
                  <tr>
                    <td className="label">Movement</td>
                    <td className="value">Automatic</td>
                  </tr>
                </tbody>
              </table>

              <button className="btn">🛒 Buy Now</button>
            </div>
          </div>

          <div className="vs">VS</div>

          {/* Watch 2 */}
          <div className="watch-card">
            <img
              className="watch-img"
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa"
              alt="Watch Two"
            />

            <div className="content">
              <h2 className="watch-name">Titanium Black</h2>
              <div className="price">₹34,999</div>

              <table className="specs">
                <tbody>
                  <tr>
                    <td className="label">Brand</td>
                    <td className="value">PRO-LIFETIME</td>
                  </tr>
                  <tr>
                    <td className="label">Case Size</td>
                    <td className="value">44 mm</td>
                  </tr>
                  <tr>
                    <td className="label">Water Resistant</td>
                    <td className="value">200 m</td>
                  </tr>
                  <tr>
                    <td className="label">Movement</td>
                    <td className="value">Swiss Automatic</td>
                  </tr>
                </tbody>
              </table>

              <button className="btn">🛒 Buy Now</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}