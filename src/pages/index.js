import React from 'react';
  
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh'
      }}
    >
      <h1>Welcome to GeeksforGeeks</h1>
    </div>
  );
};
  

/*
      <div>
        <table className='table'>
          <tbody>
            <tr className='tableRow'>
              <fieldset>
                <legend className='legend'><strong>Submit for contact here</strong></legend>
                <div align="left">
                  <div>
                      <label><strong>First Name:</strong>
                      <input type='text'></input>
                      </label>
                    </div>
                  <div>
                      <label><strong>Last Name:</strong>
                      <input type='text'></input>
                      </label>
                    </div>
                  <div className='requiredField'>
                    <label><strong>Email:</strong>
                    <input type='text' required></input>
                    </label>
                  </div>
                </div>
                <button onClick={postInfo}><strong>Submit</strong></button>
              </fieldset>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
*/
export default Home;