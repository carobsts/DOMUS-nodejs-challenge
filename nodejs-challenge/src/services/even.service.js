const isEven = n => {
    return ((n >> 1) << 1) === n;
};

module.exports = { isEven };