import React from 'react';

import Main from './wizard/main'
import Login from './login/login';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLock , faUser)

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
