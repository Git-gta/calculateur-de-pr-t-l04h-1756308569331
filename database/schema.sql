CREATE TABLE Projects (
    project_id INT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    category VARCHAR(50),
    target_audience VARCHAR(100),
    logo_prompt TEXT,
    color_scheme VARCHAR(50)
);

CREATE TABLE Features (
    feature_id INT PRIMARY KEY,
    feature_name VARCHAR(50)
);

CREATE TABLE TechStack (
    tech_id INT PRIMARY KEY,
    tech_name VARCHAR(50)
);

CREATE TABLE Project_Features (
    project_id INT,
    feature_id INT,
    FOREIGN KEY (project_id) REFERENCES Projects(project_id),
    FOREIGN KEY (feature_id) REFERENCES Features(feature_id)
);

CREATE TABLE Project_TechStack (
    project_id INT,
    tech_id INT,
    FOREIGN KEY (project_id) REFERENCES Projects(project_id),
    FOREIGN KEY (tech_id) REFERENCES TechStack(tech_id)
);

INSERT INTO Projects (project_id, name, description, category, target_audience, logo_prompt, color_scheme)
VALUES (1, 'Calculateur de Prêt_l04h', 'Génération de Calculateur de Prêt: Calculez vos mensualités de prêt immobilier ou auto avec taux, durée et montant', 'Outils financiers', 'Particuliers, acheteurs immobiliers, emprunteurs', 'Représentation graphique d'une calculatrice et d'un prêt immobilier ou automobile', '#1E90FF,#00BFFF');

INSERT INTO Features (feature_id, feature_name)
VALUES (1, 'Calcul des mensualités de prêt'),
       (2, 'Comparaison de différents scénarios de prêt'),
       (3, 'Simulation de remboursement');

INSERT INTO TechStack (tech_id, tech_name)
VALUES (1, 'React'),
       (2, 'Node.js'),
       (3, 'PostgreSQL');

INSERT INTO Project_Features (project_id, feature_id)
VALUES (1, 1),
       (1, 2),
       (1, 3);

INSERT INTO Project_TechStack (project_id, tech_id)
VALUES (1, 1),
       (1, 2),
       (1, 3);