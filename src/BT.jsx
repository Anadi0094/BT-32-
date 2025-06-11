import React, { useState } from 'react';

function MyComponent() {
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const handleClick = () => {
    if (clickCount < 6) {
      const top = Math.floor(Math.random() * 80 + 10) + '%';
      const left = Math.floor(Math.random() * 80 + 10) + '%';
      setPosition({ top, left });
      setClickCount(prev => prev + 1);
    } else {
      setClickCount(prev => prev + 1);
    }
  };

  return (
    <div>
      <style>
        {`
          .box {
            position: relative;
            width: 100%;
            height: 910px;
            background-color:rgb(40, 127, 161);
            border-radius: 12px;
            text-align: center;
            font-family: Arial, sans-serif;
            overflow: hidden;
          }

          .button {
            position: absolute;
            background-color:rgb(0, 255, 136);
            color: white;
            padding: 10px 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, top 0.3s, left 0.3s;
          }

          .button:hover {
            background-color: #0056b3;
          }

          .message {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
            font-size: 20px;
            color: #333;
          }
        `}
      </style>

      <div className="box">
        <h2 style={{ paddingTop: '10px' }}>Hello Mansi Ma'am</h2>
        <h4 style={{ paddingTop: '10px' }}>We have a fact for you</h4>


        {clickCount < 7 ? (
          <button
            className="button"
            style={{ top: position.top, left: position.left }}
            onClick={handleClick}
          >
            Click Me
            <br />
            <span style={{ fontSize: '18px' }}>PLZZZZ</span>
          </button>
        ) : (
          <div className="message">See? We are not lazy.</div>
        )}
      </div>
    </div>
  );
}

export default MyComponent;
