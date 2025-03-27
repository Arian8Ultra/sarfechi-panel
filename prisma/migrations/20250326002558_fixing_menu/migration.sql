/*
  Warnings:

  - You are about to drop the `_provider_menu_items_provider_menu_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_provider_menu_items_provider_menu_categories" DROP CONSTRAINT "_provider_menu_items_provider_menu_categories_A_fkey";

-- DropForeignKey
ALTER TABLE "_provider_menu_items_provider_menu_categories" DROP CONSTRAINT "_provider_menu_items_provider_menu_categories_B_fkey";

-- AlterTable
ALTER TABLE "provider_menu" ALTER COLUMN "title" DROP NOT NULL;

-- AlterTable
ALTER TABLE "provider_menu_items" ADD COLUMN     "provider_menu_categoriesId" BIGINT;

-- DropTable
DROP TABLE "_provider_menu_items_provider_menu_categories";

-- AddForeignKey
ALTER TABLE "provider_menu_items" ADD CONSTRAINT "provider_menu_items_provider_menu_categoriesId_fkey" FOREIGN KEY ("provider_menu_categoriesId") REFERENCES "provider_menu_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
