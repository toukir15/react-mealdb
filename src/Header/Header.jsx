import React from "react";

const Header = () => {
  return (
    <div className="w-4/5 mx-auto flex justify-between">
      <div>
        <h2 className="text-3xl font-semibold">MealDB</h2>
      </div>
      <div>
        <ul className="flex gap-6 cursor-pointer">
          <li>Home</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
