export const addToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
};

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(''))
};