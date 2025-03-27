
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminsScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  gender: 'gender',
  email: 'email',
  mobile_number: 'mobile_number',
  password: 'password',
  birthdate: 'birthdate',
  ssn: 'ssn',
  otp_secret: 'otp_secret',
  status: 'status',
  is_verified: 'is_verified',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.CacheScalarFieldEnum = {
  key: 'key',
  value: 'value',
  expiration: 'expiration'
};

exports.Prisma.Cache_locksScalarFieldEnum = {
  key: 'key',
  owner: 'owner',
  expiration: 'expiration'
};

exports.Prisma.Customer_subscriptionsScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  subscription_plan_id: 'subscription_plan_id',
  order_id: 'order_id',
  start_date: 'start_date',
  end_date: 'end_date',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CustomersScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  gender: 'gender',
  email: 'email',
  mobile_number: 'mobile_number',
  password: 'password',
  birthdate: 'birthdate',
  ssn: 'ssn',
  otp_secret: 'otp_secret',
  status: 'status',
  is_verified: 'is_verified',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Failed_jobsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failed_at: 'failed_at'
};

exports.Prisma.Job_batchesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  total_jobs: 'total_jobs',
  pending_jobs: 'pending_jobs',
  failed_jobs: 'failed_jobs',
  failed_job_ids: 'failed_job_ids',
  options: 'options',
  cancelled_at: 'cancelled_at',
  created_at: 'created_at',
  finished_at: 'finished_at'
};

exports.Prisma.JobsScalarFieldEnum = {
  id: 'id',
  queue: 'queue',
  payload: 'payload',
  attempts: 'attempts',
  reserved_at: 'reserved_at',
  available_at: 'available_at',
  created_at: 'created_at'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.Model_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.Model_has_rolesScalarFieldEnum = {
  role_id: 'role_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.Oauth_access_tokensScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  client_id: 'client_id',
  name: 'name',
  scopes: 'scopes',
  revoked: 'revoked',
  created_at: 'created_at',
  updated_at: 'updated_at',
  expires_at: 'expires_at'
};

exports.Prisma.Oauth_auth_codesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  client_id: 'client_id',
  scopes: 'scopes',
  revoked: 'revoked',
  expires_at: 'expires_at'
};

exports.Prisma.Oauth_clientsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  secret: 'secret',
  provider: 'provider',
  redirect: 'redirect',
  personal_access_client: 'personal_access_client',
  password_client: 'password_client',
  revoked: 'revoked',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Oauth_personal_access_clientsScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Oauth_refresh_tokensScalarFieldEnum = {
  id: 'id',
  access_token_id: 'access_token_id',
  revoked: 'revoked',
  expires_at: 'expires_at'
};

exports.Prisma.Offer_categoriesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  icon: 'icon',
  description: 'description',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OffersScalarFieldEnum = {
  id: 'id',
  category_id: 'category_id',
  title: 'title',
  icon: 'icon',
  description: 'description',
  price: 'price',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OrdersScalarFieldEnum = {
  id: 'id',
  buyer_type: 'buyer_type',
  buyer_id: 'buyer_id',
  purchasable_type: 'purchasable_type',
  purchasable_id: 'purchasable_id',
  amount: 'amount',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  tracking_code: 'tracking_code'
};

exports.Prisma.OtpsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  channel: 'channel',
  reason: 'reason',
  expires_at: 'expires_at',
  authenticatable_type: 'authenticatable_type',
  authenticatable_id: 'authenticatable_id',
  is_used: 'is_used',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  transaction_id: 'transaction_id',
  res_num: 'res_num',
  status: 'status',
  amount: 'amount',
  payment_method: 'payment_method',
  payment_gateway: 'payment_gateway',
  paid_at: 'paid_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  receipt_photo: 'receipt_photo'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Personal_access_tokensScalarFieldEnum = {
  id: 'id',
  tokenable_type: 'tokenable_type',
  tokenable_id: 'tokenable_id',
  name: 'name',
  token: 'token',
  abilities: 'abilities',
  last_used_at: 'last_used_at',
  expires_at: 'expires_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Provider_agentsScalarFieldEnum = {
  id: 'id',
  provider_id: 'provider_id',
  user_id: 'user_id',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Provider_offersScalarFieldEnum = {
  id: 'id',
  provider_id: 'provider_id',
  offer_id: 'offer_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProvidersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category_id: 'category_id',
  address: 'address',
  phone_number: 'phone_number',
  main_image: 'main_image',
  slider_images: 'slider_images',
  latitude: 'latitude',
  longitude: 'longitude',
  is_verified: 'is_verified',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Provider_menuScalarFieldEnum = {
  id: 'id',
  provider_id: 'provider_id',
  title: 'title',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Provider_menu_itemsScalarFieldEnum = {
  id: 'id',
  menu_id: 'menu_id',
  title: 'title',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  category_id: 'category_id',
  price: 'price'
};

exports.Prisma.Provider_menu_categoriesScalarFieldEnum = {
  id: 'id',
  menu_id: 'menu_id',
  title: 'title',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Role_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Subscription_plan_offersScalarFieldEnum = {
  id: 'id',
  subscription_plan_id: 'subscription_plan_id',
  offer_id: 'offer_id',
  discount_percentage: 'discount_percentage',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Subscription_plansScalarFieldEnum = {
  id: 'id',
  title: 'title',
  duration: 'duration',
  price: 'price',
  status: 'status',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Subscription_usagesScalarFieldEnum = {
  id: 'id',
  provider_agent_id: 'provider_agent_id',
  customer_id: 'customer_id',
  customer_subscription_id: 'customer_subscription_id',
  provider_id: 'provider_id',
  offer_id: 'offer_id',
  total_amount: 'total_amount',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  admins: 'admins',
  cache: 'cache',
  cache_locks: 'cache_locks',
  customer_subscriptions: 'customer_subscriptions',
  customers: 'customers',
  failed_jobs: 'failed_jobs',
  job_batches: 'job_batches',
  jobs: 'jobs',
  migrations: 'migrations',
  model_has_permissions: 'model_has_permissions',
  model_has_roles: 'model_has_roles',
  oauth_access_tokens: 'oauth_access_tokens',
  oauth_auth_codes: 'oauth_auth_codes',
  oauth_clients: 'oauth_clients',
  oauth_personal_access_clients: 'oauth_personal_access_clients',
  oauth_refresh_tokens: 'oauth_refresh_tokens',
  offer_categories: 'offer_categories',
  offers: 'offers',
  orders: 'orders',
  otps: 'otps',
  payments: 'payments',
  permissions: 'permissions',
  personal_access_tokens: 'personal_access_tokens',
  provider_agents: 'provider_agents',
  provider_offers: 'provider_offers',
  providers: 'providers',
  provider_menu: 'provider_menu',
  provider_menu_items: 'provider_menu_items',
  provider_menu_categories: 'provider_menu_categories',
  role_has_permissions: 'role_has_permissions',
  roles: 'roles',
  subscription_plan_offers: 'subscription_plan_offers',
  subscription_plans: 'subscription_plans',
  subscription_usages: 'subscription_usages'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
