let key = prompt("Enter a key for local storage:");
let value = prompt("Enter a value for local storage:");
const getItem = document.getElementById("value");

localStorage.setItem(key, value);

let storedvalue = localStorage.getItem(key);


getItem.innerHTML = storedvalue;



console.log(`Stored ${key} in local storage with value: ${value}`);




//here we learn how to store data in local storage
//localStorage.setItem("key", "value") stores a key-value pair in local storage
//localStorage.getItem("key") retrieves the value associated with the key from local storage
//localStorage.removeItem("key") removes the key-value pair from local storage
//localStorage.clear() clears all key-value pairs from local storage
//localStorage is a web storage API that allows you to store data in the browser
//localStorage is persistent, meaning data will remain even after the browser is closed
//localStorage is limited to about 5-10MB depending on the browser
//localStorage is synchronous, meaning it blocks the main thread while accessing data