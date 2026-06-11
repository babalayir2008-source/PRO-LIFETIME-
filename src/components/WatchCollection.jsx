function CollectionWatch() {
  const watches = [
    {
      name: "Royal Silver",
      price: "₹29,999",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      name: "Chrono Elite",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
    },
    {
      name: "Titanium Black",
      price: "₹34,999",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa"
    },
    {
      name: "Ocean Master",
      price: "₹22,999",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    },
    {
      name: "Silver Crown",
      price: "₹27,999",
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a"
    }
  ];

  const rows = [
    "Luxury Collection",
    "Best Sellers",
    "Premium Edition",
    "Sports Series",
    "New Arrivals"
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
      `}</style>

      <div className="container">
        <h1 className="mainTitle">
            Pro-LifeTime⌚
        </h1>

        {rows.map((row) => (
          <div className="row" key={row}>
            <h2 className="rowTitle">{row}</h2>

            <div className="scrollContainer">
              {watches.map((watch,index) => (
                <div className="card" key={index}>
                  <div className="badge">Premium</div>

                  <img
                    src={watch.image}
                    alt={watch.name}
                  />

                  <div className="content">
                    <h3 className="watchName">
                      {watch.name}
                    </h3>

                    <div className="price">
                      {watch.price}
                    </div>

                    <div className="rating">
                      ⭐⭐⭐⭐⭐
                    </div>

                    <div className="buttons">
                      <button className="buyBtn">
                        🛒 Buy Now
                      </button>

                      <button className="detailBtn">
                        👁 View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export { CollectionWatch };