import React from 'react';

const PizzaOrderingPage = () => {
  const pizzas = [
    {
      name: 'Margherita',
      image: 'https://i.imgur.com/eTmWoAN.png',
      ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
      price: '₹249',
    },
    {
      name: 'Pepperoni',
      image: "public/pizza1.jpeg",
      ingredients: ['Tomato Sauce', 'Mozzarella', 'Pepperoni'],
      price: '₹299',
    },
    {
      name: 'Veggie Delight',
      image: "public/Pizza 2.jpg",
      ingredients: ['Bell Peppers', 'Olives', 'Onions', 'Tomato'],
      price: '₹279',
    },
    {
      name: 'The 7 cheese',
      image: "public/Pizza 4.jpeg",
      ingredients: ['Cheddar cheese', 'Liquid cheese', 'Makhani sauce'],
      price: '₹349',
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '250px',
    margin: '15px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    padding: '10px',
  };

  const imgStyle = {
    width: '100%',
    height: '180px',
    borderRadius: '10px 10px 0 0',
    objectFit: 'cover',
  };

  const buttonStyle = {
    backgroundColor: '#ff5733',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>🍕 Pizza Ordering Page</h2>
      <div style={containerStyle}>
        {pizzas.map((pizza, index) => (
          <div key={index} style={cardStyle}>
            <img src={pizza.image} alt={pizza.name} style={imgStyle} />
            <h3>{pizza.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <ul style={{ listStyleType: 'circle', padding: '0', textAlign: 'left', marginLeft: '20px' }}>
              {pizza.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p><strong>Price:</strong> {pizza.price}</p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaOrderingPage;
