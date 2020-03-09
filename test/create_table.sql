CREATE DATABASE Books;
USE Books;

CREATE TABLE IF NOT EXISTS `books` (
   `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP

  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf-8 AUTO_INCREMENT=1 ;
