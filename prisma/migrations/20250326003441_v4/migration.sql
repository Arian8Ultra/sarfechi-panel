-- DropForeignKey
ALTER TABLE "provider_menu_items" DROP CONSTRAINT "provider_menu_items_category_id_fkey";

-- AddForeignKey
ALTER TABLE "provider_menu_items" ADD CONSTRAINT "provider_menu_items_category_id_foreign" FOREIGN KEY ("category_id") REFERENCES "provider_menu_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
