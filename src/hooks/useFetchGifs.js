import { useEffect, useState } from "react";
import { getGifs } from './../helpers/getGifs';

export const useFetchGifs = (category) => {

 
  const [images, setImages] = useState([]); // Estado inicial como un arreglo vacío
  const [isLoading, setIsLoading] = useState(true); // Estado de carga inicial como verdadero

  const getImagenes = async () => {
    const newImages = await getGifs(category); // Llamamos a la función getGifs
    setImages(newImages); // Actualizamos el estado con las nuevas imágenes
    setIsLoading(false); // Cambiamos el estado de carga a falso
  };

  useEffect(() => {
    getImagenes(); // Llamamos a la función getImagenes al montar el componente
  }, []); // El array vacío indica que el efecto solo se ejecuta una vez



 
    return{
        images,
        isLoading
    }
}
