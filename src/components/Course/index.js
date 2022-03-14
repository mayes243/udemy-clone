import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const Course = ({ course }) => {
  return (
    <div className="flex flex-col items-start space-y-[1px]">
      <img src={course.imageName} alt={course.title} className="h-32 w-full" />
      <h2 className="font-bold text-md pt-1">{course.title}</h2>
      <h2 className="text-xs text-gray-700">{course.userName}</h2>
      <div className="flex space-x-1">
        <h3 className="text-orange-800 font-bold text-sm">{course.votes}</h3>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-orange-400" />
          <StarIcon className="h-4 w-4 text-orange-400" />
          <StarIcon className="h-4 w-4 text-orange-400" />
          <StarIcon className="h-4 w-4 text-orange-400" />
          <StarIcon className="h-4 w-4 text-orange-400" />
        </div>
        <h3 className="text-xs">({course.students})</h3>
      </div>
      <div className="flex space-x-4 items-center">
        <h3 className="text-black font-bold">{course.price}</h3>
        <h3 className="text-gray-800 text-sm line-through">
          {course.oldPrice}
        </h3>
      </div>
    </div>
  );
};

export default Course;
