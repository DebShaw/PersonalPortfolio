import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkshopCard from "./WorkshopCard";
import W1 from "../../assets/kgpw.jpg";
import W2 from "../../assets/Debyansh Shaw.jpg";
import W3 from "../../assets/jsw.jpg";
import "./Workshop.css";
const Workshop = () => {
  const data = [
    {
      id: 1,
      avatar: W1,
      name: "Artificial Intelligence With M.L.",
      review:
        "This Certificate was awarded to me for participating in this workshop, conducted by Kyrion Technologies Private Limited on 28th and 29th September 2019, at Indian Institute of Technology, Kharagpur",
    },
    {
      id: 2,
      avatar: W2,
      name: "Bitmasking Quiz and Webinar",
      review:
        "This certificate was awarded to me for actively participating in this webinar and submitting quiz problems, by Mr. Mohit Uniyal and Mr. Prateek Narang, Programming Instructors and Creators, Coding Minutes",
    },
    {
      id: 3,
      avatar: W3,
      name: "2 Days Live Workshop On JavaScript",
      review:
        "This Certificate was bestowed upon me for the exceptional performance in the successful completion of an 8 hours of Workshop under the mentorship of Mr. Vimal Daga, on 12th & 13th June, 2021",
    },
  ];
  const settings = {
    className: "workshop-carousel",
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
    <section id="workshop">
      <h5>I have done</h5>
      <h2>Workshops</h2>
      <div style={divStyle}>
        <Slider {...settings}>
          {data.map((props) => (
            <WorkshopCard
              key={props.id}
              avatar={props.avatar}
              name={props.name}
              review={props.review}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Workshop;
