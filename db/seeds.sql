-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Bacon Cheeseburger', true);

INSERT INTO burger_menu (burger_name, burger_description, burger_price) VALUES ('Hamburger', 'Original hamburger includes an all beef patty with mayo, ketchup, mustard, carmalized onions, and garlic pickle.', 5.99);
INSERT INTO burger_menu (burger_name, burger_description, burger_price) VALUES ('Cheeseburger', 'Original hamburger with two melty slices of deluxe american cheese.', 6.99);
INSERT INTO burger_menu (burger_name, burger_description, burger_price) VALUES ('Sunrise Burger', 'All beef patty, deluxe american cheese, three strips of bacon, fried egg over-easy with mayo, carmalized onions, and garlic pickle.', 8.99);
INSERT INTO burger_menu (burger_name, burger_description, burger_price) VALUES ('The Mother Clucker', 'Large breaded chicken breast served on a patato roll with mayo and garlic pickle.', 8.99);