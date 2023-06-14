-- MySQL Script generated by MySQL Workbench
-- Wed Jun 14 14:27:45 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema 20230614inovindb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema 20230614inovindb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `20230614inovindb` DEFAULT CHARACTER SET utf8 ;
USE `20230614inovindb` ;

-- -----------------------------------------------------
-- Table `20230614inovindb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`role` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`couleur`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`couleur` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`couleur` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`terroir`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`terroir` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`terroir` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`cepage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`cepage` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`cepage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`gout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`gout` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`gout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gouts et aromes` VARCHAR(45) NOT NULL,
  `couleur_id` INT NOT NULL,
  `terroir_id` INT NOT NULL,
  `cepage_id` INT NOT NULL,
  PRIMARY KEY (`id`, `couleur_id`, `terroir_id`, `cepage_id`),
  INDEX `fk_gout_couleur1_idx` (`couleur_id` ASC) VISIBLE,
  INDEX `fk_gout_terroir1_idx` (`terroir_id` ASC) VISIBLE,
  INDEX `fk_gout_cepage1_idx` (`cepage_id` ASC) VISIBLE,
  CONSTRAINT `fk_gout_couleur1`
    FOREIGN KEY (`couleur_id`)
    REFERENCES `20230614inovindb`.`couleur` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gout_terroir1`
    FOREIGN KEY (`terroir_id`)
    REFERENCES `20230614inovindb`.`terroir` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gout_cepage1`
    FOREIGN KEY (`cepage_id`)
    REFERENCES `20230614inovindb`.`cepage` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`year`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`year` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`year` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`exploitant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`exploitant` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`exploitant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`bouteille par cépage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`bouteille par cépage` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`bouteille par cépage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ref` VARCHAR(45) NOT NULL,
  `cepage_id` INT NOT NULL,
  `terroir_id` INT NOT NULL,
  `couleur_id` INT NOT NULL,
  `year_id` INT NOT NULL,
  `exploitant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cepage_id`, `terroir_id`, `couleur_id`),
  INDEX `fk_bouteille par cépage_cepage1_idx` (`cepage_id` ASC) VISIBLE,
  INDEX `fk_bouteille par cépage_terroir1_idx` (`terroir_id` ASC) VISIBLE,
  INDEX `fk_bouteille par cépage_couleur1_idx` (`couleur_id` ASC) VISIBLE,
  INDEX `fk_bouteille par cépage_year1_idx` (`year_id` ASC) VISIBLE,
  INDEX `fk_bouteille par cépage_exploitant1_idx` (`exploitant_id` ASC) VISIBLE,
  CONSTRAINT `fk_bouteille par cépage_cepage1`
    FOREIGN KEY (`cepage_id`)
    REFERENCES `20230614inovindb`.`cepage` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bouteille par cépage_terroir1`
    FOREIGN KEY (`terroir_id`)
    REFERENCES `20230614inovindb`.`terroir` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bouteille par cépage_couleur1`
    FOREIGN KEY (`couleur_id`)
    REFERENCES `20230614inovindb`.`couleur` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bouteille par cépage_year1`
    FOREIGN KEY (`year_id`)
    REFERENCES `20230614inovindb`.`year` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bouteille par cépage_exploitant1`
    FOREIGN KEY (`exploitant_id`)
    REFERENCES `20230614inovindb`.`exploitant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`fiche d'égustation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`fiche d'égustation` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`fiche d'égustation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `cépage` VARCHAR(45) NOT NULL,
  `notes` INT NOT NULL,
  `resultat dégustation_id` INT NOT NULL,
  `bouteille par cépage_id` INT NOT NULL,
  PRIMARY KEY (`id`, `resultat dégustation_id`, `bouteille par cépage_id`),
  INDEX `fk_fiche d'égustation_bouteille par cépage1_idx` (`bouteille par cépage_id` ASC) VISIBLE,
  CONSTRAINT `fk_fiche d'égustation_bouteille par cépage1`
    FOREIGN KEY (`bouteille par cépage_id`)
    REFERENCES `20230614inovindb`.`bouteille par cépage` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`user` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `name` VARCHAR(55) NOT NULL,
  `age` DATE NOT NULL,
  `mail` VARCHAR(90) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `gout_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `fiche d'égustation_id` INT NOT NULL,
  `fiche d'égustation_resultat dégustation_id` INT NOT NULL,
  PRIMARY KEY (`id`, `gout_id`, `role_id`, `fiche d'égustation_id`, `fiche d'égustation_resultat dégustation_id`),
  INDEX `fk_user_gout_idx` (`gout_id` ASC) VISIBLE,
  INDEX `fk_user_admi1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_user_fiche d'égustation1_idx` (`fiche d'égustation_id` ASC, `fiche d'égustation_resultat dégustation_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_gout`
    FOREIGN KEY (`gout_id`)
    REFERENCES `20230614inovindb`.`gout` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_admi1`
    FOREIGN KEY (`role_id`)
    REFERENCES `20230614inovindb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_fiche d'égustation1`
    FOREIGN KEY (`fiche d'égustation_id` , `fiche d'égustation_resultat dégustation_id`)
    REFERENCES `20230614inovindb`.`fiche d'égustation` (`id` , `resultat dégustation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`bouteille`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`bouteille` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`bouteille` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `couleur` VARCHAR(45) NOT NULL,
  `année` DATE NOT NULL,
  `prix` INT NOT NULL,
  `quantité` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`resultat dégustation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`resultat dégustation` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`resultat dégustation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `notes` INT NOT NULL,
  `atelier créa_id` INT NOT NULL,
  `fiche d'égustation_id` INT NOT NULL,
  `fiche d'égustation_resultat dégustation_id` INT NOT NULL,
  `fiche d'égustation_bouteille par cépage_id` INT NOT NULL,
  PRIMARY KEY (`id`, `atelier créa_id`, `fiche d'égustation_id`, `fiche d'égustation_resultat dégustation_id`, `fiche d'égustation_bouteille par cépage_id`),
  INDEX `fk_resultat dégustation_fiche d'égustation1_idx` (`fiche d'égustation_id` ASC, `fiche d'égustation_resultat dégustation_id` ASC, `fiche d'égustation_bouteille par cépage_id` ASC) VISIBLE,
  CONSTRAINT `fk_resultat dégustation_fiche d'égustation1`
    FOREIGN KEY (`fiche d'égustation_id` , `fiche d'égustation_resultat dégustation_id` , `fiche d'égustation_bouteille par cépage_id`)
    REFERENCES `20230614inovindb`.`fiche d'égustation` (`id` , `resultat dégustation_id` , `bouteille par cépage_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`selection pour user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`selection pour user` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`selection pour user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `bouteille_id` INT NOT NULL,
  PRIMARY KEY (`id`, `bouteille_id`),
  INDEX `fk_selection pour user_bouteille1_idx` (`bouteille_id` ASC) VISIBLE,
  CONSTRAINT `fk_selection pour user_bouteille1`
    FOREIGN KEY (`bouteille_id`)
    REFERENCES `20230614inovindb`.`bouteille` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`atelier créa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`atelier créa` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`atelier créa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `guide` VARCHAR(200) NOT NULL,
  `dosage` BLOB NOT NULL,
  `selection pour user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `selection pour user_id`),
  INDEX `fk_atelier créa_selection pour user1_idx` (`selection pour user_id` ASC) VISIBLE,
  CONSTRAINT `fk_atelier créa_selection pour user1`
    FOREIGN KEY (`selection pour user_id`)
    REFERENCES `20230614inovindb`.`selection pour user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `20230614inovindb`.`resultat dégustation_has_atelier créa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `20230614inovindb`.`resultat dégustation_has_atelier créa` ;

CREATE TABLE IF NOT EXISTS `20230614inovindb`.`resultat dégustation_has_atelier créa` (
  `resultat dégustation_id` INT NOT NULL,
  `resultat dégustation_atelier créa_id` INT NOT NULL,
  `atelier créa_id` INT NOT NULL,
  `selection pour user_id` INT NOT NULL,
  `selection pour user_bouteille_id` INT NOT NULL,
  PRIMARY KEY (`resultat dégustation_id`, `resultat dégustation_atelier créa_id`, `atelier créa_id`, `selection pour user_id`, `selection pour user_bouteille_id`),
  INDEX `fk_resultat dégustation_has_atelier créa_atelier créa1_idx` (`atelier créa_id` ASC) VISIBLE,
  INDEX `fk_resultat dégustation_has_atelier créa_resultat dégust_idx` (`resultat dégustation_id` ASC, `resultat dégustation_atelier créa_id` ASC) VISIBLE,
  INDEX `fk_resultat dégustation_has_atelier créa_selection pour u_idx` (`selection pour user_id` ASC, `selection pour user_bouteille_id` ASC) VISIBLE,
  CONSTRAINT `fk_resultat dégustation_has_atelier créa_resultat dégustat1`
    FOREIGN KEY (`resultat dégustation_id` , `resultat dégustation_atelier créa_id`)
    REFERENCES `20230614inovindb`.`resultat dégustation` (`id` , `atelier créa_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultat dégustation_has_atelier créa_atelier créa1`
    FOREIGN KEY (`atelier créa_id`)
    REFERENCES `20230614inovindb`.`atelier créa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultat dégustation_has_atelier créa_selection pour user1`
    FOREIGN KEY (`selection pour user_id` , `selection pour user_bouteille_id`)
    REFERENCES `20230614inovindb`.`selection pour user` (`id` , `bouteille_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;