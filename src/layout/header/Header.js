import React, {useState, useRef, useEffect,useCallback} from 'react';
import {addToLocalStorage, getLocalStorage} from "../../helpers/storage";
import Main from "../main/Main";
import "./style.css"

function Header() {
    const [randomNumber, setRandomNumber] = useState(getLocalStorage('data') || [])

    const ref = useRef()
    // The scroll listener
    const handleScroll = useCallback(() => {
        console.log("scrolling")
    }, [])

    // Attach the scroll listener to the div
    useEffect(() => {
        const div = ref.current
        div.addEventListener("scroll", handleScroll)
    }, [handleScroll])

    const handleSort = () => {
        setRandomNumber((prevState) => {
            const newValues = [...prevState.sort((a, b) => a - b)];

            addToLocalStorage('data', newValues);
            return newValues
        });
    }

    const handleDelete = (indexToDelete) => {
        setRandomNumber((prevState) => {
            const newValues = prevState.filter((item, index) => index !== indexToDelete);

            addToLocalStorage('data', newValues);
            return newValues
        });
    }

    const handleAdd = () => {
        setRandomNumber((prevState) => {
            const newValues = [
                ...prevState,
                Math.floor(Math.random() * 1000)
            ];

            addToLocalStorage('data', newValues);

            return newValues
        });
    }

    return (
        <header className="header">
            <div className="scrollableContainer" ref={ref}>
            <button onClick={handleAdd} className="onAdd">Add Card</button>
            <button onClick={handleSort} className="onSort">Sort Cards</button>
            <Main randomNumbers={randomNumber} onDelete={handleDelete} />
            </div>

        </header>
    );
}

export default Header;
