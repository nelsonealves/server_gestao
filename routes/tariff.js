module.exports = (express) => {
    express.get('/tariff/:idDealership/reactive', (req, res) => {
        express.controller.tariff.getReactiveConsum(req, res);
    });
}