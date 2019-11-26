INSERT INTO users(user, password, logged_in, logged_in_hash)
VALUES ("john420", "password123", false,"john420isloggedin");

INSERT INTO users(user, password, logged_in, logged_in_hash)
VALUES ("zordon69", "password123", false,"zordon69isloggedin");

INSERT INTO users(user, password, logged_in, logged_in_hash)
VALUES ("jordan9000", "password123", false,"jordan9000isloggedin");

INSERT INTO articles(author, title, body, created_at, likes, user_liked, comments)
VALUES ("Zordon", "New Blog Title 1", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
","27/01/2017",12,"{John, Jimothy, Jordan}","name:Jimothy,comment:Hello there!");

INSERT INTO articles(author, title, body, created_at, likes, user_liked, comments)
VALUES ("Jimothy", "New Blog Title 1", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
","23/01/2017",12,"{John, Jimothy, Jordan}","name:Jimothy,comment:Hello there!");

INSERT INTO articles(author, title, body, created_at, likes, user_liked, comments)
VALUES ("Jordan", "New Blog Title 1", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
","24/12/2016",12,"{John, Jimothy, Jordan}","name:Jimothy,comment:Hello there!");