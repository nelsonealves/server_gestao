module.exports = (express) => {
  
    express.post('/register', (req, res) => {
        
        express.controller.auth.register(req, res);
    });
   
    express.post('/authenticate', (req, res) => {
        express.controller.auth.authenticate(req, res);
    });

    
}