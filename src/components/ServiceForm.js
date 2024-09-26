import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, updateService, editingService }) => {
  const [service, setService] = useState({ id: '', name: '', description: '', price: '' });

  // Use effect to populate form fields if editing a service
  useEffect(() => {
    if (editingService) {
      setService(editingService);  // Fill form with current service details
    } else {
      setService({ id: '', name: '', description: '', price: '' });  // Reset form
    }
  }, [editingService]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingService) {
      updateService(service);  // Update existing service
    } else {
      addService({ ...service, id: Date.now() });  // Add a new service with a unique ID
    }
    setService({ id: '', name: '', description: '', price: '' });  // Clear form after submission
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
  <h2>{editingService ? 'Edit Service' : 'Add New Service'}</h2>
  <input
    type="text"
    name="name"
    placeholder="Service Name"
    value={service.name}
    onChange={handleChange}
    required
  />
  <input
    type="text"
    name="description"
    placeholder="Description"
    value={service.description}
    onChange={handleChange}
    required
  />
  <input
    type="number"
    name="price"
    placeholder="Price"
    value={service.price}
    onChange={handleChange}
    required
  />
  <button type="submit">{editingService ? 'Update' : 'Add'} Service</button>
</form>
  );
};

export default ServiceForm;
