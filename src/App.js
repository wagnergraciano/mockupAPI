import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import './assets/dashboard.scss';

import Main from './wizard/main'
import Login from './login/login';
import Navbar from './userInterface/navbar';
import Sidebar from './userInterface/sidebar';

library.add(fab, faLock , faUser)

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
