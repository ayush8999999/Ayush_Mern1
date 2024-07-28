import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://i.pinimg.com/736x/27/f8/3a/27f83a1a4952e167b728d00e2a3f0e30.jpg',
    'https://static.toiimg.com/photo/80452572.cms',
    'https://stat.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350_468x263.jpg',
    'https://b1944490.smushcdn.com/1944490/wp-content/uploads/sites/20/2020/03/BMW_F900XR_static_004-1024x683.jpg?lossy=2&strip=1&webp=1',
    'https://hips.hearstapps.com/hmg-prod/images/2021-indian-scout-bobber-sixty-in-titanium-metallic-1-1607970896.jpg?crop=0.670xw:1.00xh;0.0657xw,0&resize=640:*',
    'https://static.autox.com/uploads/2023/06/2024-Kawasaki-ZX-6R-2.jpg',
    'https://pbs.twimg.com/media/E3G7F9jVoAEwPsB.jpg:large',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/03_The_all-new_BMW_M_1000_RR_1200x768.jpeg?size=690:388'
    
  ];

  const cardStyle = {
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const imgStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  };

  return (
    <div className="container mt-5">
      <h1 style={{textAlign:"center"}}>Bike Gallery</h1>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image} className="card-img-top" alt={`Gallery Image ${index + 1}`} style={imgStyle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
