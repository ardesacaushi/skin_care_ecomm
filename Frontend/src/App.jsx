import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingBag } from 'lucide-react';
import './App.css';
import ProductCard from './components/product-card/productCard';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gabim gjatë lidhjes me serverin:', err);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* Menyja kryesore */}
      <nav className="navbar">
        <div className="brand">
          <img src="\logo.jpg" alt="Ardesa Logo" onError={(e) => e.target.style.display='none'} />
          <div>
            <h1>ARDESA</h1>
            <span>BEAUTY & SKINCARE</span>
          </div>
        </div>

        <button className="cart-btn">
          <ShoppingBag size={18} />
          <span>Shporta ({cart.length})</span>
        </button>
      </nav>

      {/* Pjesa prezantuese (Hero) */}
      <header className="hero">
        <h2>Bukuria natyrale fillon me kujdesin e duhur</h2>
        <p>
          Zbuloni koleksionin tonë të kremrave hidratues dhe produkteve makeup me përbërës të pastër, krijuar për lëkurën tuaj.
        </p>
      </header>

      {/* Lista e produkteve nga MySQL */}
      <main className="container">
        <h2 className="section-title">Produktet Tona</h2>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Duke ngarkuar produktet...</p>
        ) : (
          <div className="products-grid">
            {products.map((item) => (
              <ProductCard item={item} addToCart={() => addToCart()} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;