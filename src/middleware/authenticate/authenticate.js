const authenticate = (req, res, next) => {
    const userId = req.header('userId');

    if(Number.parseInt(userId) !== 1 ){
        return res.sendStatus(403);
    }

    next();
}

export { authenticate };
