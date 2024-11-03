-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `emailConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `provinceId` INTEGER NOT NULL,
    `provinceName` VARCHAR(191) NOT NULL,
    `districtId` INTEGER NOT NULL,
    `districtName` VARCHAR(191) NOT NULL,
    `wardId` INTEGER NOT NULL,
    `wardName` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
