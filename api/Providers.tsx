import { Pagination } from "./Categories";
import { locale } from "./types";

export interface FetchProviderResponse {
  data: FetchProviderData;
  message: string;
  success: boolean;
}

export interface FetchProviderData {
  address: string;
  category: FetchProviderCategory;
  category_id: number;
  created_at: Date;
  description: string;
  id: number;
  latitude: string;
  longitude: string;
  main_image: string;
  name: string;
  offers: FetchProviderOffer[];
  phone_number: string[];
  slider_images: string[];
  status: number;
  updated_at: Date;
}

export interface FetchProviderCategory {
  created_at: Date;
  description: string;
  icon: string;
  id: number;
  status: number;
  title: string;
  updated_at: Date;
}

export interface FetchProviderOffer {
  category_id: number;
  created_at: Date;
  description: string;
  icon: string;
  id: number;
  pivot: FetchProviderPivot;
  price: null;
  title: string;
  updated_at: Date;
}

export interface FetchProviderPivot {
  offer_id: number;
  provider_id: number;
}

export const Providers_FetchProvider = async (id?: number, locale?: locale) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/v1/providers/" + id,
    {
      headers: locale
        ? {
            locale: locale,
          }
        : {},
      method: "GET",
    },
  );
  const data = await response.json();
  return data as FetchProviderResponse;
};

// FetchProviders
export interface FetchProvidersResponse {
  data: FetchProvidersData;
  message: string;
  success: boolean;
}

export interface FetchProvidersData {
  data: FetchProvidersProvider[];
  pagination: Pagination;
}

interface FetchProvidersProvider {
  category: FetchProvidersCategory;
  id: number;
  main_image: string;
  name: string;
}

interface FetchProvidersCategory {
  id: number;
  title: string;
}

export const Providers_FetchProviders = async (
  locale?: locale,
  page?: number,
  perPage?: number,
) => {
  const params = new URLSearchParams();
  if (page) {
    params.append("page", page.toString());
  }
  if (perPage) {
    params.append("perPage", perPage.toString());
  }
  const url = new URL(process.env.NEXT_PUBLIC_API_URL + "/api/v1/providers");
  if (params.toString()) {
    url.search = params.toString();
  }

  const response = await fetch(url.toString(), {
    headers: locale
      ? {
          locale: locale,
        }
      : {},
    method: "GET",
  });
  const data = await response.json();
  return data as FetchProvidersResponse;
};
