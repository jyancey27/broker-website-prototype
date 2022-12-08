
import React from 'react';
  
const Houses = () => {

  const data = [
    { house: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", cost: "250,000", link: "https://www.google.com/", houseName: "Log Cabin", houseSize: "1200 sq ft", houseAcreage: "2.3 acre" },
    { house: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", cost: "500,000", link: "https://www.google.com/", houseName: "Gemsbok Alley", houseSize: "1500 sq ft", houseAcreage: "0.64 acre" },
    { house: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", cost: "1,000,000", link: "https://www.google.com/", houseName: "Desert Abode", houseSize: "2500 sq ft", houseAcreage: "0.57 acre" },
  ]

  return (
    <div className='App'>
      <h1>Recent Listings</h1>
      <div className='App'>
        <table className='houseTable'>
          <tr>
            <th>Photos</th>
            <th>Information</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td style={{ backgroundImage: `url(${val.house})`, backgroundSize: '500px', width: '498px', height: '330px', border:'1px solid black'}}></td>
                <td><a href={val.link} target='_blank' rel='noreferrer'>{val.houseName}</a>
                  <br></br><br></br>{val.houseSize}
                  <br></br><br></br>{val.houseAcreage}
                  <br></br><br></br>${val.cost}</td>
                
              </tr>
            )
          })}
        </table> <br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
};
  
export default Houses;