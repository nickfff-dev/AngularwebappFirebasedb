USE vikingproperty2;

CREATE TABLE `owner`(
	owner_id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    email VARCHAR(25) NOT NULL,
    username VARCHAR(25) NOT NULL,
    pwd VARCHAR(15) NOT NULL,
    `admin` BIT(1) NOT NULL, /*1 denotes that property owner is an admin.*/
    PRIMARY KEY (owner_id)
);

CREATE TABLE apartment(
	apt_id INT AUTO_INCREMENT NOT NULL,
    address VARCHAR(50),
    apartmentnum INT,
    vacancy BIT(1), /*indicates that the apartment is vacant*/
    owner_id INT NOT NULL,
    PRIMARY KEY (apt_id),
    FOREIGN KEY (owner_id) REFERENCES `owner`(owner_id)
);

CREATE TABLE tenant(
	tenant_id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    username VARCHAR(25) NOT NULL,
    pwd VARCHAR(15) NOT NULL,
    email VARCHAR(25) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    apt_id INT NOT NULL,
    PRIMARY KEY (tenant_id),
    FOREIGN KEY (apt_id) REFERENCES apartment(apt_id)
);

CREATE TABLE payment(
	pay_id INT AUTO_INCREMENT,
    creditcard LONG,
    cardexp INT,
    accepted BIT(1), /*indicates that payment has been accepted*/
    date_paid DATETIME NOT NULL,
    PRIMARY KEY (pay_id), 
    FOREIGN KEY (pay_id) REFERENCES tenant(tenant_id)/*for when a renter wants to update credit cards*/
);

SET FOREIGN_KEY_CHECK = 0;



