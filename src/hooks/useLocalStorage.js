import React from 'react'
import {useState} from 'react'

export default function useLocalStorage(key, initialValue) {

    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))
    const setValue = (value) => {

        //check if function
        const valueToStore = value instanceof Function ?
        value(localStorageValue) : value

        //Set to state
        setLocalStorageValue(value)

        //set to Local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))


    }

  return [localStorageValue, setValue]
}


function getLocalStorageValue(key, initialValue){
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}
