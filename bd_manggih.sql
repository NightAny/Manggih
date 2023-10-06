create database bd_manggih;

use bd_manggih;

create table tb_player(
	id int auto_increment primary key,
    nm_player varchar(50),
    nm_posit_x int,
    nm_posit_y int,
    nm_online bool,
    nm_personagem varchar(50)
);