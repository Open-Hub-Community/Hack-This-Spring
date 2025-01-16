

const verifyAdmin=(req, res, next)=>{
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME ;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    const {adminId,password} = req.body;
    if(!adminId || !password ) return res.status(400).json({'message':'adminId and password are required...'});

    if (adminId === ADMIN_USERNAME && password===ADMIN_PASSWORD) {
        return next();
    } else {
        return res.status(401).send('Unauthorized: Invalid credentials.');
    }
    
    
}
export default verifyAdmin;