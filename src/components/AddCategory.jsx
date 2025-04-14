import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input

  const onInputChange = ({ target }) => {
    setInputValue(target.value); // Actualiza el estado con lo que escribe el usuario
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    if (inputValue.length <= 1) return; // Si el valor es menor o igual a 1, no hace nada
     
    setInputValue(''); // Limpia el campo de entrada
   onNewCategory(inputValue.trim()); // Llama a la función onNewCategory con el valor del input
   
  };

  return (  // Maneja el evento de envío del formulario
    <form onSubmit={onSubmit}>                        
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange} // Actualiza el estado con el valor del input
      />
    </form>
  );
};
