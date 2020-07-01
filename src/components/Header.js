import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>This is the navigation bar</div>
      <Link to="/home">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/faoiehfgoieahfgioesfgo">Incorrect link</Link>
      <Link to="/pokemon">Pokemon</Link>
    </div>
  );
}
