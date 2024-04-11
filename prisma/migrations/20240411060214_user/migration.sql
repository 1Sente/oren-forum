-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fio" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
