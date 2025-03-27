import { locale } from './types';

export interface FetchProfileResponse {
  data: FetchProfileData;
  message: string;
  success: boolean;
}

export interface FetchProfileData {
  birthdate: null;
  created_at: Date;
  email: null;
  first_name: null;
  gender: null;
  has_password: boolean;
  id: number;
  is_verified: boolean;
  last_name: null;
  mobile_number: string;
  roles: string[];
  status: number;
  updated_at: Date;
}

export const Profile_FetchProfile = async (token: string, locale?: locale) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/profile',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        locale: locale || 'en'
      }
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return (await response.json()) as FetchProfileResponse;
};

export interface FetchProfileSubscriptionPlansResponse {
  success: boolean;
  message: string;
  data: {
    data: Array<{
      id: number;
      order_id: number;
      start_date: string;
      end_date: string;
      status: number;
      created_at: null;
      updated_at: null;
      subscription_plan: {
        id: number;
        title: string;
        duration: number;
        price: number;
        status: number;
        description: string;
        offers: Array<{
          id: number;
          category_id: number;
          title: string;
          icon: null;
          description: string;
          price: null;
          created_at: string;
          updated_at: string;
          pivot: {
            subscription_plan_id: number;
            offer_id: number;
            discount_percentage: number;
            created_at: string;
            updated_at: string;
          };
        }>;
        created_at: string;
        updated_at: string;
      };
    }>;
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
      first_page_url: string;
      last_page_url: string;
      next_page_url: null | string;
      prev_page_url: null | string;
    };
  };
}

export const Profile_FetchProfileSubscriptionPlans = async (token: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/profile/subscription-plans',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return (await response.json()) as FetchProfileSubscriptionPlansResponse;
};

export interface UpdateProfileResponse {
  data: null;
  message: string;
  success: boolean;
}

export const Profile_UpdateProfile = async (
  token: string,
  first_name?: string,
  last_name?: string,
  gender?: 'male' | 'female',
  birthdate?: string,
  email?: string
) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/profile/update',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        first_name,
        last_name,
        gender,
        birthdate,
        email
      })
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return (await response.json()) as UpdateProfileResponse;
};







export interface FetchProfileOrdersResponse {
  data:    FetchProfileOrdersData;
  message: string;
  success: boolean;
 }
 
 export interface FetchProfileOrdersData {
  data:       FetchProfileOrdersDatum[];
  pagination: FetchProfileOrdersPagination;
 }
 
 export interface FetchProfileOrdersDatum {
  amount:           number;
  buyer_id:         number;
  buyer_type:       BuyerType;
  created_at:       Date;
  id:               number;
  payment:          Payment;
  purchasable:      Purchasable;
  purchasable_id:   number;
  purchasable_type: PurchasableType;
  status:           number;
  tracking_code:    string;
  updated_at:       Date;
 }
 
 export enum BuyerType {
  ModulesUserEntitiesCustomer = "Modules\\User\\Entities\\Customer",
 }
 
 export interface Payment {
  amount:          number;
  created_at:      Date;
  id:              number;
  paid_at:         null;
  payment_gateway: null;
  payment_method:  null;
  res_num:         string;
  status:          number;
  transaction_id:  string;
  updated_at:      Date;
 }
 
 export interface Purchasable {
  created_at:  Date;
  description: string;
  duration:    number;
  id:          number;
  offers:      Offer[];
  price:       number;
  status:      number;
  title:       Title;
  updated_at:  Date;
 }
 
 export interface Offer {
  category_id: number;
  created_at:  Date;
  description: string;
  icon:        string;
  id:          number;
  pivot:       Pivot;
  price:       null;
  title:       string;
  updated_at:  Date;
 }
 export interface Pivot {
  created_at:           Date;
  discount_percentage:  number;
  offer_id:             number;
  subscription_plan_id: number;
  updated_at:           Date;
 }
 
 export enum Title {
  کافهورستورانسهماهه = "کافه و رستوران سه ماهه",
  کافهورستورانششماهه = "کافه و رستوران شش ماهه",
  کافهورستورانیکماهه = "کافه و رستوران یکماهه",
 }
 
 export enum PurchasableType {
  ModulesSubscriptionEntitiesSubscriptionPlan = "Modules\\Subscription\\Entities\\SubscriptionPlan",
 }
 
 export interface FetchProfileOrdersPagination {
  count:          number;
  current_page:   number;
  first_page_url: string;
  last_page_url:  string;
  next_page_url:  string;
  per_page:       number;
  prev_page_url:  null;
  total:          number;
  total_pages:    number;
 }
 







export const Profile_FetchProfileOrders = async (
  token: string,
) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/orders',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return (await response.json()) as FetchProfileOrdersResponse;
};
