import React, { useState } from 'react';
import './App.css';
import ServiceList from './components/ServiceList';  // Import ServiceList component
import ServiceForm from './components/ServiceForm';  // Import ServiceForm component

function App() {
  const [services, setServices] = useState([]);  // State for list of services
  const [editingService, setEditingService] = useState(null);  // State for editing a service

  // Function to add a new service
  const addService = (service) => {
    setServices([...services, service]);
  };

  // Function to update an existing service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null);  // Reset the editing state after update
  };

  // Function to delete a service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Function to set the service to be edited
  const editService = (service) => {
    setEditingService(service);
  };

  return (
    <div className="App container">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editingService={editingService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        editService={editService}
      />
    </div>
  );
}

export default App;
