import React from "react";

function useLocalStorage(itemName, initialState){
  const [item, setItem] = React.useState(initialState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
    
        // Is localStorageTodos empty? if it is: save in the variable an empty array and set an initial state as an Item in Local Storage, but if not: save in the variable the localStorageTodos parsed.
  
        let parsedItem; 
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialState));
          parsedItem = initialState;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);
  
  
  // function to save the changes in both our state and the local storage
  const saveItem = (item) => {
    setItem(item);
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  return{item, saveItem, loading, error};
}

export {useLocalStorage}