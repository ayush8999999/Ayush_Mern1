import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BikeMaintenancePage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">How to Maintain a Bike</h1>
      
      <div className="row mb-5">
        <div className="col-md-6">
          <img src="https://sarkarijob.co/wp-content/uploads/2024/02/Yamaha.webp" className="img-fluid" alt="Bike maintenance" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p>
            Regular bike maintenance is essential to ensure a smooth and safe ride. Start with checking the tire pressure frequently and keeping it at the recommended levels. Inspect the tires for any signs of wear or damage.
            Always lubricate the chain to prevent rust and ensure a smooth ride. Clean the bike regularly to remove dirt and grime that can affect its performance.
          </p>
        </div>
      </div>
      
      <div className="row mb-5">
        <div className="col-md-6 d-flex align-items-center order-md-2">
          <p>
            Keep an eye on the brakes and ensure they are functioning properly. Replace brake pads if they are worn out. Check the brake fluid levels and top up if necessary.
            Regularly inspect the cables for any signs of fraying or damage. Adjust the gear system to ensure smooth shifting and avoid any potential issues while riding.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img src="https://miro.medium.com/v2/resize:fit:1280/0*Z4aOHYSa-IljVHS3" className="img-fluid" alt="Bike brakes and gears" />
        </div>
      </div>
      
      <div className="row mb-5">
        <div className="col-md-6">
          <img src="https://static.autox.com/uploads/2023/01/Yamaha-FZ-X.jpg" className="img-fluid" alt="Bike engine" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p>
            Regularly change the oil to keep the engine running smoothly. Follow the manufacturer's recommendations for the type of oil and the frequency of oil changes.
            Check the coolant levels to prevent the engine from overheating. Inspect the battery and clean the terminals to ensure a good connection. 
            Lastly, ensure all lights and indicators are working properly for safe riding.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default BikeMaintenancePage;
