
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {images,isLoadindg} = useFetchGifs(category); // Llamamos al custom hook
   console.log({ isLoadindg}); // Imprimimos el estado de las imágenes y la carga


  return (
    <>
      <h3>{category}</h3>
      {
        isLoadindg  && (<h2>Cargando...</h2>) // Si está cargando, mostramos un mensaje
        
      }

 
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image}/> // Mapeo de imágenes
        ))}
      </div>
    </>
  );
};
