import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AchievementCard from "./AchievementCard";
import c1 from "../../assets/cer-1.jpg";
import c2 from "../../assets/cer-2.jpg";
import c3 from "../../assets/cer-3.jpg";
import c4 from "../../assets/cer-4.jpg";
import c5 from "../../assets/cer-5.jpg";
import "./Achievement.css";
const Achievement = () => {
  const data = [
    {
      id: 1,
      image: c1,
      title: "Getting Started with Pyhton",
      description: [
        "An online non-credit course",
        "Authorized by University of Michigan",
        "Offered through Coursera",
        "On May 7 2020",
      ],
    },
    {
      id: 2,
      image: c5,
      title: "Pyhton Programming",
      description: [
        "From Basics to Advanced Level",
        "Instructors EdYoda Digital University, Dipesh Sharma",
        "Offered through Udemy",
        "On July 18 2021",
      ],
    },
    {
      id: 3,
      image: c3,
      title: "Java Programming",
      description: [
        "Certificate of Completion",
        "A free online course",
        "Provided by Great Learning Academy",
        "On March 2022",
      ],
    },
    {
      id: 4,
      image: c2,
      title: "Python Data Structures",
      description: [
        "An online non-credit course",
        "Authorized by University of Michigan",
        "Offered through Coursera",
        "On October 2 2020",
      ],
    },
    {
      id: 5,
      image: c4,
      title: "Web Development",
      description: [
        "Online Training on Web Development",
        "Learn to Build a Real Time Website like StackOverflow - MERN Stack",
        "Provided by NullClass",
        "On November 14 2022",
      ],
    },
  ];
  const settings = {
    className: "course-carousel",
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  const divStyle = {
    boxSizing: "border-box",
    padding: "0px 50px",
  };
  return (
    <section id="achievement">
      <h5>What I achieved</h5>
      <h2>Achievements</h2>
      <div style={divStyle}>
        <Slider {...settings}>
          {data.map((props) => (
            <AchievementCard
              key={props.id}
              image={props.image}
              title={props.title}
              description={props.description}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievement;
