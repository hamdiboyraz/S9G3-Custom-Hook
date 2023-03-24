import React from "react";

const Navbar = ({ geceModu, handleChange }) => {
  const toggleMode = (e) => {
    // e.preventDefault();
    handleChange();
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div className={geceModu ? "toggle toggled" : "toggle"} />
      </div>
    </nav>
  );
};

export default Navbar;
