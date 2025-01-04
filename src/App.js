import React, { useState } from 'react';
import './App.css';
import BgImg from './MV5BNDViYTM1MDUtZjZlZi00YTEyLWFiNmYtZGQ0Yjk0Mzk3MmY0XkEyXkFqcGc@._V1_.jpg'

function App() {
  const [panelCount, setPanelCount] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [average, setAverage] = useState(null);


  // Handle the number of panel members input
  const handlePanelCountChange = (e) => {
    const count = parseInt(e.target.value);
    setPanelCount(count);
    setRatings(new Array(count).fill(0)); // Initialize ratings array based on count
  };

  // Handle rating change for each panel member
  const handleRatingChange = (index, value) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = parseInt(value);
    setRatings(updatedRatings);
  };

  // Calculate the average rating
  const calculateAverage = () => {
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const avg = sum / ratings.length;
    setAverage(avg);
  };

  return (




    <div className="App">

<header className="App-header flex justify-center items-center">
        <img
          
          src={BgImg}  // Path to your top image
          alt="Top Image"
          style={{ width: '10%', height: '10%', marginBottom: '10px' }}  // Make the image responsive and add margin
        />
      </header>
      <h1 className='text-3xl font-bold p-5'>Latent Calculator</h1>

      {/* Panel members input */}
      <div>
        <label>
          Number of Panel Members:
          <input
            type="number"
            placeholder='Enter number'
            className='border bg-gray-100 rounded p-2 text-black font-bold'
            value={panelCount}
            onChange={handlePanelCountChange}
            min="1"
          />
        </label>
      </div>

      {/* Render rating inputs dynamically based on the panel count */}
      {panelCount > 0 && (
        <div>
          <h3 className='text-3xl font-medium p-5'>Rating by panel members</h3>
          {ratings.map((rating, index) => (
            <div key={index}>
              <label>
                Panel Member {index + 1} Rating:
                <input
                  type="number"
                  className='border bg-gray-100 rounded p-2 text-black bold'
                  value={rating}
                  onChange={(e) => handleRatingChange(index, e.target.value)}
                  min="1"
                  max="10"
                />
              </label>
            </div>
          ))}
        </div>
      )}

      {/* Calculate and display average */}
      {ratings.length > 0 && (
        <button onClick={calculateAverage}>Calculate Average</button>
      )}

      {average !== null && (
        <div>
          <h2 className='text-4xl p-5 font-bold'>Average - {average.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
