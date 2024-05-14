import './App.css';


function App() {

  const chartData = [
    { day: 'mon', amount: 17.45 },
    { day: 'tue', amount:39 },
    { day: 'wed', amount: 52.9},
    { day: 'thu', amount: 36.2},
    { day: 'fri', amount: 22 },
    { day: 'sat', amount: 39},
    { day: 'sun', amount: 20}

  ];

  return (
    <div className='container'>
    <div className='balance'>
      <div className='row1'>
        <span>my balance</span>
        <h3>$921.48</h3>
      </div>
      <div className='row2'>

      </div>

    </div>
    <div className="chart-container">
      <h3>Spending-last 7 days</h3>
      {chartData.map((dayData, index) => (
        <div
          key={index}
          className={`chart-bar ${dayData.amount>=50 ? 'current-day' : ''}`}
          title={`$${dayData.amount} `}
          style={{ height: `${dayData.amount+dayData.amount}px` }}

        >      
        {/* <span className='day'>{`${dayData.day}`} </span> */}

        
        </div>
        // <div key={index} className="day-bar-wrapper">
        //   <div className="day-label">{`Day ${dayData.day}`}</div>
        //   <div
        //     className={`chart-bar ${dayData.isCurrentDay ? 'current-day' : ''}`}
        //     style={{ height: `${dayData.amount}px` }}
        //     title={`$${dayData.amount.toFixed(2)}`}
        //   />
        // </div>
      ))}
      <div className='day'>
        <p>Mon</p>
        <p>Tue</p>
        <p>wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
     <hr/>
      <div className='total'>
        <div className='month-total'>
         <p>Total this month</p>
         <h3>$478.33</h3>
        </div>
        <div className='last-month'>
           <p>+2.4%</p>
           <span>
            from last month
           </span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;


