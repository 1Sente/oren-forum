/*
  Warnings:

  - You are about to drop the column `name` on the `qr-codes` table. All the data in the column will be lost.
  - Added the required column `qrcode` to the `qr-codes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "qr-codes" DROP COLUMN "name",
ADD COLUMN     "qrcode" TEXT NOT NULL;
