import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim())
        setInputValue('')
    };

    return (
        <form onSubmit={ (e)=> onSubmit(e)}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar gif"
                onChange={onInputChange}
            />
        </form>
    );
};

export default AddCategory; 
