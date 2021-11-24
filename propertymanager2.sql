USE propertymanager;

CREATE TABLE `owner`(
	owner_id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    username VARCHAR(20) NOT NULL,
    pwd VARCHAR(20) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    email VARCHAR(25) NOT NULL,
    PRIMARY KEY (owner_id)
);
CREATE TABLE apartment(
	apt_id INT AUTO_INCREMENT NOT NULL,
    address VARCHAR(50) NOT NULL,
    vacancy BIT(1) NOT NULL, /*indicates that apartment is available*/
    PRIMARY KEY (apt_id),
    FOREIGN KEY (apt_id) REFERENCES `owner`(owner_id)
);

CREATE TABLE tenant(
	tenant_id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(25),
    lastname VARCHAR(25),
    username VARCHAR(20),
    pwd VARCHAR(20),
    email VARCHAR(25),
    phonenumber VARCHAR(10),
    PRIMARY KEY (tenant_id),
    FOREIGN KEY (tenant_id) REFERENCES apartment(apt_id)
);

CREATE TABLE payment(
	pay_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    creditcard INT NOT NULL,
    cardexp INT NOT NULL,
    accepted BIT(1) /*indicates that credit payment has been accepted*/
);

SELECT * FROM tenant;
