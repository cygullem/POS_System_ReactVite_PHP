import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';
import axios from 'axios';
import Checkout from './Checkout';

const Dashboard = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [productByCategory, setProductByCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [list, setList] = useState([]);
  const [viewingProductList, setViewingProductList] = useState(false);
  const [checkout, setCheckout] = useState([]);

  const port = 'http://localhost:3000/';

  const fetchCategoriesAndProducts = async () => {
    try {
      const res = await axios.get(port + 'category');
      const res1 = await axios.get(port + 'products');
      setCategory(res.data.categories);
      setProducts(res1.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCheckoutItems = async () => {
    try {
      const res = await axios.get(port + 'checkout');
      setCheckout(res.data.products);
    } catch (error) {
      console.error('Error fetching checkout data:', error);
    }
  };

  useEffect(() => {
    fetchCategoriesAndProducts();
    fetchCheckoutItems();
  }, []);

  const getListByCategory = async (id) => {
    try {
      setSelectedCategory(id);
      const res = await axios.get(${port}products/${id});
      const productCount = res.data.products.reduce((acc, item) => {
        acc[item.name] = (acc[item.name] || 0) + 1;
        return acc;
      }, {});
      const uniqueProducts = Object.keys(productCount).map(name => ({
        name,
        count: productCount[name]
      }));
      setProductByCategory(uniqueProducts);
      setViewingProductList(false);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  const getListByProduct = async (id, name) => {
    try {
      const res = await axios.get(${port}products/${id});
      const filteredProducts = res.data.products.filter(item => item.name === name);
      setList(filteredProducts);
      setViewingProductList(true);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleBackToCategory = () => {
    setViewingProductList(false);
  };

  const updateQuantity = async (sku, change) => {
    try {
      const item = checkout.find(ci => ci.sku === sku);
      if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
          await axios.delete(${port}checkout/${item.id});
        } else {
          await axios.put(${port}checkout/${item.id}, {
            ...item,
            quantity: newQuantity,
            total: item.price * newQuantity
          });
        }
        if (newQuantity === 1 && !item) {
          await addProductToCheckout(sku, 1);
        }
      } else if (change > 0) {
        await addProductToCheckout(sku, change);
      }
      fetchCheckoutItems(); // Fetch checkout items after updating the quantity
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const addProductToCheckout = async (sku, quantity) => {
    try {
      const product = products.find(p => p.sku === sku);
      if (product) {
        const { name, price, category_id } = product;
        await axios.post(port + 'checkout', {
          name,
          sku,
          price,
          quantity,
          total: price * quantity,
          category_id
        });
        fetchCheckoutItems(); // Fetch checkout items after adding the product
      }
    } catch (error) {
      console.error('Error adding product to checkout:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className='container'>
        <h1>Categories</h1>
        <div className="grid-section">
          <div className={`grid-container top-grid ${selectedCategory === null ? 'placeholder' : ''}`}>
            {category.map((item, index) => (
              <div key={index} className="grid-item" onClick={() => getListByCategory(item.category_id)}>
                <h2>{item.name}</h2>
                <p>{item.product_count} items</p>
              </div>
            ))}
          </div>
          <div className="divider"></div>
          {!viewingProductList ? (
            <div className="grid-container bottom-grid">
              {productByCategory && productByCategory.length > 0 ? (
                productByCategory.map((item, index) => (
                  <div key={index} className="grid-item second-item" onClick={() => getListByProduct(selectedCategory, item.name)}>
                    <h2>{item.name}</h2>
                    <p>{item.count} sku</p>
                  </div>
                ))
              ) : (
                <div className="placeholder-message">
                  <p>No products available for this category.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid-container bottom-grid">
              <button className="back-button" onClick={handleBackToCategory}>Back to Products</button>
              {list && list.length > 0 ? (
                list.map((item, index) => (
                  <div key={index} className="grid-item second-item">
                    <h2>{item.name}</h2>
                    <h4>{item.sku}</h4>
                    <p style={{ marginTop: 10 }}>₱{item.price.toFixed(2)}</p>
                    <div className="item-quantity-changer">
                      <button
                        className="quantity-button"
                        onClick={() => updateQuantity(item.sku, -1)}
                      >
                        -
                      </button>
                      <span className="quantity-display">
                        {checkout.find(ci => ci.sku === item.sku)?.quantity || 0}
                      </span>
                      <button
                        className="quantity-button"
                        onClick={() => updateQuantity(item.sku, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="placeholder-message">
                  <p>No products found with the given name.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Checkout items={checkout} fetchCheckoutItems={fetchCheckoutItems} />
    </div>
  );
};

export default Dashboard;