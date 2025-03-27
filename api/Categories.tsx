import { locale } from './types';
export interface FetchCategoriesResponse {
  data:    FetchCategoriesData;
  message: string;
  success: boolean;
 }
 
 export interface FetchCategoriesData {
  data:       Category[];
  pagination: Pagination;
 }
 
 export interface Category {
  created_at:  Date;
  description: string;
  icon:        string;
  id:          number;
  status:      number;
  title:       string;
  updated_at:  Date;
 }
 
 export interface Pagination {
  count:          number;
  current_page:   number;
  first_page_url: string;
  last_page_url:  string;
  next_page_url:  null;
  per_page:       number;
  prev_page_url:  null;
  total:          number;
  total_pages:    number;
 }
 
export const Categories_FetchCategories = async (locale?: locale) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/offer-categories',
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
  return data as FetchCategoriesResponse;
};






export interface FetchCategoriesProvidersResponse {
  data:    FetchCategoriesProvidersData;
  message: string;
  success: boolean;
 }
 
 export interface FetchCategoriesProvidersData {
  data:       FetchCategoriesProvidersDatum[];
  pagination: Pagination;
 }

 export interface FetchCategoriesProvidersDatum {
  category:   Category;
  id:         number;
  main_image: string;
  name:       string;
 }

export const Categories_FetchCategoriesProviders = async (id: number, locale?: locale) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/v1/offer-categories/providers/${id}`,
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
  return data as FetchCategoriesProvidersResponse;
}