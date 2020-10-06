2. Write an SQL query that displays all titles and descriptions of movies whose description contains the word Amazing.

Input
SELECT title, description FROM film WHERE description LIKE '%Amazing%';

Output
title | description

## -----------------------+--------------------------------------------------------------------------------------------------------------

A Shark Tank
Brannigan Sunrise | A Amazing Epistle of a Moose And a Crocodile who must Outrace a Dog in Berlin
Bucket Brotherhood | A Amazing Display of a Girl And a Womanizer who must Succumb a Lumberjack in A Baloon Factory
Bulworth Commandments | A Amazing Display of a Mad Cow And a Pioneer who must Redeem a Sumo Wrestler in The Outback
Carrie Bunch | A Amazing Epistle of a Student And a Astronaut who must Discover a Frisbee in The Canadian Rockies
Casablanca Super | A Amazing Panorama of a Crocodile And a Forensic Psychologist who must Pursue a Secret Agent in The First Manned Space Station
Celebrity Horn | A Amazing Documentary of a Secret Agent And a Astronaut who must Vanquish a Hunter in A Shark Tank
Champion Flatliners | A Amazing Story of a Mad Cow And a Dog who must Kill a Husband in A Monastery
Clash Freddy | A Amazing Yarn of a Composer And a Squirrel who must Escape a Astronaut in Australia
Clones Pinocchio | A Amazing Drama of a Car And a Robot who must Pursue a Dentist in New Orleans
Deep Crusade | A Amazing Tale of a Crocodile And a Squirrel who must Discover a Composer in Australia
Early Home | A Amazing Panorama of a Mad Scientist And a Husband who must Meet a Woman in The Outback
Empire Malkovich | A Amazing Story of a Feminist And a Cat who must Face a Car in An Abandoned Fun House
Expecations Natural | A Amazing Drama of a Butler And a Husband who must Reach a A Shark in A U-Boat
Expendable Stallion | A Amazing Character Study of a Mad Cow And a Squirrel who must Discover a Hunter in A U-Boat
Fireball Philadelphia | A Amazing Yarn of a Dentist And a A Shark who must Vanquish a Madman in An Abandoned Mine Shaft
Frost Head | A Amazing Reflection of a Lumberjack And a Cat who must Discover a Husband in A MySQL Convention
Gaslight Crusade | A Amazing Epistle of a Boy And a Astronaut who must Redeem a Man in The Gulf of Mexico
Gleaming Jawbreaker | A Amazing Display of a Composer And a Forensic Psychologist who must Discover a Car in The Canadian Rockies
Glory Tracy | A Amazing Saga of a Woman And a Womanizer who must Discover a Cat in The First Manned Space Station
Greedy Roots | A Amazing Reflection of a A Shark And a Butler who must Chase a Hunter in The Canadian Rockies
Halloween Nuts | A Amazing Panorama of a Forensic Psychologist And a Technical Writer who must Fight a Dentist in A U-Boat
Haunted Antitrust | A Amazing Saga of a Man And a Dentist who must Reach a Technical Writer in Ancient India
Hope Tootsie | A Amazing Documentary of a Student And a Sumo Wrestler who must Outgun a A Shark in A Shark Tank
Hysterical Grail | A Amazing Saga of a Madman And a Dentist who must Build a Car in A Manhattan Penthouse
Jericho Mulan | A Amazing Yarn of a Hunter And a Butler who must Defeat a Boy in A Jet Boat
Jet Neighbors | A Amazing Display of a Lumberjack And a Teacher who must Outrace a Woman in A U-Boat
Kramer Chocolate | A Amazing Yarn of a Robot And a Pastry Chef who must Redeem a Mad Scientist in The Outback
Kwai Homeward | A Amazing Drama of a Car And a Squirrel who must Pursue a Car in Soviet Georgia
Mine Titans | A Amazing Yarn of a Robot And a Womanizer who must Discover a Forensic Psychologist in Berlin
Notorious Reunion | A Amazing Epistle of a Woman And a Squirrel who must Fight a Hunter in A Baloon
Order Betrayed | A Amazing Saga of a Dog And a A Shark who must Challenge a Cat in The Sahara Desert
Psycho Shrunk | A Amazing Panorama of a Crocodile And a Explorer who must Fight a Husband in Nigeria
Raiders Antitrust | A Amazing Drama of a Teacher And a Feminist who must Meet a Woman in The First Manned Space Station
Records Zorro | A Amazing Drama of a Mad Scientist And a Composer who must Build a Husband in The Outback
Rings Heartbreakers | A Amazing Yarn of a Sumo Wrestler And a Boat who must Conquer a Waitress in New Orleans
Sleepless Monsoon | A Amazing Saga of a Moose And a Pastry Chef who must Escape a Butler in Australia
Slums Duck | A Amazing Character Study of a Teacher And a Database Administrator who must Defeat a Waitress in A Jet Boat
Song Hedwig | A Amazing Documentary of a Man And a Husband who must Confront a Squirrel in A MySQL Convention
South Wait | A Amazing Documentary of a Car And a Robot who must Escape a Lumberjack in An Abandoned Amusement Park
Submarine Bed | A Amazing Display of a Car And a Monkey who must Fight a Teacher in Soviet Georgia
Taxi Kick | A Amazing Epistle of a Girl And a Woman who must Outrace a Waitress in Soviet Georgia
Traffic Hobbit | A Amazing Epistle of a Squirrel And a Lumberjack who must Succumb a Database Administrator in A U-Boat
Unbreakable Karate | A Amazing Character Study of a Robot And a Student who must Chase a Robot in Australia
Untouchables Sunrise | A Amazing Documentary of a Woman And a Astronaut who must Outrace a Teacher in An Abandoned Fun House
Voice Peach | A Amazing Panorama of a Pioneer And a Student who must Overcome a Mad Scientist in A Manhattan Penthouse
Yentl Idaho | A Amazing Display of a Robot And a Astronaut who must Fight a Womanizer in Berlin
(48 rows)

EXERCISE 3
Write an SQL query that retrieves all payments greater than 10. It will be necessary to recover the id, the first name, the last name of the customer as well as the amount and the date of the payment.

INPUT
SELECT customer.customer_id, first_name, last_name, amount, payment_date FROM customer INNER JOIN payment ON payment.customer_id = customer.customer_id WHERE (amount) > 10;

OUTPUT
customer_id | first_name | last_name | amount | payment_date  
-------------+------------+--------------+--------+----------------------------
477 | Dan | Paine | 10.99 | 2007-02-18 07:01:49.996577
511 | Chester | Benner | 10.99 | 2007-02-20 06:07:59.996577
516 | Elmer | Noe | 10.99 | 2007-02-16 13:20:28.996577
542 | Lonnie | Tirado | 10.99 | 2007-02-20 05:22:13.996577
544 | Cody | Nolen | 10.99 | 2007-02-15 16:59:12.996577
550 | Guy | Brownlee | 10.99 | 2007-02-21 03:46:53.996577
558 | Jimmie | Eggleston | 10.99 | 2007-02-21 19:39:05.996577
571 | Johnnie | Chisholm | 10.99 | 2007-02-20 06:43:53.996577
572 | Sidney | Burleson | 10.99 | 2007-02-17 02:33:38.996577
21 | Michelle | Clark | 10.99 | 2007-02-20 23:33:01.996577
33 | Anna | Hill | 10.99 | 2007-02-15 08:14:59.996577
221 | Bessie | Morrison | 10.99 | 2007-02-19 09:18:28.996577
260 | Christy | Vargas | 10.99 | 2007-02-17 16:37:30.996577
277 | Olga | Jimenez | 10.99 | 2007-03-22 06:52:58.996577
292 | Misty | Lambert | 10.99 | 2007-03-18 20:43:44.996577
297 | Sherri | Rhodes | 10.99 | 2007-03-18 10:27:14.996577
301 | Robert | Baughman | 10.99 | 2007-03-22 14:53:08.996577
336 | Joshua | Mark | 10.99 | 2007-03-22 09:29:41.996577
345 | Carl | Artis | 10.99 | 2007-03-21 19:28:29.996577
347 | Ryan | Salisbury | 10.99 | 2007-03-18 07:42:08.996577
362 | Nicholas | Barfield | 11.99 | 2007-03-21 21:57:24.996577
367 | Adam | Gooch | 10.99 | 2007-03-21 12:09:40.996577
371 | Billy | Poulin | 10.99 | 2007-03-02 06:07:10.996577
372 | Steve | Mackenzie | 10.99 | 2007-03-02 07:47:48.996577
388 | Craig | Morrell | 10.99 | 2007-03-21 04:55:14.996577
404 | Stanley | Scroggins | 10.99 | 2007-03-22 17:56:28.996577
410 | Curtis | Irby | 10.99 | 2007-03-02 09:44:45.996577
420 | Jacob | Lance | 10.99 | 2007-03-01 12:54:06.996577
457 | Bill | Gavin | 10.99 | 2007-03-21 06:46:44.996577
459 | Tommy | Collazo | 10.99 | 2007-03-20 16:44:52.996577
460 | Leon | Bostic | 10.99 | 2007-03-01 18:40:59.996577
468 | Tim | Cary | 10.99 | 2007-03-02 12:13:31.996577
470 | Gordon | Allard | 10.99 | 2007-03-18 21:06:05.996577
526 | Karl | Seal | 10.99 | 2007-03-16 21:39:00.996577
529 | Erik | Guillen | 10.99 | 2007-03-01 04:22:15.996577
531 | Jamie | Waugh | 10.99 | 2007-03-02 12:34:08.996577
545 | Julio | Noland | 10.99 | 2007-03-18 17:40:11.996577
550 | Guy | Brownlee | 10.99 | 2007-03-19 09:55:58.996577
562 | Wallace | Slone | 10.99 | 2007-03-19 18:57:14.996577
565 | Jaime | Nettles | 10.99 | 2007-03-01 19:28:24.996577
567 | Alfredo | Mcadams | 10.99 | 2007-03-23 04:47:09.996577
.....
(107 rows)

4. Ecrivez une requête SQL qui affiche le chiffre d'affaire gagné par le video club depuis son ouverture.

INPUT
SELECT SUM (amount) AS total FROM payment;

OUTPUT
dvdrental=> SELECT SUM (amount) AS total FROM payment;
total

---

61312.04
(1 row)

5. Ecrivez une requête SQL qui affiche le TOP 10 des clients qui ont fait le plus d'achat dans ce video club. Il faudra récupérer leur id, prénom, nom, email. Il vous faudra utiliser les requêtes auxiliaires avec WITH pour cette exercice.

INPUT

OUTPUT
