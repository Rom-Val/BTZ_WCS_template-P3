-- MySQL Script generated by MySQL Workbench
-- Tue Jul 25 16:17:56 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema inovin_db_local
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `aromas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aromas` ;

CREATE TABLE IF NOT EXISTS `aromas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
COMMENT = '		';


-- -----------------------------------------------------
-- Table `bottle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bottle` ;

CREATE TABLE IF NOT EXISTS `bottle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `year` DATE NOT NULL,
  `price` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cepages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cepages` ;

CREATE TABLE IF NOT EXISTS `cepages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `colors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `colors` ;

CREATE TABLE IF NOT EXISTS `colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `intensity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `intensity` ;

CREATE TABLE IF NOT EXISTS `intensity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `operators`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `operators` ;

CREATE TABLE IF NOT EXISTS `operators` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `terroirs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `terroirs` ;

CREATE TABLE IF NOT EXISTS `terroirs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `years`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `years` ;

CREATE TABLE IF NOT EXISTS `years` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bottle_per_cepage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bottle_per_cepage` ;

CREATE TABLE IF NOT EXISTS `bottle_per_cepage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ref` VARCHAR(45) NOT NULL,
  `cepage_id` INT NOT NULL,
  `terroir_id` INT NOT NULL,
  `color_id` INT NOT NULL,
  `year_id` INT NOT NULL,
  `operator_id` INT NOT NULL,
  `intensity_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bottle_per_cepage_cepage1_idx` (`cepage_id` ASC) VISIBLE,
  INDEX `fk_bottle_per_cepage_terroir1_idx` (`terroir_id` ASC) VISIBLE,
  INDEX `fk_bottle_per_cepage_color1_idx` (`color_id` ASC) VISIBLE,
  INDEX `fk_bottle_per_cepage_year1_idx` (`year_id` ASC) INVISIBLE,
  INDEX `fk_bottle_per_cepage_operator1_idx` (`operator_id` ASC) INVISIBLE,
  INDEX `fk_bottle_per_cepage_intensity1_idx` (`intensity_id` ASC) VISIBLE,
  CONSTRAINT `fk_bottle_per_cepage_cepage_id`
    FOREIGN KEY (`cepage_id`)
    REFERENCES `cepages` (`id`),
  CONSTRAINT `fk_bottle_per_cepage_color_id`
    FOREIGN KEY (`color_id`)
    REFERENCES `colors` (`id`),
  CONSTRAINT `fk_bottle_per_cepage_intensity1`
    FOREIGN KEY (`intensity_id`)
    REFERENCES `intensity` (`id`),
  CONSTRAINT `fk_bottle_per_cepage_operator_id`
    FOREIGN KEY (`operator_id`)
    REFERENCES `operators` (`id`),
  CONSTRAINT `fk_bottle_per_cepage_terroir_id`
    FOREIGN KEY (`terroir_id`)
    REFERENCES `terroirs` (`id`),
  CONSTRAINT `fk_bottle_per_cepage_year_id`
    FOREIGN KEY (`year_id`)
    REFERENCES `years` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `flavors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flavors` ;

CREATE TABLE IF NOT EXISTS `flavors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `roles` ;

CREATE TABLE IF NOT EXISTS `roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users` ;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `firstname` VARCHAR(55) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `age` DATE NOT NULL,
  `mail` VARCHAR(90) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `roles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tastes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tastes` ;

CREATE TABLE IF NOT EXISTS `tastes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `color_id` INT NOT NULL,
  `terroir_id` INT NOT NULL,
  `cepage_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `aromas_id` INT NOT NULL,
  `intensity_id` INT NOT NULL,
  `flavors_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `colors_id_idx` (`color_id` ASC) VISIBLE,
  INDEX `terroir_id_idx` (`terroir_id` ASC) VISIBLE,
  INDEX `cepage_id_idx` (`cepage_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_tastes_aromas1_idx` (`aromas_id` ASC) VISIBLE,
  INDEX `fk_tastes_intensity1_idx` (`intensity_id` ASC) VISIBLE,
  INDEX `fk_tastes_flavors1_idx` (`flavors_id` ASC) VISIBLE,
  CONSTRAINT `cepage_id`
    FOREIGN KEY (`cepage_id`)
    REFERENCES `cepages` (`id`),
  CONSTRAINT `colors_id`
    FOREIGN KEY (`color_id`)
    REFERENCES `colors` (`id`),
  CONSTRAINT `fk_tastes_aromas1`
    FOREIGN KEY (`aromas_id`)
    REFERENCES `aromas` (`id`),
  CONSTRAINT `fk_tastes_flavors1`
    FOREIGN KEY (`flavors_id`)
    REFERENCES `flavors` (`id`),
  CONSTRAINT `fk_tastes_intensity1`
    FOREIGN KEY (`intensity_id`)
    REFERENCES `intensity` (`id`),
  CONSTRAINT `terroir_id`
    FOREIGN KEY (`terroir_id`)
    REFERENCES `terroirs` (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tasting_sheet`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tasting_sheet` ;

CREATE TABLE IF NOT EXISTS `tasting_sheet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `cepages` VARCHAR(45) NOT NULL,
  `notes` INT NOT NULL,
  `bottle_per_cepage_id` INT NOT NULL,
  `taste_id` INT NOT NULL,
  PRIMARY KEY (`id`, `bottle_per_cepage_id`, `taste_id`),
  INDEX `taste_id_idx` (`taste_id` ASC) VISIBLE,
  INDEX `bottle_per_cepage_id_idx` (`bottle_per_cepage_id` ASC) VISIBLE,
  CONSTRAINT `bottle_per_cepage_id`
    FOREIGN KEY (`bottle_per_cepage_id`)
    REFERENCES `bottle_per_cepage` (`id`),
  CONSTRAINT `taste_id`
    FOREIGN KEY (`taste_id`)
    REFERENCES `tastes` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tasting_result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tasting_result` ;

CREATE TABLE IF NOT EXISTS `tasting_result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `notes` INT NOT NULL,
  `tasting_sheet_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `tasting_sheet_id_idx` (`tasting_sheet_id` ASC) VISIBLE,
  CONSTRAINT `tasting_sheet_id`
    FOREIGN KEY (`tasting_sheet_id`)
    REFERENCES `tasting_sheet` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `workshop`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workshop` ;

CREATE TABLE IF NOT EXISTS `workshop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL DEFAULT NULL,
  `guide` VARCHAR(200) NOT NULL,
  `dosage` BLOB NOT NULL,
  `tasting_result_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `tasting_resuilt_id_idx` (`tasting_result_id` ASC) VISIBLE,
  CONSTRAINT `tasting_resuilt_id`
    FOREIGN KEY (`tasting_result_id`)
    REFERENCES `tasting_result` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `selection_for_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `selection_for_user` ;

CREATE TABLE IF NOT EXISTS `selection_for_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL DEFAULT NULL,
  `bottle_id` INT NOT NULL,
  `workshop_id` INT NOT NULL,
  PRIMARY KEY (`id`, `bottle_id`, `workshop_id`),
  INDEX `bottle_id_idx` (`bottle_id` ASC) VISIBLE,
  INDEX `workshop_id_idx` (`workshop_id` ASC) VISIBLE,
  CONSTRAINT `bottle_id`
    FOREIGN KEY (`bottle_id`)
    REFERENCES `bottle` (`id`),
  CONSTRAINT `workshop_id`
    FOREIGN KEY (`workshop_id`)
    REFERENCES `workshop` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
