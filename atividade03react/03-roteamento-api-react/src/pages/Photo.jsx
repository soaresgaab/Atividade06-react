import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhotoDetails } from "../api";
import ImageInfo from "../components/imageInfo.jsx";
import BackButton from "../components/button.jsx";

const Photo = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const data = await getPhotoDetails(id);
        setPhoto(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da imagem:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  if (!photo) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes da Foto</h1>
      <ImageInfo 
        url={photo.download_url} 
        author={photo.author} 
        width={400} 
        height={"auto"} 
      />
      <BackButton destination="/" />
    </div>
  );
};

export default Photo;
