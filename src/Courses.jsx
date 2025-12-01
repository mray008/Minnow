import React from "react";
import "./Courses.css";
import mathImage from "./assets/math.jpg"; 
import englishImage from "./assets/english.png";
import scienceImage from "./assets/science.jpeg";

const coursesData = [
  {
    title: "Math",
    image: mathImage,
    description: "Explore algebra, geometry, calculus, and more. Build your problem-solving skills step by step.",
  },
  {
    title: "English",
    image: englishImage,
    description: "Improve reading, writing, and communication skills. Learn grammar, literature, and creative expression.",
  },
  {
    title: "Science",
    image: scienceImage,
    description: "Dive into biology, chemistry, physics, and environmental science. Learn through experiments and real-world examples.",
  },
];

export default function Courses() {
  return (
    <div className="courses-page">
      <h1 className="courses-title">Our Courses</h1>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <div key={index} className="course-card">
            {course.image && <img src={course.image} alt={course.title} className="course-image" />}
            <h2 className="course-header">{course.title}</h2>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
