CREATE TABLE IF NOT EXISTS warehouses (
    `list_id` INT,
    `list_name` VARCHAR(11),
    `list_location_lat` NUMERIC(7, 5),
    `list_location_long` NUMERIC(8, 5),
    `list_cars_location` VARCHAR(9),
    `list_cars_vehicles_id` INT,
    `list_cars_vehicles_make` VARCHAR(13),
    `list_cars_vehicles_model` VARCHAR(19),
    `list_cars_vehicles_year_model` INT,
    `list_cars_vehicles_price` NUMERIC(7, 2),
    `list_cars_vehicles_licensed` VARCHAR(5),
    `list_cars_vehicles_date_added` DATETIME
);
INSERT INTO warehouses VALUES
    (1,'Warehouse A',47.13111,-61.54801,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (1,'Warehouse A',NULL,NULL,'West wing',1,'Volkswagen','Jetta III',1995,12947.52,'True','2018-09-18 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',2,'Chevrolet','Corvette',2004,20019.64,'True','2018-01-27 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',3,'Ford','Expedition EL',2008,27323.42,'False','2018-07-03 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',4,'Infiniti','FX',2010,8541.62,'True','2018-03-23 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',5,'GMC','Safari',1998,14772.5,'False','2018-07-04 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',6,'Plymouth','Colt Vista',1994,6642.45,'True','2018-07-11 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',7,'Cadillac','Escalade ESV',2008,24925.75,'False','2018-01-29 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',8,'Mitsubishi','Pajero',2002,28619.45,'False','2018-06-12 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',9,'Infiniti','Q',1995,6103.4,'False','2017-11-13 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',10,'Ford','Mustang',1993,18992.7,'False','2018-01-29 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',11,'Chevrolet','G-Series 1500',1997,23362.41,'False','2018-07-30 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',12,'Cadillac','DeVille',1993,18371.53,'False','2018-01-24 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',13,'Acura','NSX',2001,23175.76,'False','2018-03-28 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',14,'Ford','Econoline E250',1994,26605.54,'True','2018-05-13 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',15,'Lexus','GX',2005,27395.26,'False','2017-11-12 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',16,'Dodge','Ram Van 3500',1999,6244.51,'True','2018-09-28 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',17,'Dodge','Caravan',1995,16145.27,'False','2017-11-25 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',18,'Dodge','Dynasty',1992,15103.84,'True','2018-08-12 00:00:00'),
    (1,'Warehouse A',NULL,NULL,'West wing',19,'Dodge','Ram 1500',2004,9977.65,'True','2018-01-18 00:00:00'),
    (2,'Warehouse B',15.95386,7.06246,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (2,'Warehouse B',NULL,NULL,'East wing',20,'Maserati','Coupe',2005,19957.71,'False','2017-11-14 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',21,'Isuzu','Rodeo',1998,6303.99,'False','2017-12-03 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',22,'Infiniti','I',2002,6910.16,'False','2017-10-15 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',23,'Nissan','Altima',1994,8252.66,'False','2018-08-12 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',24,'Toyota','Corolla',2009,23732.11,'False','2018-02-13 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',25,'Acura','MDX',2011,8487.19,'False','2018-04-18 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',26,'BMW','7 Series',1998,29069.52,'False','2017-10-29 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',27,'Nissan','Maxima',2004,11187.68,'False','2018-07-16 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',28,'Audi','A8',1999,16047.9,'False','2017-12-05 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',29,'Nissan','Murano',2005,25859.78,'False','2018-06-06 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',30,'Acura','RL',2010,13232.13,'True','2017-12-16 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',31,'Mitsubishi','Chariot',1987,15665.23,'False','2018-02-21 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',32,'GMC','3500 Club Coupe',1992,18129.37,'True','2018-09-23 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',33,'Dodge','Dakota',2009,14479.37,'False','2017-12-12 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',34,'Mercury','Grand Marquis',1996,20614.72,'False','2018-05-26 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',35,'Kia','Sportage',2001,27106.47,'False','2018-03-14 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',36,'Chevrolet','Blazer',1994,14835.48,'False','2017-11-10 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',37,'Mercedes-Benz','SL-Class',1994,27717.28,'False','2018-08-17 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',38,'Honda','Civic Si',2003,18569.86,'True','2018-09-12 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',39,'Mercedes-Benz','CL-Class',2002,23494.78,'True','2018-05-24 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',40,'Volkswagen','Jetta',2006,25469.49,'False','2018-04-23 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',41,'Pontiac','Grand Prix',1975,11600.74,'True','2018-01-14 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',42,'Infiniti','FX',2012,22000.62,'True','2018-06-09 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',43,'Jaguar','XK',2006,10260.79,'True','2018-09-28 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',44,'Cadillac','STS',2007,13740.2,'False','2018-02-25 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',45,'Pontiac','Sunfire',1997,28489.1,'False','2017-12-05 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',46,'Cadillac','SRX',2004,26750.38,'True','2018-08-07 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',47,'Land Rover','Freelander',2004,21770.59,'False','2018-09-01 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',48,'Suzuki','Forenza',2005,28834.26,'False','2018-05-09 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',49,'Saab','9-7X',2005,25975.68,'False','2018-06-07 00:00:00'),
    (2,'Warehouse B',NULL,NULL,'East wing',50,'Ford','Fusion',2012,28091.96,'False','2018-07-15 00:00:00'),
    (3,'Warehouse C',39.12788,-2.71398,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (3,'Warehouse C',NULL,NULL,'Suid wing',51,'Cadillac','Escalade',2005,7429.18,'True','2018-09-26 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',52,'Porsche','Cayenne',2011,17066.31,'True','2017-10-19 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',53,'Mercedes-Benz','SL-Class',2005,14066.06,'False','2018-08-08 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',54,'Mitsubishi','RVR',1995,22560.18,'False','2018-05-25 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',55,'Volvo','850',1995,25762.08,'True','2017-10-03 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',56,'Honda','del Sol',1994,18840.96,'True','2017-11-25 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',57,'Infiniti','Q',1996,28773.14,'True','2018-08-09 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',58,'Mercedes-Benz','500E',1992,17141.08,'True','2018-08-13 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',59,'GMC','Envoy XL',2002,18983.52,'True','2018-03-14 00:00:00'),
    (3,'Warehouse C',NULL,NULL,'Suid wing',60,'Volkswagen','Touareg 2',2008,15611.22,'True','2018-02-22 00:00:00'),
    (4,'Warehouse D',-70.84354,132.22345,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (4,'Warehouse D',NULL,NULL,'Suid wing',61,'Saab','900',1987,8771,'False','2017-12-01 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',62,'Mazda','B-Series',1998,23407.59,'False','2018-03-01 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',63,'GMC','Sierra 3500',2012,5869.23,'True','2018-04-27 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',64,'Chevrolet','Corvette',1964,16630.67,'True','2018-05-31 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',65,'Toyota','Tacoma',1997,11597.18,'False','2018-03-30 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',66,'GMC','Sonoma',2004,18248.21,'False','2018-03-09 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',67,'Bugatti','Veyron',2009,8051.64,'False','2018-01-10 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',68,'Dodge','Ram 1500 Club',1996,14008.3,'False','2018-05-01 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',69,'Land Rover','Discovery Series II',2001,18620.19,'False','2018-03-03 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',70,'Volvo','960',1993,7316.93,'True','2018-02-15 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',71,'Chrysler','LHS',2001,29444.71,'False','2017-10-25 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',72,'Porsche','944',1984,7396.95,'True','2017-10-26 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',73,'Subaru','Legacy',2010,24491.8,'False','2017-12-26 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',74,'Volvo','XC90',2003,29009.65,'True','2018-04-24 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',75,'Buick','Skyhawk',1985,10567.27,'False','2018-03-21 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',76,'GMC','Envoy XUV',2004,20997.71,'True','2018-03-27 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',77,'Volvo','S60',2009,28614.95,'False','2018-07-25 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',78,'Pontiac','Montana',2000,11221.14,'False','2018-01-04 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',79,'Lexus','RX',2002,23194.01,'False','2018-05-02 00:00:00'),
    (4,'Warehouse D',NULL,NULL,'Suid wing',80,'Lexus','RX',2000,17805.45,'False','2018-09-11 00:00:00');
