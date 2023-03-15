const getRecursiveFibonacciByIndex = (k) => {
    const input = k;
    const base_case = 2; 
    if (input < base_case) return input; 
    return getRecursiveFibonacciByIndex(input-2) + getRecursiveFibonacciByIndex(input-1);
};

const getButtomUpDynamicProgramming = (k) => {
    let fibonacci_value = [0, 1]; 
    const initial_index = 2;
    const input = k;
    for (let i = initial_index; i <= input; i++) {
        fibonacci_value[i] = fibonacci_value[i - 1] + fibonacci_value[i - 2]; 
    };
    return fibonacci_value[input]; 
};

const getTopDownDynamicProgramming = (k) => {
    const map = new Map(); 
    const base_case = 2;
    function dynamicProgramming(x) {
        if (x < base_case) return x;
        if (!map.has(x)) map.set(x, dynamicProgramming(x-2) + dynamicProgramming(x-1));
        return map.get(x)
    }; 
    return dynamicProgramming(k); 
};

module.exports = {
    getButtomUpDynamicProgramming,
    getRecursiveFibonacciByIndex,
    getTopDownDynamicProgramming
};