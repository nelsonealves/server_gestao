const https = require('https');

function consultaCNPJ(cnpj) {
    // Limpa o CNPJ para conter somente numeros, removendo traços e pontos
    cnpj = cnpj.replace(/\D/g, '');

    // Consulta o CNPJ na ReceitaWS com 60 segundos de tempo limite
    return jsonp('https://www.receitaws.com.br/v1/cnpj/' + encodeURI(cnpj), 60000)
        .then((json) => {
            if (json['status'] === 'ERROR') {
                return Promise.reject(json['message']);
            } else {
                return Promise.resolve(json);
            }
        });
}

/**
 * Consulta um CEP
 */
function consultaCEP(cep) {
    // Limpa o CEP para conter somente numeros, removendo traços e pontos
    cep = cep.replace(/\D/g, '');

    // Como a API retorna 404 com CEPs com tamanhos inválidos
    // Iremos validar antes para não ter que esperar o tempo limite do JSONP
    if (cep.length !== 8) return Promise.reject('CEP inválido');

    // Consulta o CEP na ViaCEP com 30 segundos de tempo limite
    return jsonp('https://viacep.com.br/ws/' + encodeURI(cep) + '/json/', 30000)
        .then((json) => {
            if (json['erro'] === true) {
                return Promise.reject('CEP não encontrado');
            } else {
                return Promise.resolve(json);
            }
        });
}

function consultaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}



function jsonp(url, timeout) {
    return new Promise(function(resolve, reject) {
        // Cria uma solicitação HTTP
        const req = https.get(url, (res) => {
            // Se o status não for 2XX, retorna um erro
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(res.statusMessage);
            }

            let data = '';
            res.on('data', chunk => { data += chunk; });
            res.once('end', () => { resolve(JSON.parse(data)); });
        });

        req.once('error', e => { reject(e.message); });
        req.setTimeout(timeout);
    });
}

module.exports.get_cpf = (req, res) => {
	res.send(consultaCNPJ(req.params.cpf));
}

module.exports.get_cnpj = (req, res) => {
	consultaCNPJ(req.params.cnpj).then((err, value) => {
		if(err) res.send(err);
		res.json(value);
	})
}

module.exports.get_cep = (req, res) => {
	consultaCEP(req.params.cep).then((err, value) => {
		if(err) res.send(err);
		res.json(value);
	});	
}
