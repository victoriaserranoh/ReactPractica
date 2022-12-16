import React, {useState} from "react";

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState ("");

    const onInputChanged = (e) => {
        setInputValue();
    };

    const onSubmit = (e) => {
        e.preventDeFault();
        console.log(inputValue);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={inputValue} onChange={onInputChanged} />
            </form>
        </div>
    );
};