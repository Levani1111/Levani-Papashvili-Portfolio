/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Headre from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Headre />
       <div className='content font-mont'>
            {props.children}
        </div>

        <Footer/>
    </div>
  );
}

export default Layout;