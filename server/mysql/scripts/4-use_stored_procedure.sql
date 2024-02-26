
-- Call to create blog post
CALL create_blog_post('Stored procedure creado', 'Primera llamada del stored procedure.', 'demo', @newBlogPost);
select * from blog_post where id= @newBlogPost

CALL create_blog_post('Stored ejecutado nuevamente', 'Segunda entrada utilizando un stored procedure.', 'demo', @newBlogPost);
select * from blog_post where id= @newBlogPost
