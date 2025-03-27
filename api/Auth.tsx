
export interface RequestOTPResponse {
  data: RequestOTPData;
  message: string;
  success: boolean;
}

interface RequestOTPData {
  code: string;
}

export const Auth_RequestOTP = async (
  mobile_number: string,
) => {
  const form = new FormData();
  form.append('mobile_number', mobile_number);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/request-otp',
    {
      method: 'POST',
      body: form,
    }
  );

  return await response.json() as RequestOTPResponse;
};




export interface VerifyOTPResponse {
  data:    VerifyOTPData;
  message: string;
  success: boolean;
 }
 
 export interface VerifyOTPData {
  access_token:  string;
  expires_in:    number;
  refresh_token: string;
  role:          string[];
  user:          VerifyOTPUser;
 }
 
 export interface VerifyOTPUser {
  birthdate:     null;
  created_at:    Date;
  email:         null;
  first_name:    null;
  gender:        null;
  has_password:  boolean;
  id:            number;
  is_verified:   boolean;
  last_name:     null;
  mobile_number: string;
  roles:         string[];
  status:        number;
  updated_at:    Date;
 }
 

export const Auth_VerifyOTP = async (
  mobile_number: string,
  otp: string,
) => {
  const form = new FormData();
  form.append('mobile_number', mobile_number);
  form.append('otp', otp);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/verify-otp',
    {
      method: 'POST',
      body: form,
    }
  );
  return await response.json() as VerifyOTPResponse;
};




export interface ForgotPasswordResponse {
  data:    ForgotPasswordData;
  message: string;
  success: boolean;
 }
 
 export interface ForgotPasswordData {
  code: string;
 }
 
export const Auth_ForgotPassword = async (
  mobile_number: string,
) => {
  const form = new FormData();
  form.append('mobile_number', mobile_number);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/forgot-password',
    {
      method: 'POST',
      body: form,
    }
  );
  return await response.json() as ForgotPasswordResponse;
};



export interface ResetPasswordResponse {
  data:    null;
  message: string;
  success: boolean;
 }


export const Auth_ResetPassword = async (
  mobile_number: string,
  otp: string,
  password: string,
  password_confirmation: string,
) => {
  const form = new FormData();
  form.append('mobile_number', mobile_number);
  form.append('otp', otp);
  form.append('password', password);
  form.append('password_confirmation', password_confirmation);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/reset-password',
    {
      method: 'POST',
      body: form,
    }
  );
  return await response.json() as ResetPasswordResponse;
};



export const Auth_Login = async (
  mobile_number: string,
  password: string,
) => {
  const form = new FormData();
  form.append('mobile_number', mobile_number);
  form.append('password', password);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/v1/login',
    {
      method: 'POST',
      body: form,
    }
  );
  return await response.json() as VerifyOTPResponse;
};
