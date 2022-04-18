import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container" id="services">
      <h3 className="text-center text-info my-4">Helps You Can Get From Me</h3>
      <div className="services-container row row-cols-lg-3 gy-4">
        {/* services 3 cols for larger devices and 1 for small  */}
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
