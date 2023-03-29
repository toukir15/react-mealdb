import React from "react";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      <div className="bg-green-600 h-16 flex items-center text-white">
        <Header />
      </div>
      <div className="w-4/5 mx-auto">
        <Cart />
      </div>
    </div>
  );
};

export default App;
