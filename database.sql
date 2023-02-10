CREATE DATABASE api_hands_on_3;
USE api_hands_on_3;
CREATE TABLE psicologos(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	psi_name VARCHAR(255) NOT NULL,
	psi_email VARCHAR(150) NOT NULL UNIQUE,
	psi_senha VARCHAR(255) NOT NULL,
	psi_apresentacao VARCHAR(255) NOT NULL
);

CREATE TABLE pacientes(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pac_name VARCHAR(255) NOT NULL,
	pac_email VARCHAR(150) NOT NULL UNIQUE,
	pac_nascimento DATE NOT NULL
);

CREATE TABLE atendimentos(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	paciente_id INTEGER NOT NULL,
	CONSTRAINT atendimentos_pacientes FOREIGN KEY
		(paciente_id) REFERENCES pacientes(id),
	psicologo_id INTEGER NOT NULL,
	CONSTRAINT atendimentos_psicologos FOREIGN KEY
		(psicologo_id) REFERENCES psicologos(id),
	data_att DATE NOT NULL,
	obs_att VARCHAR(255) NOT NULL
);