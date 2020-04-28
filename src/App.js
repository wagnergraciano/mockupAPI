import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import './assets/dashboard.scss';

import Routes from './login/routes';

library.add(fab, faLock , faUser)

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
