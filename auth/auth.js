const { Op } = require("sequelize");
const Auth = require('../model/Auth');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const enviroments = require('../config/environments');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const axios = require('axios')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'nelsonespindolalves@gmail.com',
        pass: 'pmb*9905'
    }
});

express.post('/register/user', async (req, res) => {
    const {
        name,
        email,
        tel,
        password
    } = req.body;

    try {
        const auth = await User.findOne({
            where: {
                email
            }
        });

        if (auth) {
            return res.status(401).json({
                error: 'EMAIL_ALREADY_EXISTS',
                auth
            });
        }

        const newAuth = await User.create({
            name,
            email,
            tel,
            confirmEmail: false,
            password: await bcrypt.hash(password, 10),
        })

        var mailOptions = {
            from: 'nelson@bluebill.com.br',
            to: email,
            subject: 'BlueBill | E-mail de confirmação',
            text: `Olá ${name}, muito obrigado por ter se cadastrado. Clique no link abaixo para confirmar seu e-mail.`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        newAuth.password = await undefined;
        return res.status(200).json(newAuth);

    } catch (err) {
        return res.status(500).json(err);
    }
});

express.get('/teste-celesc', async (req, res) => {
    const response = await axios.get('https://agenciaweb.celesc.com.br/AgenciaWeb/autenticar/loginCliente.do')
    
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        https://agenciaweb.celesc.com.br/AgenciaWeb/imprimirSegundaVia/imprimirSegundaVia.do?COD_UN_CONS=40099603&COD_CPU=01&NUM_SEQ_OPER=20217296921680&COD_SITU_FAT=N&HISTPAG=1&MES_REF=06/2021

      res.json({cookies: response.headers})
})


express.post('/register/integrator', async (req, res) => {
    const {
        name,
        email,
        tel,
        password
    } = req.body;

    try {
        const auth = await Auth.findOne({
            where: {
                email
            }
        });


        if (auth) {
            return res.status(401).json({
                error: 'EMAIL_ALREADY_EXISTS',
                auth
            });
        }

        const newAuth = await Auth.create({
            name,
            email,
            tel,
            confirmEmail: false,
            password: await bcrypt.hash(password, 10)
        })

        var mailOptions = {
            from: 'nelson@bluebill.com.br',
            to: email,
            subject: 'BlueBill | E-mail de confirmação',
            text: `Olá ${firstName}, muito obrigado por ter se cadastrado. Clique no link abaixo para confirmar seu e-mail.`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        newAuth.password = await undefined;
        return res.status(200).json(newAuth);

    } catch (err) {
        return res.status(500).json(err);
    }
});


express.post('/authenticate', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const auth = await Auth.findOne({
            where: {
                email
            }
        });

        const user = await User.findOne({
            where: {
                email
            }
        });
        
        if (!auth && !user) {
            return res.status(401).json({ error: 'USR_NOT_FOUND' });
        }

        if (auth) {
            if (!await bcrypt.compare(password, auth.password)) {
                return res.status(401).json({ error: 'INVALID_PASSWORD' });
            }
    
            auth.password = undefined;
    
            const token = jwt.sign({ idAuth: auth.idAuth }, enviroments.secret, {
                expiresIn: 86400
            })
            return res.status(200).json({ auth, token, page: 0 });
        }

        if (user) {
            if (!await bcrypt.compare(password, user.password)) {
                return res.status(401).json({ error: 'INVALID_PASSWORD' });
            }
    
            user.password = undefined;
    
            const token = jwt.sign({ idAuth: user.idUser }, enviroments.secret, {
                expiresIn: 86400
            })
            
            return res.status(200).json({ auth: user, token, page: 1 });
        }
        

    } catch (err) {
        return res.status(500).json(err);
    }

});

express.put('/confirmEmail', async (req, res) => {
    const {
        email
    } = req.params;


    try {
        const auth = await Auth.findOne({
            where: {
                email
            }
        });

        if (!auth) {
            return res.status(401).json({ error: 'USR_NOT_FOUND' });
        }
        if (!await bcrypt.compare(password, auth.password)) {
            return res.status(401).json({ error: 'INVALID_PASSWORD' });
        }

        const [numberOfAffectedRows, affectedRows] = await Auth.update(
            {
                status: status
            }, {
            where: {
                email: email
            }
        })
        return res.status(200).json({ numberOfAffectedRows, affectedRows })

    } catch (err) {
        return res.status(500).json(err);
    }

})