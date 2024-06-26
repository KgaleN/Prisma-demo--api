-- DropForeignKey
ALTER TABLE `game` DROP FOREIGN KEY `Game_empId_fkey`;

-- DropForeignKey
ALTER TABLE `game` DROP FOREIGN KEY `Game_seasonId_fkey`;

-- AlterTable
ALTER TABLE `game` MODIFY `empId` INTEGER NULL,
    MODIFY `seasonId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `gameplayerstats` MODIFY `goalsScored` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOnTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOffTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsTaken` INTEGER NULL DEFAULT 0,
    MODIFY `passesCompleted` INTEGER NULL DEFAULT 0,
    MODIFY `passesIncomplete` INTEGER NULL DEFAULT 0,
    MODIFY `cornersTaken` INTEGER NULL DEFAULT 0,
    MODIFY `freeKicks` INTEGER NULL DEFAULT 0,
    MODIFY `redCards` INTEGER NULL DEFAULT 0,
    MODIFY `yellowCrads` INTEGER NULL DEFAULT 0,
    MODIFY `offSides` INTEGER NULL DEFAULT 0,
    MODIFY `fouls` INTEGER NULL DEFAULT 0,
    MODIFY `penalties` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesScored` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesMissed` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `gameteamstats` MODIFY `goalsScored` INTEGER NULL DEFAULT 0,
    MODIFY `possessionPercentage` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOnTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOffTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsTaken` INTEGER NULL DEFAULT 0,
    MODIFY `passesCompleted` INTEGER NULL DEFAULT 0,
    MODIFY `passesIncomplete` INTEGER NULL DEFAULT 0,
    MODIFY `cornersTaken` INTEGER NULL DEFAULT 0,
    MODIFY `freeKicks` INTEGER NULL DEFAULT 0,
    MODIFY `redCards` INTEGER NULL DEFAULT 0,
    MODIFY `yellowCrads` INTEGER NULL DEFAULT 0,
    MODIFY `offSides` INTEGER NULL DEFAULT 0,
    MODIFY `fouls` INTEGER NULL DEFAULT 0,
    MODIFY `penalties` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesScored` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesMissed` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `leagueplayerstats` MODIFY `goalsScored` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOnTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOffTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsTaken` INTEGER NULL DEFAULT 0,
    MODIFY `passesCompleted` INTEGER NULL DEFAULT 0,
    MODIFY `passesIncomplete` INTEGER NULL DEFAULT 0,
    MODIFY `cornersTaken` INTEGER NULL DEFAULT 0,
    MODIFY `freeKicks` INTEGER NULL DEFAULT 0,
    MODIFY `redCards` INTEGER NULL DEFAULT 0,
    MODIFY `yellowCrads` INTEGER NULL DEFAULT 0,
    MODIFY `offSides` INTEGER NULL DEFAULT 0,
    MODIFY `fouls` INTEGER NULL DEFAULT 0,
    MODIFY `penalties` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesScored` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesMissed` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `leagueteamstats` MODIFY `goalsScored` INTEGER NULL DEFAULT 0,
    MODIFY `possessionPercentage` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOnTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOffTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsTaken` INTEGER NULL DEFAULT 0,
    MODIFY `passesCompleted` INTEGER NULL DEFAULT 0,
    MODIFY `passesIncomplete` INTEGER NULL DEFAULT 0,
    MODIFY `cornersTaken` INTEGER NULL DEFAULT 0,
    MODIFY `freeKicks` INTEGER NULL DEFAULT 0,
    MODIFY `redCards` INTEGER NULL DEFAULT 0,
    MODIFY `yellowCrads` INTEGER NULL DEFAULT 0,
    MODIFY `offSides` INTEGER NULL DEFAULT 0,
    MODIFY `fouls` INTEGER NULL DEFAULT 0,
    MODIFY `penalties` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesScored` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesMissed` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `seasonplayerstats` MODIFY `goalsScored` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOnTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOffTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsTaken` INTEGER NULL DEFAULT 0,
    MODIFY `passesCompleted` INTEGER NULL DEFAULT 0,
    MODIFY `passesIncomplete` INTEGER NULL DEFAULT 0,
    MODIFY `cornersTaken` INTEGER NULL DEFAULT 0,
    MODIFY `freeKicks` INTEGER NULL DEFAULT 0,
    MODIFY `redCards` INTEGER NULL DEFAULT 0,
    MODIFY `yellowCrads` INTEGER NULL DEFAULT 0,
    MODIFY `offSides` INTEGER NULL DEFAULT 0,
    MODIFY `fouls` INTEGER NULL DEFAULT 0,
    MODIFY `penalties` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesScored` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesMissed` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `seasonteamstats` ADD COLUMN `draws` INTEGER NULL DEFAULT 0,
    ADD COLUMN `losses` INTEGER NULL DEFAULT 0,
    ADD COLUMN `points` INTEGER NULL DEFAULT 0,
    ADD COLUMN `wins` INTEGER NULL DEFAULT 0,
    MODIFY `goalsScored` INTEGER NULL DEFAULT 0,
    MODIFY `possessionPercentage` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOnTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsOffTarget` INTEGER NULL DEFAULT 0,
    MODIFY `shotsTaken` INTEGER NULL DEFAULT 0,
    MODIFY `passesCompleted` INTEGER NULL DEFAULT 0,
    MODIFY `passesIncomplete` INTEGER NULL DEFAULT 0,
    MODIFY `cornersTaken` INTEGER NULL DEFAULT 0,
    MODIFY `freeKicks` INTEGER NULL DEFAULT 0,
    MODIFY `redCards` INTEGER NULL DEFAULT 0,
    MODIFY `yellowCrads` INTEGER NULL DEFAULT 0,
    MODIFY `offSides` INTEGER NULL DEFAULT 0,
    MODIFY `fouls` INTEGER NULL DEFAULT 0,
    MODIFY `penalties` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesScored` INTEGER NULL DEFAULT 0,
    MODIFY `penaltiesMissed` INTEGER NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_empId_fkey` FOREIGN KEY (`empId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
