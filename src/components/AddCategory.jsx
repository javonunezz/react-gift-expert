import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const valueTrim = inputValue.trim();
        if( valueTrim.length < 1) return;
        // setCategories( categories => [ ...categories, inputValue ])
        onNewCategory( valueTrim );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs" 
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}