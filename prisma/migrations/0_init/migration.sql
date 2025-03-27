-- CreateTable
CREATE TABLE "admins" (
    "id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "gender" VARCHAR(255),
    "email" VARCHAR(255),
    "mobile_number" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "birthdate" DATE,
    "ssn" VARCHAR(10),
    "otp_secret" VARCHAR(255),
    "status" SMALLINT NOT NULL DEFAULT 0,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(0),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cache" (
    "key" VARCHAR(255) NOT NULL,
    "value" TEXT NOT NULL,
    "expiration" INTEGER NOT NULL,

    CONSTRAINT "cache_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "cache_locks" (
    "key" VARCHAR(255) NOT NULL,
    "owner" VARCHAR(255) NOT NULL,
    "expiration" INTEGER NOT NULL,

    CONSTRAINT "cache_locks_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "customer_subscriptions" (
    "id" BIGSERIAL NOT NULL,
    "customer_id" BIGINT NOT NULL,
    "subscription_plan_id" BIGINT NOT NULL,
    "order_id" BIGINT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "customer_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "gender" VARCHAR(255),
    "email" VARCHAR(255),
    "mobile_number" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "birthdate" DATE,
    "ssn" VARCHAR(10),
    "otp_secret" VARCHAR(255),
    "status" SMALLINT NOT NULL DEFAULT 0,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(0),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "failed_jobs" (
    "id" BIGSERIAL NOT NULL,
    "uuid" VARCHAR(255) NOT NULL,
    "connection" TEXT NOT NULL,
    "queue" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "exception" TEXT NOT NULL,
    "failed_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "failed_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_batches" (
    "id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "total_jobs" INTEGER NOT NULL,
    "pending_jobs" INTEGER NOT NULL,
    "failed_jobs" INTEGER NOT NULL,
    "failed_job_ids" TEXT NOT NULL,
    "options" TEXT,
    "cancelled_at" INTEGER,
    "created_at" INTEGER NOT NULL,
    "finished_at" INTEGER,

    CONSTRAINT "job_batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" BIGSERIAL NOT NULL,
    "queue" VARCHAR(255) NOT NULL,
    "payload" TEXT NOT NULL,
    "attempts" SMALLINT NOT NULL,
    "reserved_at" INTEGER,
    "available_at" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "migration" VARCHAR(255) NOT NULL,
    "batch" INTEGER NOT NULL,

    CONSTRAINT "migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model_has_permissions" (
    "permission_id" BIGINT NOT NULL,
    "model_type" VARCHAR(255) NOT NULL,
    "model_id" BIGINT NOT NULL,

    CONSTRAINT "model_has_permissions_pkey" PRIMARY KEY ("permission_id","model_id","model_type")
);

-- CreateTable
CREATE TABLE "model_has_roles" (
    "role_id" BIGINT NOT NULL,
    "model_type" VARCHAR(255) NOT NULL,
    "model_id" BIGINT NOT NULL,

    CONSTRAINT "model_has_roles_pkey" PRIMARY KEY ("role_id","model_id","model_type")
);

-- CreateTable
CREATE TABLE "oauth_access_tokens" (
    "id" VARCHAR(100) NOT NULL,
    "user_id" BIGINT,
    "client_id" BIGINT NOT NULL,
    "name" VARCHAR(255),
    "scopes" TEXT,
    "revoked" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),
    "expires_at" TIMESTAMP(0),

    CONSTRAINT "oauth_access_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_auth_codes" (
    "id" VARCHAR(100) NOT NULL,
    "user_id" BIGINT NOT NULL,
    "client_id" BIGINT NOT NULL,
    "scopes" TEXT,
    "revoked" BOOLEAN NOT NULL,
    "expires_at" TIMESTAMP(0),

    CONSTRAINT "oauth_auth_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_clients" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT,
    "name" VARCHAR(255) NOT NULL,
    "secret" VARCHAR(100),
    "provider" VARCHAR(255),
    "redirect" TEXT NOT NULL,
    "personal_access_client" BOOLEAN NOT NULL,
    "password_client" BOOLEAN NOT NULL,
    "revoked" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "oauth_clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_personal_access_clients" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "oauth_personal_access_clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_refresh_tokens" (
    "id" VARCHAR(100) NOT NULL,
    "access_token_id" VARCHAR(100) NOT NULL,
    "revoked" BOOLEAN NOT NULL,
    "expires_at" TIMESTAMP(0),

    CONSTRAINT "oauth_refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offer_categories" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(255),
    "description" TEXT,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "offer_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offers" (
    "id" BIGSERIAL NOT NULL,
    "category_id" BIGINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(255),
    "description" TEXT,
    "price" DECIMAL(10,0),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" BIGSERIAL NOT NULL,
    "buyer_type" VARCHAR(255) NOT NULL,
    "buyer_id" BIGINT NOT NULL,
    "purchasable_type" VARCHAR(255) NOT NULL,
    "purchasable_id" BIGINT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" SMALLINT NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),
    "tracking_code" VARCHAR,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otps" (
    "id" BIGSERIAL NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "channel" SMALLINT NOT NULL DEFAULT 1,
    "reason" VARCHAR(255) NOT NULL,
    "expires_at" TIMESTAMP(0) NOT NULL,
    "authenticatable_type" VARCHAR(255) NOT NULL,
    "authenticatable_id" BIGINT NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "otps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" BIGSERIAL NOT NULL,
    "order_id" BIGINT NOT NULL,
    "transaction_id" VARCHAR(255) NOT NULL,
    "res_num" VARCHAR(255) NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 0,
    "amount" DECIMAL(10,2) NOT NULL,
    "payment_method" VARCHAR(255),
    "payment_gateway" VARCHAR(255),
    "paid_at" TIMESTAMP(0),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "guard_name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_access_tokens" (
    "id" BIGSERIAL NOT NULL,
    "tokenable_type" VARCHAR(255) NOT NULL,
    "tokenable_id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "token" VARCHAR(64) NOT NULL,
    "abilities" TEXT,
    "last_used_at" TIMESTAMP(0),
    "expires_at" TIMESTAMP(0),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "personal_access_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_agents" (
    "id" BIGSERIAL NOT NULL,
    "provider_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "role" SMALLINT NOT NULL DEFAULT 20,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "provider_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_offers" (
    "id" BIGSERIAL NOT NULL,
    "provider_id" BIGINT NOT NULL,
    "offer_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "provider_offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "providers" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "category_id" BIGINT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" JSON NOT NULL,
    "main_image" VARCHAR(255) NOT NULL,
    "slider_images" JSON NOT NULL,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_has_permissions" (
    "permission_id" BIGINT NOT NULL,
    "role_id" BIGINT NOT NULL,

    CONSTRAINT "role_has_permissions_pkey" PRIMARY KEY ("permission_id","role_id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "guard_name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_plan_offers" (
    "id" BIGSERIAL NOT NULL,
    "subscription_plan_id" BIGINT NOT NULL,
    "offer_id" BIGINT NOT NULL,
    "discount_percentage" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "subscription_plan_offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_plans" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" DECIMAL(10,0) NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "description" TEXT,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "subscription_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_usages" (
    "id" BIGSERIAL NOT NULL,
    "provider_agent_id" BIGINT NOT NULL,
    "customer_id" BIGINT NOT NULL,
    "customer_subscription_id" BIGINT NOT NULL,
    "provider_id" BIGINT NOT NULL,
    "offer_id" BIGINT NOT NULL,
    "total_amount" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT '0',
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "subscription_usages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_deleted_at_unique" ON "admins"("email", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "admins_mobile_number_deleted_at_unique" ON "admins"("mobile_number", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "admins_ssn_deleted_at_unique" ON "admins"("ssn", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "customer_subscriptions_order_id_unique" ON "customer_subscriptions"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_subscriptions_customer_id_subscription_plan_id_status_" ON "customer_subscriptions"("customer_id", "subscription_plan_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_deleted_at_unique" ON "customers"("email", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "customers_mobile_number_deleted_at_unique" ON "customers"("mobile_number", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "customers_ssn_deleted_at_unique" ON "customers"("ssn", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "failed_jobs_uuid_unique" ON "failed_jobs"("uuid");

-- CreateIndex
CREATE INDEX "jobs_queue_index" ON "jobs"("queue");

-- CreateIndex
CREATE INDEX "model_has_permissions_model_id_model_type_index" ON "model_has_permissions"("model_id", "model_type");

-- CreateIndex
CREATE INDEX "model_has_roles_model_id_model_type_index" ON "model_has_roles"("model_id", "model_type");

-- CreateIndex
CREATE INDEX "oauth_access_tokens_user_id_index" ON "oauth_access_tokens"("user_id");

-- CreateIndex
CREATE INDEX "oauth_auth_codes_user_id_index" ON "oauth_auth_codes"("user_id");

-- CreateIndex
CREATE INDEX "oauth_clients_user_id_index" ON "oauth_clients"("user_id");

-- CreateIndex
CREATE INDEX "oauth_refresh_tokens_access_token_id_index" ON "oauth_refresh_tokens"("access_token_id");

-- CreateIndex
CREATE UNIQUE INDEX "offer_categories_title_unique" ON "offer_categories"("title");

-- CreateIndex
CREATE INDEX "orders_buyer_type_buyer_id_index" ON "orders"("buyer_type", "buyer_id");

-- CreateIndex
CREATE INDEX "orders_purchasable_type_purchasable_id_index" ON "orders"("purchasable_type", "purchasable_id");

-- CreateIndex
CREATE INDEX "otps_authenticatable_type_authenticatable_id_index" ON "otps"("authenticatable_type", "authenticatable_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_transaction_id_unique" ON "payments"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_res_num_unique" ON "payments"("res_num");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_guard_name_unique" ON "permissions"("name", "guard_name");

-- CreateIndex
CREATE UNIQUE INDEX "personal_access_tokens_token_unique" ON "personal_access_tokens"("token");

-- CreateIndex
CREATE INDEX "personal_access_tokens_tokenable_type_tokenable_id_index" ON "personal_access_tokens"("tokenable_type", "tokenable_id");

-- CreateIndex
CREATE UNIQUE INDEX "providers_name_unique" ON "providers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_guard_name_unique" ON "roles"("name", "guard_name");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_plan_offer_unique" ON "subscription_plan_offers"("subscription_plan_id", "offer_id");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_plans_title_unique" ON "subscription_plans"("title");

-- AddForeignKey
ALTER TABLE "customer_subscriptions" ADD CONSTRAINT "customer_subscriptions_customer_id_foreign" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_subscriptions" ADD CONSTRAINT "customer_subscriptions_order_id_foreign" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_subscriptions" ADD CONSTRAINT "customer_subscriptions_subscription_plan_id_foreign" FOREIGN KEY ("subscription_plan_id") REFERENCES "subscription_plans"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "model_has_permissions" ADD CONSTRAINT "model_has_permissions_permission_id_foreign" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "model_has_roles" ADD CONSTRAINT "model_has_roles_role_id_foreign" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_category_id_foreign" FOREIGN KEY ("category_id") REFERENCES "offer_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_order_id_foreign" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "provider_agents" ADD CONSTRAINT "provider_agents_provider_id_foreign" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "provider_agents" ADD CONSTRAINT "provider_agents_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "admins"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "provider_offers" ADD CONSTRAINT "provider_offers_offer_id_foreign" FOREIGN KEY ("offer_id") REFERENCES "offers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "provider_offers" ADD CONSTRAINT "provider_offers_provider_id_foreign" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "providers" ADD CONSTRAINT "providers_category_id_foreign" FOREIGN KEY ("category_id") REFERENCES "offer_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_has_permissions" ADD CONSTRAINT "role_has_permissions_permission_id_foreign" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_has_permissions" ADD CONSTRAINT "role_has_permissions_role_id_foreign" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_plan_offers" ADD CONSTRAINT "subscription_plan_offers_offer_id_foreign" FOREIGN KEY ("offer_id") REFERENCES "offers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_plan_offers" ADD CONSTRAINT "subscription_plan_offers_subscription_plan_id_foreign" FOREIGN KEY ("subscription_plan_id") REFERENCES "subscription_plans"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_usages" ADD CONSTRAINT "subscription_usages_customer_id_foreign" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_usages" ADD CONSTRAINT "subscription_usages_customer_subscription_id_foreign" FOREIGN KEY ("customer_subscription_id") REFERENCES "customer_subscriptions"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_usages" ADD CONSTRAINT "subscription_usages_offer_id_foreign" FOREIGN KEY ("offer_id") REFERENCES "offers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_usages" ADD CONSTRAINT "subscription_usages_provider_agent_id_foreign" FOREIGN KEY ("provider_agent_id") REFERENCES "provider_agents"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_usages" ADD CONSTRAINT "subscription_usages_provider_id_foreign" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

