import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageInfo from '../components/imageInfo.jsx';
import BackButton from '../components/button.jsx';

const ImageDetails = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then(response => response.json())
      .then(data => setImage(data))
      .catch(error => console.error('Erro ao buscar detalhes da imagem:', error));
  }, [id]);

  if (!image) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes da Imagem</h1>
      <ImageInfo 
        url={image.download_url} 
        author={image.author} 
        width={image.width} 
        height={image.height} 
      />
      <BackButton destination="/" />
    </div>
  );
};

export default ImageDetails;
