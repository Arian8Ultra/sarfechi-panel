import { cookies } from "next/headers";

export interface AdminLoginResponse {
  data: AdminLoginData;
  message: string;
  success: boolean;
}

export interface AdminLoginData {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  role: string[];
  user: AdminLoginUser;
}

export interface AdminLoginUser {
  birthdate: null;
  created_at: Date;
  email: string;
  first_name: string;
  gender: string;
  has_password: boolean;
  id: number;
  is_verified: boolean;
  last_name: string;
  mobile_number: string;
  roles: string[];
  status: number;
  updated_at: Date;
}

export const Admin_Login = async (mobile_number: string, password: string) => {
  console.log(mobile_number, password);
  if (!mobile_number || !password) {
    throw new Error("شماره موبایل و رمز عبور را وارد کنید");
  }
  if (mobile_number.length < 10) {
    throw new Error("شماره موبایل باید 11 رقم باشد");
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/v1/admin/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: `{"mobile_number":"${mobile_number}","password":"${password}"}`,
    },
  );
  return (await response.json()) as AdminLoginResponse;
};

export type AdminLogoutResponse = {
  success: boolean;
  message: string;
  data: null;
};
export const Admin_Logout = async (token: string) => {
  if (!token) {
    throw new Error("توکن را وارد کنید");
  }
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/v1/admin/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return (await response.json()) as AdminLogoutResponse;
};

export const Admin_FetchPendingCardToCards = async (token?: string) => {
  const cookieToken = token || (await cookies()).get("access_token")?.value;
  if (!cookieToken) {
    throw new Error("توکن را وارد کنید");
  }
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/v1/admin/show-pending",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${cookieToken}`,
      },
    },
  );
  return (await response.json()) as FetchPendingCardToCardsResponse;
};
export const Admin_ApprovePendingCardToCards = async (id:number,token?: string) => {
  const cookieToken = token || (await cookies()).get("access_token")?.value;
  if (!cookieToken) {
    throw new Error("توکن را وارد کنید");
  }
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/v1/admin/verify-payment-cart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${cookieToken}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    },
  );
  return (await response.json()) as FetchPendingCardToCardsResponse;
};

export interface FetchPendingCardToCardsResponse {
  data: FetchPendingCardToCardsDatum[];
  message: string;
  success: boolean;
}

export interface FetchPendingCardToCardsDatum {
  amount: number;
  buyer_id: number;
  buyer_type: string;
  created_at: Date;
  id: number;
  purchasable_id: number;
  purchasable_type: string;
  status: number;
  tracking_code: string;
  updated_at: Date;
}
