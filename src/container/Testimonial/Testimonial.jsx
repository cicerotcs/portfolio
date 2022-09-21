import React, { useState, useEffect } from "react";

import { client, urlFor } from "../../client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { NavigationDots } from "../../components";

import "./Testimonial.scss";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    try {
      client.fetch(query).then((data) => {
        setTestimonials(data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const rightcurrentIndex = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const leftcurrentIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="testimonials">
      <div className="testimonials flex-center padding-main">
        <NavigationDots active="testimonials" />
        <h2 className="head-text">Testimonials</h2>
        <p className="p-text" style={{ textAlign: "center", marginTop: 15 }}>
          People I've worked with have said some nice things
        </p>
        <div className="testimonials__people flex-center">
          {testimonials !== undefined && (
            <>
              <img
                src={urlFor(testimonials[currentIndex].imgurl)}
                alt={testimonials[currentIndex].name}
              />
              <p>{testimonials[currentIndex].feedback}</p>
              <h3>{testimonials[currentIndex].name}</h3>
              <h4>{testimonials[currentIndex].company}</h4>
            </>
          )}
          <div className="carousel">
            <HiChevronLeft onClick={() => leftcurrentIndex()} />
            <HiChevronRight onClick={() => rightcurrentIndex()} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
