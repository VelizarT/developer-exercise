console.log('App is running');

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Recommendations from './components/Recommendations';

ReactDOM.render(<Recommendations />, document.getElementById('app'));