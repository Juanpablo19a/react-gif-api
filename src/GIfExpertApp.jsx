
import React, {  useState } from 'react'
import { AddCategory ,GifGrid} from './components';
export const GIfExpertApp = () => {

const [ categories, setCategories] = useState(['One Punch']);


const onAddCategory = (newCategory) => {
// Agregar el nuevo valor al array de categorias

if (categories.includes(newCategory)) return; // Si la categoria ya existe, no hacer nada
  setCategories([newCategory,...categories]); 

}


  return (
    <>
<h1 className='text text-center'>Generador de Gif</h1>

  <AddCategory
    onNewCategory={(value) =>onAddCategory(value)} 
  />  
  
    
  {categories.map((category)=>( // 
    <GifGrid key={category} category={category}/> // Mapeo de categorias
    ))
  }
  


    </>
  )
}

