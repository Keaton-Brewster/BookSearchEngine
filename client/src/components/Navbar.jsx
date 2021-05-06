import React from "react";
import useGetBooks from "../utils/useGetBooks";

import { Navbar, Nav } from "rsuite";

function NavBar({ time }) {
  useGetBooks();

  return (
    <Navbar>
      <Navbar.Body>
        <Nav>
          <Nav.Item className="font-bolder" href="/">
            Google Books
          </Nav.Item>
          <Nav.Item href="/search">Search</Nav.Item>
          <Nav.Item href="/saved">Saved</Nav.Item>
          <Nav.Item>{time?.toLocaleString().substr(11, 8)}</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}

export default NavBar;
