-- Create Store procedure to create posts
DELIMITER //
CREATE PROCEDURE create_blog_post (IN title VARCHAR(80), IN article TEXT, IN author VARCHAR(25), OUT insertId INT)
BEGIN
    INSERT INTO `blog_post` (`id`, `title`, `published`, `article`, `author`)
    VALUES (NULL, title, CURRENT_TIMESTAMP, article, author);
	SET insertId = (SELECT MAX( id ) FROM blog_post);
	commit;
END//
DELIMITER ;
