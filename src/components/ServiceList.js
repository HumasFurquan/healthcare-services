import React from 'react';

const ServiceList = ({ services, deleteService, editService }) => {
  return (
    <div className="service-list">
  <h2>Service List</h2>
  <ul>
    {services.map((service) => (
      <li className="service-item" key={service.id}>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>Price: ₹{service.price}</p>
        <button onClick={() => editService(service)}>Edit</button>
        <button onClick={() => deleteService(service.id)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
  );
};

export default ServiceList;
