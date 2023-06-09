-- MySQL Script generated by MySQL Workbench
-- Wed Jun  7 16:27:46 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;
-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`cepages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cepages` ;
CREATE TABLE IF NOT EXISTS `mydb`.`cepages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`terroirs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`terroirs` ;
CREATE TABLE IF NOT EXISTS `mydb`.`terroirs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`colors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`colors` ;
CREATE TABLE IF NOT EXISTS `mydb`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`taste`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`taste` ;
CREATE TABLE IF NOT EXISTS `mydb`.`taste` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `cepages_id` INT NULL,
  `terroirs_id` INT NULL,
  `colors_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `cepages_id_idx` (`cepages_id` ASC) VISIBLE,
  INDEX `terroirs_id_idx` (`terroirs_id` ASC) VISIBLE,
  INDEX `color_id_idx` (`colors_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cepages_id`
    FOREIGN KEY (`cepages_id`)
    REFERENCES `mydb`.`cepages` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `terroirs_id`
    FOREIGN KEY (`terroirs_id`)
    REFERENCES `mydb`.`terroirs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `color_id`
    FOREIGN KEY (`colors_id`)
    REFERENCES `mydb`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(125) NOT NULL,
  `lastname` VARCHAR(125) NOT NULL,
  `date` DATETIME NOT NULL,
  `birthday` DATE NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `role_id` INT NOT NULL,
  `taste_id` INT NOT NULL,
  PRIMARY KEY (`id`, `role_id`, `taste_id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_user_taste1_idx` (`taste_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_taste1`
    FOREIGN KEY (`taste_id`)
    REFERENCES `mydb`.`taste` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`bottle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`bottle` ;
CREATE TABLE IF NOT EXISTS `mydb`.`bottle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cepages_id` INT NOT NULL,
  `terroirs_id` INT NOT NULL,
  `color_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cepages_id`, `terroirs_id`, `color_id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`characteristic`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`characteristic` ;
CREATE TABLE IF NOT EXISTS `mydb`.`characteristic` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NULL,
  `power` INT NULL,
  `bottle_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `bottle_id_idx` (`bottle_id` ASC) VISIBLE,
  CONSTRAINT `bottle_id`
    FOREIGN KEY (`bottle_id`)
    REFERENCES `mydb`.`bottle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`note`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`note` ;
CREATE TABLE IF NOT EXISTS `mydb`.`note` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`tasting`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tasting` ;
CREATE TABLE IF NOT EXISTS `mydb`.`tasting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `user_id` INT NOT NULL,
  `bottle_id` INT NOT NULL,
  `note_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `bottle_id`, `note_id`),
  INDEX `fk_step2_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_step2_step_bottle1_idx` (`bottle_id` ASC) VISIBLE,
  INDEX `note_id_idx` (`note_id` ASC) VISIBLE,
  CONSTRAINT `fk_step2_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_step2_step_bottle1`
    FOREIGN KEY (`bottle_id`)
    REFERENCES `mydb`.`bottle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `note_id`
    FOREIGN KEY (`note_id`)
    REFERENCES `mydb`.`note` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`dosage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`dosage` ;
CREATE TABLE IF NOT EXISTS `mydb`.`dosage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pourcentage` INT NOT NULL,
  `bottle_id` INT NOT NULL,
  PRIMARY KEY (`id`, `bottle_id`),
  INDEX `fk_dosage_bottle1_idx` (`bottle_id` ASC) VISIBLE,
  CONSTRAINT `fk_dosage_bottle1`
    FOREIGN KEY (`bottle_id`)
    REFERENCES `mydb`.`bottle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`workshop`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`workshop` ;
CREATE TABLE IF NOT EXISTS `mydb`.`workshop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tasting_id` INT NOT NULL,
  `dosage_id` INT NOT NULL,
  PRIMARY KEY (`id`, `tasting_id`, `dosage_id`),
  INDEX `fk_atelier_step21_idx` (`tasting_id` ASC) VISIBLE,
  INDEX `fk_atelier_dosage1_idx` (`dosage_id` ASC) VISIBLE,
  CONSTRAINT `fk_atelier_step21`
    FOREIGN KEY (`tasting_id`)
    REFERENCES `mydb`.`tasting` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atelier_dosage1`
    FOREIGN KEY (`dosage_id`)
    REFERENCES `mydb`.`dosage` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;