import { Pagination } from "./Categories";
import { locale } from "./types";



export interface FetchSubscriptionsResponse {
    data:    FetchSubscriptionsData;
    message: string;
    success: boolean;
   }
   
   export interface FetchSubscriptionsData {
    data:       FetchSubscriptionsDatum[];
    pagination: Pagination;
   }
   
   export interface FetchSubscriptionsDatum {
    created_at:  Date;
    description: string;
    duration:    number;
    id:          number;
    offers:      FetchSubscriptionsOffer[];
    price:       number;
    status:      number;
    title:       string;
    updated_at:  Date;
   }
   
   export interface FetchSubscriptionsOffer {
    category:    FetchSubscriptionsCategory;
    category_id: number;
    created_at:  Date;
    description: string;
    icon:        string;
    id:          number;
    pivot:       FetchSubscriptionsPivot;
    price:       null;
    title:       string;
    updated_at:  Date;
   }
   
   export interface FetchSubscriptionsCategory {
    created_at:  Date;
    description: string;
    icon:        string;
    id:          number;
    status:      number;
    title:       string;
    updated_at:  Date;
   }
   
   export interface FetchSubscriptionsPivot {
    created_at:           Date;
    discount_percentage:  number;
    offer_id:             number;
    subscription_plan_id: number;
    updated_at:           Date;
   }

   


export const Subscriptions_FetchSubscriptions = async (locale?: locale) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/v1/subscription-plans`,
    {
      headers: locale
        ? {
            locale: locale
          }
        : {},
      method: 'GET'
    }
  );
  const data = await response.json();
  return data as FetchSubscriptionsResponse;
}