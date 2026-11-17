function ProductCard({ item, addToCart }) {
  return (
    <div className="product-card">
      <img src={item.image_url} alt={item.name} />
      <div className="product-info">
        <span className="skin-badge">Lëkura: {item.skin_type}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="product-footer">
          <span className="price">{item.base_price} Lekë</span>
          <button className="add-btn" onClick={() => addToCart(item)}>
            + Shto në shportë
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;