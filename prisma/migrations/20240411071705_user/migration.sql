/*
  Warnings:

  - Added the required column `userId` to the `qr-codes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "qr-codes" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "qr-codes" ADD CONSTRAINT "qr-codes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
