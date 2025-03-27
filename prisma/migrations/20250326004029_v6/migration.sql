/*
  Warnings:

  - A unique constraint covering the columns `[provider_id]` on the table `provider_menu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "provider_menu_provider_id_unique" ON "provider_menu"("provider_id");
