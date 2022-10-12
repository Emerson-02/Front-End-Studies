mysql -h localhost -u root -p
Er77545589

CREATE DATABASE sistemaDeCadastro;

SHOW DATABASES;

USE sistemadecadastro;

SHOW TABLES;

DESCRIBE usuarios;


CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Emerson Rodrigues",
    "email@teste.com",
    19
);

/////

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Taison",
    "email2@teste.com",
    33
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Cristiano Ronaldo",
    "email3@teste.com",
    36
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Messi",
    "email4@teste.com",
    34
);

SELECT * FROM usuarios WHERE idade = 19;

SELECT * FROM usuarios WHERE nome = "Messi";

SELECT * FROM usuarios WHERE idade >= 34;

DELETE FROM usuarios WHERE nome = "Messi";

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Taison";



















