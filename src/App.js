import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddListContainer from "./components/addListContainer";
import ListContainer from "./components/listContainer";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>My List</h3>
      </div>
      <div className="row">
        <ListContainer />
      </div>
      <div className="row">
        <AddListContainer />
      </div>
    </div>
  )
}
export default App;