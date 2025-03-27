/*
  Warnings:

  - You are about to drop the column `provider_menu_categoriesId` on the `provider_menu_items` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `provider_menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "provider_menu_items" DROP CONSTRAINT "provider_menu_items_provider_menu_categoriesId_fkey";

-- AlterTable
ALTER TABLE "provider_menu_items" DROP COLUMN "provider_menu_categoriesId",
ADD COLUMN     "category_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "provider_menu_items" ADD CONSTRAINT "provider_menu_items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "provider_menu_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
