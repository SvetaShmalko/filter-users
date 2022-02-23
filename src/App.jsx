import React from 'react'
import UserList from './components/UserList/UserList.jsx'
import Filters from './components/Filters/Filters.jsx'

function App() {
  return (
    <div className="wrapper">
      <h1>
        Users
      </h1>
      <Filters />
      <hr></hr>
        <UserList />
    </div>
  );
}

export default App;
