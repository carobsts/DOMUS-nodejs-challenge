const validateUser = (req, res, next) => {
    const params = req.params;
    const user = params.n.split('user=')[1]; 
    let err = new Error(); 
    err.status = 404;
    err.message = 'Ruta no autorizada';
    if (!user) return next(err); 
    return next();
};

module.exports = { validateUser };