CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) 

CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `movieId` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) 


