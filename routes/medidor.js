module.exports = (express) => {
  
    express.post('/medidor', (req, res) => {
        console.log('medição')
        console.log(req.body)
        res.json({"ok": 'ok'})
    });
}