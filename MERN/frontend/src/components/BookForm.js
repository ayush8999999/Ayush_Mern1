import React, { useState } from 'react';

const BikeBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    address: '',
    contactNumber: '',
    bikeModel: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to save formData to backend or handle submission
    console.log('Form Data:', formData);
    // Example: Call a function to save data to backend
    // saveFormData(formData);
  };

  return (
    <div className="container mt-5">
      <h1>Book a Bike</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <select
            className="form-select"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            <option value="MUMBAI">MUMBAI</option>
            <option value="DELHI">DELHI</option>
            <option value="CHENNAI">CHENNAI</option>
            <option value="BANGLORE">BANGLORE</option>
            <option value="KOLKATA">KOLKATA</option>
            <option value="HYDERABAD">HYDERABAD</option>
            <option value="BHOPAL">BHOPAL</option>
            <option value="AHMEDABAD">AHMEDABAD</option>
            <option value="PUNE">PUNE</option>
            <option value="ASSAM">ASSAM</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bikeModel" className="form-label">Bike Model</label>
          <select
            className="form-select"
            id="bikeModel"
            name="bikeModel"
            value={formData.bikeModel}
            onChange={handleChange}
            required
          >
            <option value="">Select Bike Model</option>
            <option value="Yamaha MT-15">Yamaha MT-15</option>
            <option value="Royal Enfield Classic 350">Royal Enfield Classic 350</option>
            <option value="Bajaj Pulsar NS200">Bajaj Pulsar NS200</option>
            <option value="KTM Duke 390">KTM Duke 390</option>
            <option value="Honda CBR250R">Honda CBR250R</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Book</button>
      </form>
    </div>
  );
};

export default BikeBookingForm;
