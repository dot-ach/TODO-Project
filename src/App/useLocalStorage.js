import React from "react";

function useLocalStorage(itemName, initialState){
  
  const localStorageItem = localStorage.getItem(itemName);
  // Is localStorageTodos empty? if it is: save in the variable an empty array and set an initial state as an Item in Local Storage, but if not: save in the variable the localStorageTodos parsed.
  let parsedItem = !localStorageItem ? [] &&  localStorage.setItem(itemName, JSON.stringify(initialState)) : JSON.parse(localStorageItem);
  
  const [item, setItem] = React.useState(parsedItem);
  // function to save the changes in both our state and the local storage
  const saveItem = (item) => {
    setItem(item);
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  return [item, saveItem];
}

export {useLocalStorage}