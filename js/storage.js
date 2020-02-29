function addToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}