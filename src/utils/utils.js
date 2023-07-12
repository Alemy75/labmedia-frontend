export const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(function () {
            func(...args);
        }, delay);
    };
};
