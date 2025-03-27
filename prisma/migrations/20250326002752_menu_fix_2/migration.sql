/*
  Warnings:

  - Made the column `provider_menu_categoriesId` on table `provider_menu_items` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "provider_menu_items" DROP CONSTRAINT "provider_menu_items_provider_menu_categoriesId_fkey";

-- AlterTable
ALTER TABLE "provider_menu_items" ALTER COLUMN "provider_menu_categoriesId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "provider_menu_items" ADD CONSTRAINT "provider_menu_items_provider_menu_categoriesId_fkey" FOREIGN KEY ("provider_menu_categoriesId") REFERENCES "provider_menu_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
