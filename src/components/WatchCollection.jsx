import { useState, useEffect } from "react";
import { supabase } from "../supabase";

function CollectionWatch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  // Group products into rows of 5 for the horizontal scroll UI
  // If fewer than 5 products, show them all in one row
  const chunkSize = 5;
  const rows = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    rows.push(products.slice(i, i + chunkSize));
  }

  const rowLabels = [
    "New Arrivals",
    "Luxury Collection",
    "Best Sellers",
    "Premium Edition",
    "Sports Series",
  ];

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Poppins,sans-serif;
        }

        body{
          background:#050505;
        }

        .container{
          padding:40px;
          background:
          radial-gradient(circle at top right,#222 0%,#050505 45%);
        }

        .mainTitle{
          text-align:center;
          color:silver;
          font-size:42px;
          letter-spacing:4px;
          margin-bottom:50px;
          text-transform:uppercase;
        }

        .row{
          margin-bottom:50px;
        }

        .rowTitle{
          color:white;
          font-size:28px;
          margin-bottom:20px;
          border-left:4px solid silver;
          padding-left:15px;
        }

        .scrollContainer{
          display:flex;
          gap:25px;
          overflow-x:auto;
          padding-bottom:15px;
          scroll-behavior:smooth;
        }

        .scrollContainer::-webkit-scrollbar{
          display:none;
        }

        .card{
          min-width:300px;
          background:linear-gradient(
          145deg,
          #101010,
          #1c1c1c
          );
          border:1px solid rgba(192,192,192,.15);
          border-radius:25px;
          overflow:hidden;
          transition:.5s;
          cursor:pointer;
          position:relative;
        }

        .card:hover{
          transform:translateY(-12px);
          border-color:silver;
          box-shadow:
          0 15px 40px rgba(255,255,255,.08),
          0 0 30px rgba(192,192,192,.12);
        }

        .card img{
          width:100%;
          height:260px;
          object-fit:cover;
          transition:.6s;
        }

        .card:hover img{
          transform:scale(1.1);
        }

        .imgPlaceholder {
          width:100%;
          height:260px;
          background:#1a1a1a;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:50px;
          color:#333;
        }

        .content{
          padding:20px;
        }

        .watchName{
          color:white;
          font-size:22px;
          margin-bottom:10px;
          font-weight:600;
        }

        .price{
          color:silver;
          font-size:20px;
          margin-bottom:10px;
        }

        .rating{
          color:gold;
          margin-bottom:18px;
          font-size:18px;
        }

        .buttons{
          display:flex;
          gap:10px;
        }

        .buyBtn{
          flex:1;
          border:none;
          padding:12px;
          border-radius:30px;
          background:silver;
          color:black;
          font-weight:bold;
          cursor:pointer;
          transition:.3s;
        }

        .buyBtn:hover{
          transform:scale(1.05);
          background:white;
        }

        .detailBtn{
          flex:1;
          border:1px solid silver;
          background:transparent;
          color:silver;
          border-radius:30px;
          cursor:pointer;
          transition:.3s;
        }

        .detailBtn:hover{
          background:silver;
          color:black;
        }

        .badge{
          position:absolute;
          top:15px;
          right:15px;
          background:silver;
          color:black;
          padding:6px 14px;
          border-radius:20px;
          font-weight:600;
        }

        /* skeleton */
        .skelCard {
          min-width:300px;
          border-radius:25px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.06);
        }
        .skelImg {
          height:260px;
          background:linear-gradient(90deg,#1a1a1a 25%,#222 50%,#1a1a1a 75%);
          background-size:200% 100%;
          animation:shimmer 1.4s infinite;
        }
        .skelBody { padding:20px; }
        .skelLine {
          height:14px;
          border-radius:6px;
          margin-bottom:12px;
          background:linear-gradient(90deg,#1a1a1a 25%,#222 50%,#1a1a1a 75%);
          background-size:200% 100%;
          animation:shimmer 1.4s infinite;
        }
        @keyframes shimmer {
          0%   { background-position:200% 0; }
          100% { background-position:-200% 0; }
        }

        .emptyState {
          text-align:center;
          padding:80px 20px;
          color:#444;
        }
        .emptyState p { font-size:16px; margin-top:12px; }
      `}</style>

      <div className="container">
        <h1 className="mainTitle">Pro-LifeTime⌚</h1>

        {loading ? (
          <div className="row">
            <h2 className="rowTitle">Loading…</h2>
            <div className="scrollContainer">
              {[1,2,3,4].map((n) => (
                <div className="skelCard" key={n}>
                  <div className="skelImg" />
                  <div className="skelBody">
                    <div className="skelLine" style={{width:"70%"}} />
                    <div className="skelLine" style={{width:"40%"}} />
                    <div className="skelLine" style={{width:"55%"}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="emptyState">
            <div style={{fontSize:"52px"}}>⌚</div>
            <p>No products yet. Head to <strong style={{color:"silver"}}>Add Your Product</strong> to get started.</p>
          </div>
        ) : (
          rows.map((rowProducts, rowIndex) => (
            <div className="row" key={rowIndex}>
              <h2 className="rowTitle">
                {rowLabels[rowIndex] || `Collection ${rowIndex + 1}`}
              </h2>

              <div className="scrollContainer">
                {rowProducts.map((watch) => (
                  <div className="card" key={watch.id}>
                    <div className="badge">{watch.badge || "Premium"}</div>

                    {watch.image_url ? (
                      <img
                        src={watch.image_url}
                        alt={watch.name}
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    ) : (
                      <div className="imgPlaceholder">⌚</div>
                    )}

                    <div className="content">
                      <h3 className="watchName">{watch.name}</h3>
                      <div className="price">
                        ₹{Number(watch.price).toLocaleString("en-IN")}
                      </div>
                      <div className="rating">
                        {"⭐".repeat(Math.round(watch.rating || 5))}
                      </div>
                      <div className="buttons">
                        <button className="buyBtn">🛒 Buy Now</button>
                        <button className="detailBtn">👁 View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export { CollectionWatch };