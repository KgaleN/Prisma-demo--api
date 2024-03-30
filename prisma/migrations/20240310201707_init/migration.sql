-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `active` VARCHAR(3) NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `active` VARCHAR(3) NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gameDate` DATETIME(3) NULL,
    `gameTime` DATETIME(3) NULL,
    `location` VARCHAR(255) NULL,
    `active` VARCHAR(3) NULL,
    `empId` INTEGER NOT NULL,
    `seasonId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `nickname` VARCHAR(255) NULL,
    `headCoach` VARCHAR(255) NULL,
    `stadiumName` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `logoImg` LONGBLOB NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Offical` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(255) NULL,
    `active` VARCHAR(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Season` (
    `id` VARCHAR(191) NOT NULL,
    `startingDate` DATETIME(3) NULL,
    `endingDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameOfficial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NULL,
    `position` VARCHAR(191) NULL,
    `officialId` INTEGER NULL,
    `gameId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(255) NULL,
    `age` INTEGER NULL,
    `height` INTEGER NULL,
    `weight` INTEGER NULL,
    `nationality` VARCHAR(255) NULL,
    `status` VARCHAR(20) NULL,
    `position` VARCHAR(50) NULL,
    `teamId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameTeamStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsScored` INTEGER NULL,
    `possessionPercentage` INTEGER NULL,
    `shotsOnTarget` INTEGER NULL,
    `shotsOffTarget` INTEGER NULL,
    `shotsTaken` INTEGER NULL,
    `passesCompleted` INTEGER NULL,
    `passesIncomplete` INTEGER NULL,
    `cornersTaken` INTEGER NULL,
    `freeKicks` INTEGER NULL,
    `redCards` INTEGER NULL,
    `yellowCrads` INTEGER NULL,
    `offSides` INTEGER NULL,
    `fouls` INTEGER NULL,
    `penalties` INTEGER NULL,
    `penaltiesScored` INTEGER NULL,
    `penaltiesMissed` INTEGER NULL,
    `teamId` INTEGER NULL,
    `gameId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeasonTeamStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsScored` INTEGER NULL,
    `possessionPercentage` INTEGER NULL,
    `shotsOnTarget` INTEGER NULL,
    `shotsOffTarget` INTEGER NULL,
    `shotsTaken` INTEGER NULL,
    `passesCompleted` INTEGER NULL,
    `passesIncomplete` INTEGER NULL,
    `cornersTaken` INTEGER NULL,
    `freeKicks` INTEGER NULL,
    `redCards` INTEGER NULL,
    `yellowCrads` INTEGER NULL,
    `offSides` INTEGER NULL,
    `fouls` INTEGER NULL,
    `penalties` INTEGER NULL,
    `penaltiesScored` INTEGER NULL,
    `penaltiesMissed` INTEGER NULL,
    `teamId` INTEGER NULL,
    `seasonId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeagueTeamStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsScored` INTEGER NULL,
    `possessionPercentage` INTEGER NULL,
    `shotsOnTarget` INTEGER NULL,
    `shotsOffTarget` INTEGER NULL,
    `shotsTaken` INTEGER NULL,
    `passesCompleted` INTEGER NULL,
    `passesIncomplete` INTEGER NULL,
    `cornersTaken` INTEGER NULL,
    `freeKicks` INTEGER NULL,
    `redCards` INTEGER NULL,
    `yellowCrads` INTEGER NULL,
    `offSides` INTEGER NULL,
    `fouls` INTEGER NULL,
    `penalties` INTEGER NULL,
    `penaltiesScored` INTEGER NULL,
    `penaltiesMissed` INTEGER NULL,
    `teamId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GamePlayerStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsScored` INTEGER NULL,
    `shotsOnTarget` INTEGER NULL,
    `shotsOffTarget` INTEGER NULL,
    `shotsTaken` INTEGER NULL,
    `passesCompleted` INTEGER NULL,
    `passesIncomplete` INTEGER NULL,
    `cornersTaken` INTEGER NULL,
    `freeKicks` INTEGER NULL,
    `redCards` INTEGER NULL,
    `yellowCrads` INTEGER NULL,
    `offSides` INTEGER NULL,
    `fouls` INTEGER NULL,
    `penalties` INTEGER NULL,
    `penaltiesScored` INTEGER NULL,
    `penaltiesMissed` INTEGER NULL,
    `playerId` INTEGER NULL,
    `gameId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeasonPlayerStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsScored` INTEGER NULL,
    `shotsOnTarget` INTEGER NULL,
    `shotsOffTarget` INTEGER NULL,
    `shotsTaken` INTEGER NULL,
    `passesCompleted` INTEGER NULL,
    `passesIncomplete` INTEGER NULL,
    `cornersTaken` INTEGER NULL,
    `freeKicks` INTEGER NULL,
    `redCards` INTEGER NULL,
    `yellowCrads` INTEGER NULL,
    `offSides` INTEGER NULL,
    `fouls` INTEGER NULL,
    `penalties` INTEGER NULL,
    `penaltiesScored` INTEGER NULL,
    `penaltiesMissed` INTEGER NULL,
    `seasonId` VARCHAR(191) NULL,
    `playerId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeaguePlayerStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsScored` INTEGER NULL,
    `shotsOnTarget` INTEGER NULL,
    `shotsOffTarget` INTEGER NULL,
    `shotsTaken` INTEGER NULL,
    `passesCompleted` INTEGER NULL,
    `passesIncomplete` INTEGER NULL,
    `cornersTaken` INTEGER NULL,
    `freeKicks` INTEGER NULL,
    `redCards` INTEGER NULL,
    `yellowCrads` INTEGER NULL,
    `offSides` INTEGER NULL,
    `fouls` INTEGER NULL,
    `penalties` INTEGER NULL,
    `penaltiesScored` INTEGER NULL,
    `penaltiesMissed` INTEGER NULL,
    `playerId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_empId_fkey` FOREIGN KEY (`empId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameOfficial` ADD CONSTRAINT `GameOfficial_officialId_fkey` FOREIGN KEY (`officialId`) REFERENCES `Offical`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameOfficial` ADD CONSTRAINT `GameOfficial_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameTeamStats` ADD CONSTRAINT `GameTeamStats_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameTeamStats` ADD CONSTRAINT `GameTeamStats_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeasonTeamStats` ADD CONSTRAINT `SeasonTeamStats_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeasonTeamStats` ADD CONSTRAINT `SeasonTeamStats_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeagueTeamStats` ADD CONSTRAINT `LeagueTeamStats_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GamePlayerStats` ADD CONSTRAINT `GamePlayerStats_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `Player`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GamePlayerStats` ADD CONSTRAINT `GamePlayerStats_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeasonPlayerStats` ADD CONSTRAINT `SeasonPlayerStats_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeasonPlayerStats` ADD CONSTRAINT `SeasonPlayerStats_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `Player`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaguePlayerStats` ADD CONSTRAINT `LeaguePlayerStats_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `Player`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
