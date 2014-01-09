INSERT INTO deponenti
VALUES (
'TM123456', '1221181898381', 'Popescu', 'Victor', '1962-03-25', 'Timisoara', 'Florilor 4A ap 3', '056123321'
), (
'BV145456', '1112267568341', 'Pop', 'Mircea', '1954-07-15', 'Brasov', 'Piatra Craiului nr 8', '045123456'
);

INSERT INTO deponenti( nr_buletin, cnp, prenume, nume )
VALUES (
'TM832312', '1112282568441', 'Florin', 'Marasescu'
), (
'TM436613', '0090976761426', 'Ana', 'Tipatescu'
);

INSERT INTO deponenti
SET nume = 'Gerogescu',
prenume = 'Henrieta',
nr_buletin = 'GL654321',
cnp = '0111166163476',
oras = 'Galati';

SELECT *
FROM deponenti
LIMIT 0 , 30;

UPDATE deponenti SET nume = 'Predescu' WHERE nr_buletin = 'TM123456';

UPDATE deponenti SET telefon = concat( '7', right( telefon, length( telefon ) -1 ) );

SELECT *
FROM deponenti
LIMIT 0 , 30;

DELETE FROM deponenti WHERE oras = 'Galati';

DELETE FROM deponenti WHERE IsNull( telefon );

SELECT *
FROM deponenti
LIMIT 0 , 30;

INSERT INTO `deponenti`(`nr_buletin`, `cnp`, `nume`, `prenume`, `datan`, `oras`, `adresa`, `telefon`) VALUES ("12345678","1234567890123","Grigorescu","Florin","1999-12-12","Timisoara","Adresa","123456789");

INSERT INTO `deponenti`(`nr_buletin`, `cnp`, `nume`, `prenume`, `datan`, `oras`, `adresa`, `telefon`) VALUES ("12323678","1232561890123","Matei","Georgeta","1979-11-12","Timisoara","Adresaaaa","123453489");

INSERT INTO `deponenti`(`nr_buletin`, `cnp`, `nume`, `prenume`, `datan`, `oras`, `adresa`, `telefon`) VALUES ("11223678","1278561890123","Chivu","Mihai","1975-11-14","Deva","Adressaaa","127853489");

INSERT INTO `deponenti`(`nr_buletin`, `cnp`, `nume`, `prenume`, `datan`, `oras`, `adresa`, `telefon`) VALUES ("12327878","1232341890123","Huju","Gelu","1939-11-12","Deva","Adr","123459489");

INSERT INTO `deponenti`(`nr_buletin`, `cnp`, `nume`, `prenume`, `datan`, `oras`, `adresa`, `telefon`) VALUES ("12123678","1232561889123","Manea","Gina","1979-11-02","Deva","Adres","143453489");

INSERT INTO `conturi`(`nr_cont`, `nr_buletin`) VALUES ("123323","12345678");

INSERT INTO `conturi`(`nr_cont`, `nr_buletin`) VALUES ("122323","12345678");

INSERT INTO `conturi`(`nr_cont`, `nr_buletin`) VALUES ("888888","12323678");

INSERT INTO `conturi`(`nr_cont`, `nr_buletin`) VALUES ("999999","11223678");

INSERT INTO `operatii`(`nr_cont`, `suma`, `data`) VALUES ("888888","400000","2014-01-04");

UPDATE `conturi` SET `sold` = ( SELECT sum( suma )
FROM operatii
WHERE nr_cont = "888888" )
WHERE nr_cont = "888888";

DELETE FROM `deponenti` WHERE oras = "Deva" AND prenume LIKE "G%";
