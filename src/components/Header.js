import React from "react";
import Nav from './Nav';

export default function Header() {
  return (
    <header className='header'>

      <div className="text-center">
        <span className="pull-left">
          <span className='headerTitle'>nelan<b>Schwartz</b></span>
        </span>
        <span className="pull-right">
          <Nav />
        </span>
      </div>

    </header>
  );
}
