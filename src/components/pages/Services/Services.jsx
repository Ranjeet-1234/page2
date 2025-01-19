import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Services = ({planet}) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title= {planet}
      />

      {/* Services Card  */}
      <div>
        <ServicesBox planet={planet}/>
      </div>
    </div>
  );
};

export default Services;
