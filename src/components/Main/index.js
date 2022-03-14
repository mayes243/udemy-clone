import React from "react";

const Main = () => {
  return (
    <div className="w-full h-96 mt-2 border-gray-100 relative">
      <img
        src="/assets/main.jpg"
        alt="me"
        className="h-full w-full object-cover bg-no-repeat bg-bottom"
      />
      <div className="absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px]">
        <h2 className="text-3xl font-bold mb-2">Hi guys welcome !</h2>
        <h3 className="text-xl">Look at this project !!</h3>
        <h3 className="text-xl">The goal is to learn without any stress !!!</h3>
      </div>
    </div>
  );
};

export default Main;
