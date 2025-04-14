
 export const getGifs =  async(category) => {
    // Función asincrona para obtener los gifs de la API de Giphy
     const url=`https://api.giphy.com/v1/gifs/search?api_key=nmqeFdJRwwBWTaLwXqST3aBJmXzgQMvW&q=${category}&limit=10`;
    
    const resp= await fetch(url);
    const {data} = await resp.json(); // Desestructurando la respuesta para obtener solo el array de data
    
    const gits=data.map((img)=>({ // Mapeando el array de data para obtener solo lo que necesitamos
      
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url // Obteniendo la url de la imagen y tamaño medio 
      })) 
    
    
    return gits; // Retornando el array de gifs
    }
    