import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export function AddYourProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image_url: "",
    description: "",
    badge: "Premium",
    stock: 10,
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [message, setMessage] = useState(null); // { type: 'success'|'error', text }
  const [deleteId, setDeleteId] = useState(null); // for confirm dialog

  // ─── READ ────────────────────────────────────────────────
  async function fetchProducts() {
    setFetchLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      showMessage("error", "Failed to load products.");
    } else {
      setProducts(data);
    }
    setFetchLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // ─── CREATE ──────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("products").insert([
      {
        name: form.name,
        price: parseFloat(form.price),
        category: form.category,
        image_url: form.image_url,
        description: form.description,
        badge: form.badge || "Premium",
        stock: parseInt(form.stock) || 10,
        rating: 5.0,
      },
    ]);

    if (error) {
      showMessage("error", "Failed to add product. " + error.message);
    } else {
      showMessage("success", `"${form.name}" added to collection!`);
      setForm({ name: "", price: "", category: "", image_url: "", description: "", badge: "Premium", stock: 10 });
      fetchProducts();
    }
    setLoading(false);
  }

  // ─── DELETE ──────────────────────────────────────────────
  async function handleDelete(id, name) {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      showMessage("error", "Failed to delete product.");
    } else {
      showMessage("success", `"${name}" removed from collection.`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
    setDeleteId(null);
  }

  function showMessage(type, text) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3500);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const categories = ["Luxury", "Sports", "Classic", "Smart", "Limited Edition", "Premium"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        .ayp-page {
          min-height: 100vh;
          background: #080808;
          font-family: 'Poppins', sans-serif;
          padding: 40px 20px 80px;
        }

        /* ── TOP HERO ── */
        .ayp-hero {
          max-width: 1200px;
          margin: 0 auto 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .ayp-hero-left h1 {
          font-size: 48px;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .ayp-hero-left h1 span {
          color: silver;
        }

        .ayp-hero-left p {
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 32px;
          font-size: 15px;
        }

        .ayp-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ayp-feat {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ayp-feat-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .ayp-feat-text h4 {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .ayp-feat-text p {
          color: #888;
          font-size: 13px;
          margin: 0;
        }

        /* ── FORM BOX ── */
        .ayp-form-box {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 24px;
          padding: 36px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 50px rgba(0,0,0,.5);
        }

        .ayp-form-box h2 {
          color: #fff;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 28px;
          text-align: center;
          letter-spacing: 1px;
        }

        .ayp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .ayp-field {
          margin-bottom: 16px;
        }

        .ayp-field label {
          display: block;
          color: #999;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .ayp-field input,
        .ayp-field select,
        .ayp-field textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.12);
          background: #111;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color .25s, box-shadow .25s;
        }

        .ayp-field select option {
          background: #111;
        }

        .ayp-field textarea {
          resize: none;
          height: 100px;
        }

        .ayp-field input:focus,
        .ayp-field select:focus,
        .ayp-field textarea:focus {
          border-color: silver;
          box-shadow: 0 0 0 3px rgba(192,192,192,.12);
        }

        .ayp-submit-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, #c0c0c0, #ffffff);
          color: #000;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: transform .25s, box-shadow .25s;
          margin-top: 6px;
        }

        .ayp-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255,255,255,.2);
        }

        .ayp-submit-btn:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        /* ── TOAST ── */
        .ayp-toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          padding: 14px 22px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 500;
          z-index: 9999;
          animation: ayp-slide-up .3s ease;
          max-width: 340px;
        }

        .ayp-toast.success {
          background: rgba(40,200,100,.15);
          border: 1px solid rgba(40,200,100,.4);
          color: #5fe89d;
        }

        .ayp-toast.error {
          background: rgba(220,60,60,.15);
          border: 1px solid rgba(220,60,60,.4);
          color: #f08080;
        }

        @keyframes ayp-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── DIVIDER ── */
        .ayp-divider {
          max-width: 1200px;
          margin: 0 auto 50px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ayp-divider::before,
        .ayp-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,.08);
        }

        .ayp-divider-text {
          color: #666;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── PRODUCT GRID ── */
        .ayp-grid-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ayp-grid-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .ayp-grid-header h2 {
          color: #fff;
          font-size: 28px;
          font-weight: 600;
        }

        .ayp-grid-header h2 span {
          color: silver;
          font-size: 16px;
          font-weight: 400;
          margin-left: 10px;
        }

        .ayp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        /* ── PRODUCT CARD ── */
        .ayp-card {
          background: linear-gradient(145deg, #101010, #1a1a1a);
          border: 1px solid rgba(192,192,192,.12);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: transform .35s, border-color .35s, box-shadow .35s;
        }

        .ayp-card:hover {
          transform: translateY(-8px);
          border-color: rgba(192,192,192,.4);
          box-shadow: 0 15px 40px rgba(0,0,0,.5);
        }

        .ayp-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          transition: transform .5s;
        }

        .ayp-card:hover .ayp-card-img {
          transform: scale(1.06);
        }

        .ayp-card-img-placeholder {
          width: 100%;
          height: 200px;
          background: #1c1c1c;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #444;
          font-size: 40px;
        }

        .ayp-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(192,192,192,.9);
          color: #000;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: .5px;
        }

        .ayp-card-body {
          padding: 18px;
        }

        .ayp-card-category {
          color: silver;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .ayp-card-name {
          color: #fff;
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ayp-card-desc {
          color: #666;
          font-size: 12px;
          line-height: 1.5;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ayp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ayp-card-price {
          color: silver;
          font-size: 18px;
          font-weight: 600;
        }

        .ayp-delete-btn {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid rgba(220,80,80,.4);
          background: rgba(220,80,80,.08);
          color: #f08080;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: background .2s, border-color .2s, transform .2s;
        }

        .ayp-delete-btn:hover {
          background: rgba(220,80,80,.2);
          border-color: rgba(220,80,80,.7);
          transform: scale(1.04);
        }

        /* ── CONFIRM DIALOG ── */
        .ayp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.75);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .ayp-dialog {
          background: #141414;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 20px;
          padding: 36px;
          max-width: 380px;
          width: 100%;
          text-align: center;
        }

        .ayp-dialog h3 {
          color: #fff;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .ayp-dialog p {
          color: #888;
          font-size: 14px;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .ayp-dialog-btns {
          display: flex;
          gap: 12px;
        }

        .ayp-dialog-cancel {
          flex: 1;
          padding: 12px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.15);
          background: transparent;
          color: #aaa;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          cursor: pointer;
          transition: border-color .2s;
        }

        .ayp-dialog-cancel:hover {
          border-color: silver;
          color: #fff;
        }

        .ayp-dialog-confirm {
          flex: 1;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #dc3030, #ff6060);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity .2s;
        }

        .ayp-dialog-confirm:hover { opacity: .85; }

        /* ── EMPTY + SKELETON ── */
        .ayp-empty {
          text-align: center;
          padding: 60px 20px;
          color: #444;
        }

        .ayp-empty-icon { font-size: 52px; margin-bottom: 16px; }
        .ayp-empty p { font-size: 15px; }

        .ayp-skeleton {
          background: linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%);
          background-size: 200% 100%;
          animation: ayp-shimmer 1.4s infinite;
          border-radius: 8px;
        }

        @keyframes ayp-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .ayp-skel-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.06);
        }

        .ayp-skel-img { height: 200px; }
        .ayp-skel-body { padding: 18px; }
        .ayp-skel-line { height: 14px; margin-bottom: 10px; border-radius: 6px; }
        .ayp-skel-line.w60 { width: 60%; }
        .ayp-skel-line.w80 { width: 80%; }
        .ayp-skel-line.w40 { width: 40%; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ayp-hero { grid-template-columns: 1fr; gap: 36px; }
          .ayp-hero-left h1 { font-size: 36px; }
          .ayp-row { grid-template-columns: 1fr; gap: 0; }
        }

        @media (max-width: 500px) {
          .ayp-form-box { padding: 24px 18px; }
          .ayp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ayp-page">

        {/* ── HERO + FORM ── */}
        <div className="ayp-hero">

          <div className="ayp-hero-left">
            <h1>Add Your<br /><span>Luxury Watch</span></h1>
            <p>
              Expand the PRO-LIFETIME collection. Every product you add here
              is instantly live on the Collection page — no refresh needed.
            </p>

            <div className="ayp-features">
              <div className="ayp-feat">
                <div className="ayp-feat-icon">⌚</div>
                <div className="ayp-feat-text">
                  <h4>Live on Collection</h4>
                  <p>Products appear instantly after adding.</p>
                </div>
              </div>
              <div className="ayp-feat">
                <div className="ayp-feat-icon">🗄️</div>
                <div className="ayp-feat-text">
                  <h4>Stored in Supabase</h4>
                  <p>Persists across sessions, zero data loss.</p>
                </div>
              </div>
              <div className="ayp-feat">
                <div className="ayp-feat-icon">🗑️</div>
                <div className="ayp-feat-text">
                  <h4>Full CRUD Control</h4>
                  <p>Add or delete products from this page.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ayp-form-box">
            <h2>+ Add Product</h2>

            <div onSubmit={handleSubmit}>

              <div className="ayp-row">
                <div className="ayp-field">
                  <label>Watch Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Royal Silver Pro"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ayp-field">
                  <label>Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="e.g. 29999"
                    value={form.price}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                </div>
              </div>

              <div className="ayp-row">
                <div className="ayp-field">
                  <label>Category</label>
                  <select name="category" value={form.category} onChange={handleChange} required>
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="ayp-field">
                  <label>Badge</label>
                  <input
                    type="text"
                    name="badge"
                    placeholder="e.g. Premium"
                    value={form.badge}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ayp-field">
                <label>Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  placeholder="https://images.unsplash.com/..."
                  value={form.image_url}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ayp-row">
                <div className="ayp-field">
                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="e.g. 10"
                    value={form.stock}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>

              <div className="ayp-field">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Describe this watch..."
                  value={form.description}
                  onChange={handleChange}
                />
              </div>

              <button
                className="ayp-submit-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Adding…" : "Add to Collection"}
              </button>

            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="ayp-divider">
          <span className="ayp-divider-text">Your Products in Database</span>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div className="ayp-grid-section">
          <div className="ayp-grid-header">
            <h2>
              Collection
              <span>{products.length} {products.length === 1 ? "item" : "items"}</span>
            </h2>
          </div>

          {fetchLoading ? (
            <div className="ayp-grid">
              {[1,2,3,4].map((n) => (
                <div className="ayp-skel-card" key={n}>
                  <div className="ayp-skeleton ayp-skel-img" />
                  <div className="ayp-skel-body">
                    <div className="ayp-skeleton ayp-skel-line w60" />
                    <div className="ayp-skeleton ayp-skel-line w80" />
                    <div className="ayp-skeleton ayp-skel-line w40" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="ayp-empty">
              <div className="ayp-empty-icon">⌚</div>
              <p>No products yet. Add your first watch above.</p>
            </div>
          ) : (
            <div className="ayp-grid">
              {products.map((p) => (
                <div className="ayp-card" key={p.id}>
                  {p.image_url ? (
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="ayp-card-img"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div className="ayp-card-img-placeholder">⌚</div>
                  )}

                  {p.badge && <div className="ayp-badge">{p.badge}</div>}

                  <div className="ayp-card-body">
                    <div className="ayp-card-category">{p.category}</div>
                    <div className="ayp-card-name">{p.name}</div>
                    {p.description && (
                      <div className="ayp-card-desc">{p.description}</div>
                    )}
                    <div className="ayp-card-footer">
                      <div className="ayp-card-price">
                        ₹{Number(p.price).toLocaleString("en-IN")}
                      </div>
                      <button
                        className="ayp-delete-btn"
                        onClick={() => setDeleteId({ id: p.id, name: p.name })}
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── CONFIRM DELETE DIALOG ── */}
      {deleteId && (
        <div className="ayp-overlay">
          <div className="ayp-dialog">
            <h3>Remove Watch?</h3>
            <p>
              <strong style={{ color: "#fff" }}>{deleteId.name}</strong> will be permanently
              deleted from the database and removed from the Collection page.
            </p>
            <div className="ayp-dialog-btns">
              <button className="ayp-dialog-cancel" onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button
                className="ayp-dialog-confirm"
                onClick={() => handleDelete(deleteId.id, deleteId.name)}
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {message && (
        <div className={`ayp-toast ${message.type}`}>
          {message.type === "success" ? "✅" : "❌"} {message.text}
        </div>
      )}
    </>
  );
}