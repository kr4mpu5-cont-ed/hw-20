import React from "react";
import Nav from './Nav';

export default function Header() {
  return (
    <header className='header'>

      <div class="text-center">
        <span class="pull-left">
          <span className='headerTitle'>nelan<b>Schwartz</b></span>
        </span>
        <span class="pull-right">
          <Nav />
        </span>
      </div>

    </header>
  );
}
