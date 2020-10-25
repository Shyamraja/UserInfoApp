import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <UserList /> 
    </div>
  );
}

export default App;
