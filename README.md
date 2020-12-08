# server_gestao
No primeiro clone ao arquivo, crie no diretório raiz do servidor um arquivo "config.json" com a seguinte estrutura:

{
    "db": {
        "host": "localhost", // Host do banco de dados
        "port": 3306,		// Porta
        "username": "root",	// Usuário do mysql
        "password": "root",	//Senha do mysql
        "database": "gestaoFatura" // Nome da base de dados dentro do MySql
    },
    "express": {
        "port": 8081	// Porta do servidor web
    },
    "src": {
        "pwd": "/home/nelson/Documentos" // Caso queira facilitar algum desenvolvimento usando o diretório raiz, adicione-o aqui 
    }
}

