import { useEffect, useState } from "react";

export function Testimonials() {
  const reviews = [
    {
      name: "James Anderson",
      role: "Business Executive",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      rating: "★★★★★",
      review:
        "Outstanding craftsmanship and premium quality. The design exceeded my expectations."
    },
    {
      name: "Michael Brown",
      role: "Collector",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
      rating: "★★★★★",
      review:
        "The finishing and attention to detail are remarkable. Worth every penny."
    },
    {
      name: "William Smith",
      role: "Entrepreneur",
      image:
        "https://randomuser.me/api/portraits/men/22.jpg",
      rating: "★★★★★",
      review:
        "Elegant design, fast delivery, and excellent customer support."
    },
    {
      name: "David Wilson",
      role: "Designer",
      image:
        "https://randomuser.me/api/portraits/men/55.jpg",
      rating: "★★★★★",
      review:
        "A perfect blend of luxury and performance. Highly recommended."
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .testimonial-section{
          background:#080808;
          padding:100px 7%;
          position:relative;
          overflow:hidden;
        }

        .testimonial-title{
          text-align:center;
          margin-bottom:70px;
        }

        .testimonial-title h2{
          color:white;
          font-size:3rem;
          margin-bottom:15px;
        }

        .testimonial-title p{
          color:#bdbdbd;
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .testimonial-container{
          display:grid;
          grid-template-columns:1.2fr 1fr;
          gap:50px;
          align-items:center;
        }

        .main-review{
          background:
          linear-gradient(
            135deg,
            #121212,
            #1c1c1c
          );
          border:1px solid rgba(255,255,255,.08);
          border-radius:30px;
          padding:40px;
          position:relative;
          overflow:hidden;
        }

        .main-review::before{
          content:"";
          position:absolute;
          width:250px;
          height:250px;
          background:rgba(192,192,192,.08);
          border-radius:50%;
          top:-100px;
          right:-100px;
        }

        .profile{
          display:flex;
          align-items:center;
          gap:20px;
          margin-bottom:25px;
        }

        .profile img{
          width:85px;
          height:85px;
          border-radius:50%;
          object-fit:cover;
          border:3px solid silver;
        }

        .profile h3{
          color:white;
          margin-bottom:5px;
        }

        .profile p{
          color:silver;
        }

        .stars{
          color:silver;
          font-size:1.2rem;
          margin-bottom:20px;
        }

        .review-text{
          color:#d5d5d5;
          line-height:1.9;
          font-size:1.05rem;
        }

        .floating-reviews{
          position:relative;
          height:500px;
        }

        .float-card{
          position:absolute;
          width:260px;
          background:#121212;
          border:1px solid rgba(255,255,255,.08);
          border-radius:20px;
          padding:20px;
          color:white;
          animation:float 5s ease-in-out infinite;
          transition:.4s;
        }

        .float-card:hover{
          transform:translateY(-10px);
          border-color:silver;
        }

        .float-card img{
          width:55px;
          height:55px;
          border-radius:50%;
          object-fit:cover;
          margin-bottom:10px;
        }

        .float-card h4{
          margin-bottom:6px;
        }

        .float-card p{
          color:#c7c7c7;
          font-size:.9rem;
          line-height:1.6;
        }

        .card1{
          top:20px;
          left:20px;
        }

        .card2{
          top:180px;
          right:10px;
          animation-delay:1s;
        }

        .card3{
          bottom:20px;
          left:50px;
          animation-delay:2s;
        }

        @keyframes float{
          50%{
            transform:translateY(-15px);
          }
        }

        @media(max-width:900px){
          .testimonial-container{
            grid-template-columns:1fr;
          }

          .floating-reviews{
            height:600px;
          }

          .float-card{
            position:relative;
            margin-bottom:20px;
            width:100%;
            left:0;
            right:0;
            top:0;
            bottom:0;
          }
        }
      `}</style>

      <section className="testimonial-section">
        <div className="testimonial-title">
          <h2>What Our Customers Say</h2>
          <p>
            Thousands of customers trust our premium
            collections for quality, style, and reliability.
          </p>
        </div>

        <div className="testimonial-container">
          <div className="main-review">
            <div className="profile">
              <img
                src={reviews[active].image}
                alt={reviews[active].name}
              />

              <div>
                <h3>{reviews[active].name}</h3>
                <p>{reviews[active].role}</p>
              </div>
            </div>

            <div className="stars">
              {reviews[active].rating}
            </div>

            <div className="review-text">
              {reviews[active].review}
            </div>
          </div>

          <div className="floating-reviews">
            <div className="float-card card1">
              <img
                src={reviews[1].image}
                alt=""
              />
              <h4>{reviews[1].name}</h4>
              <p>
                Premium quality and elegant design.
              </p>
            </div>

            <div className="float-card card2">
              <img
                src={reviews[2].image}
                alt=""
              />
              <h4>{reviews[2].name}</h4>
              <p>
                Excellent support and fast delivery.
              </p>
            </div>

            <div className="float-card card3">
              <img
                src={reviews[3].image}
                alt=""
              />
              <h4>{reviews[3].name}</h4>
              <p>
                Perfect combination of luxury and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}