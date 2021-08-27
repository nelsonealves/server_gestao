module.exports = (express) => {
    express.get('/tariff/:idDealership/reactive', (req, res) => {
        express.controller.tariff.getReactiveConsum(req, res);
    });

    express.get('/tariff/:idConsumerUnit/consumerUnit', (req, res) => {
        express.controller.tariff.getTariffByConsumerUnit(req, res);
    });
}