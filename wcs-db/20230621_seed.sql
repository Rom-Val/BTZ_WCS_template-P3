INSERT INTO colors (name) VALUES ('Rouge'), ('Blanc');

INSERT INTO roles (name) VALUES ('Admin'), ('User');

INSERT INTO cepages (name)
VALUES ('Carbernet Sauvignon'), ('Merlot'), ('Pinot Noir'), ('Syrah'), ('Grenache'), ('Carignan'), ('Camay'), ('Malbec'), ('Mouvedre'), ('Ginsault'), ('Petit Verlot'), ('Carbernet Franc'), ('Tannat'), ('Sangiovese'), ('Tempranillo');

INSERT INTO operators (name)
VALUES (
        'Domaine de la Romanée-Conti'
    ), ('Château Margaux'), ('Domaine de la Vougeraie'), ('Domaine Zind-Humbrecht');

INSERT INTO terroirs (name)
VALUES ('Sud-Ouest'), ('Sud-Est'), ('Nord-Ouest'), ('Nord-Est');

INSERT INTO intensity (name)
VALUES ('Faible'), ('Moyen'), ('Fort');

INSERT INTO aromas (name)
VALUES ('Fruité'), ('Floral'), ('Epicé'), ('Boisé');

INSERT INTO flavors (name)
VALUES ('Acide'), ('Doux'), ('Tanique'), ('Equilibré'), ('Long en bouche');

INSERT INTO years (label)
VALUES 
('2012-01-01'),
('2013-01-01'),
('2014-01-01'),
('2015-01-01'),
('2016-01-01'),
('2017-01-01'),
('2018-01-01'),
('2019-01-01'),
('2020-01-01'),
('2021-01-01'),
('2022-01-01');

INSERT INTO bottle_per_cepage (cepage_id, terroir_id, color_id, year_id, operator_id, intensity_id, ref)
VALUES 
  (1, 1, 1, 1, 1, 1, 'REF12345'),
  (2, 2, 2, 2, 1, 2, 'REF23456'),
  (3, 3, 1, 3, 1, 3, 'REF34567'),
  (4, 4, 2, 4, 1, 1, 'REF45678'),
  (5, 1, 1, 5, 1, 2, 'REF56789'),
  (6, 2, 2, 6, 1, 3, 'REF67890'),
  (7, 3, 1, 7, 1, 1, 'REF78901'),
  (8, 4, 2, 8, 1, 2, 'REF89012'),
  (9, 1, 1, 9, 1, 3, 'REF90123'),
  (10, 2, 2, 10, 1, 1, 'REF01234'),
  (11, 3, 1, 1, 1, 2, 'REF12345'),
  (12, 4, 2, 2, 1, 3, 'REF23456'),
  (13, 1, 1, 3, 1, 1, 'REF34567'),
  (14, 2, 2, 4, 1, 2, 'REF45678'),
  (15, 3, 1, 5, 1, 3, 'REF56789'),
  (1, 4, 2, 6, 1, 1, 'REF67890'),
  (2, 1, 1, 7, 1, 2, 'REF78901'),
  (3, 2, 2, 8, 1, 3, 'REF89012'),
  (4, 3, 1, 9, 1, 1, 'REF90123'),
  (5, 4, 2, 10, 1, 2, 'REF01234');
