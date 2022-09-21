import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item) => (
          <a
            href={`#${item}`}
            key={item}
            className="navigation__dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
