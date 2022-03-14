import React from "react";
import Course from "../Course";
import data from "../../constant/data.json";
import { Excerpt } from "../../utils";

const Courses = () => {
  return (
    <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
      <h2 className="text-4xl font-bold">A broad selection of courses</h2>
      <h3 className="text-xl">
        Choose from 183,000 online video courses with new additions published
        every month
      </h3>
      <div className="text-xs lg:text-lg flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
        <h3>Python</h3>
        <h3>Excel</h3>
        <h3 className="hidden md:block">Web Development</h3>
        <h3 className="text-black">JavaScript</h3>
        <h3 className="hidden md:block">Data Science</h3>
        <h3 className="hidden md:block">AWS Certification</h3>
        <h3>Drawing</h3>
      </div>
      <div className="text-left w-full border border-gray-300 p-7">
        <h2 className="text-2xl mb-2 font-bold">
          Grow your software development skills with JavaScript
        </h2>
        <h3>
          {Excerpt(
            `JavaScript is a text-based computer programming language used to make
            dynamic web pages. A must-learn for aspiring web developers or
            programmers, JavaScript can be used for features like image carousels,
            displaying countdowns and timers, and playing media on a webpage. With
            JavaScript online classes, you can learn to build`,
            371
          )}
        </h3>
        <button className="border border-black font-bold text-sm p-3 mt-4 mb-8 hover:bg-[#F5F5F5]">
          Explore JavaScript
        </button>
        {/*  */}
        <div className="flex gap-4 flex-wrap lg:flex-nowrap mx-16">
          {data.map((course) => (
            <div className="w-60 h-60" key={course.id}>
              <Course {...{ course }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
