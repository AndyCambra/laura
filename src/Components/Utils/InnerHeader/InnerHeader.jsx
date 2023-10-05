import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const InnerHeader = () => {
  const location = useLocation();
  return (
    <div className="inner-header">
      <Link
        to="/xs"
        className={location.pathname === "/xs" ? "active" : "inner-items"}
      >
        XS
      </Link>
      <Link
        to="/s"
        className={location.pathname === "/s" ? "active" : "inner-items"}
      >
        S
      </Link>
      <Link
        to="/m"
        className={location.pathname === "/m" ? "active" : "inner-items"}
      >
        M
      </Link>
      <Link
        to="/l"
        className={location.pathname === "/l" ? "active" : "inner-items"}
      >
        L
      </Link>
      <Link
        to="/xl"
        className={location.pathname === "/xl" ? "active" : "inner-items"}
      >
        XL
      </Link>
    </div>
  );
};

export default InnerHeader;
