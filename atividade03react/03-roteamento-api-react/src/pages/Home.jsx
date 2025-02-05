import React, { useEffect, useState } from 'react';
import ImageCard from '../components/imageCard.jsx';  
import '../styles/home.css';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {
        const first10 = data.slice(0, 21); 
        console.log("🔍 IDs carregados na galeria:", first10.map(img => img.id)); 
        setImages(first10);
      })
      .catch(error => console.error('Erro ao buscar imagens:', error));
  }, []);

  return (
    <div>
      <h1>Galeria de fotos</h1>
      <ul className="image-list">
        {images.map(img => (
          <ImageCard 
            key={img.id} 
            id={img.id} 
            url={img.download_url} 
            author={img.author} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
