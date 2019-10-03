import React, { useState } from "react";


function App() {
  const [userSelection, setSelection] = useState(200);

  return (
    <React.Fragment>
      <div className="App">
        <form>
          <input type="text" placeholder="What broke now?" onChange={e => setSelection(Number(e.target.value))}/>
        </form>
      </div>

      <div>
        <img src={`https://http.cat/${userSelection}.jpg`} alt="Movie Poster"/>
      </div>
    </React.Fragment>
  );
}

export default App;
