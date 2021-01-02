import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface DropDProps {
  isOpen: boolean;
  toggle: () => void;
}

const Dropdown: FunctionComponent<DropDProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/menu" className="p-4">
        Menu
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/contact" className="p-4">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
