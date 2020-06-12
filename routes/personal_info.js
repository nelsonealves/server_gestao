module.exports = (express) => {
    
	express.get('/cnpj/:cnpj', (req, res) => {
        	express.controller.personal_info.get_cnpj(req, res);
	});

	express.get('/cep/:cep', (req, res) => {
		express.controller.personal_info.get_cep(req, res);	
	})

	express.get('/cpf/:cpf', (req, res) => {
		express.controller.personal_info.get_cpf(req, res);
	})
}
