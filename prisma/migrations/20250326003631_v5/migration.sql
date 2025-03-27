/*
  Warnings:

  - Added the required column `price` to the `provider_menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "provider_menu_items" ADD COLUMN     "price" DECIMAL(10,0) NOT NULL;
