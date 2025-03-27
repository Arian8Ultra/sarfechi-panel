-- CreateTable
CREATE TABLE "provider_menu" (
    "id" BIGSERIAL NOT NULL,
    "provider_id" BIGINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "provider_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_menu_items" (
    "id" BIGSERIAL NOT NULL,
    "menu_id" BIGINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,0) NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "provider_menu_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_menu_categories" (
    "id" BIGSERIAL NOT NULL,
    "menu_id" BIGINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "provider_menu_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_provider_menu_items_provider_menu_categories" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_provider_menu_items_provider_menu_categories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_provider_menu_items_provider_menu_categories_B_index" ON "_provider_menu_items_provider_menu_categories"("B");

-- AddForeignKey
ALTER TABLE "provider_menu" ADD CONSTRAINT "provider_menu_provider_id_foreign" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "provider_menu_items" ADD CONSTRAINT "provider_menu_items_menu_id_foreign" FOREIGN KEY ("menu_id") REFERENCES "provider_menu"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "provider_menu_categories" ADD CONSTRAINT "provider_menu_categories_menu_id_foreign" FOREIGN KEY ("menu_id") REFERENCES "provider_menu"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_provider_menu_items_provider_menu_categories" ADD CONSTRAINT "_provider_menu_items_provider_menu_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "provider_menu_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_provider_menu_items_provider_menu_categories" ADD CONSTRAINT "_provider_menu_items_provider_menu_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "provider_menu_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
