import { axiosWithOutAuth } from "@/api/interceptors"
import { AuthFormType, AuthResponseType } from '@/types/auth.types';
import { getAccessToken, removeTokenFromStorage, saveTokenStorage } from '@/services/auth-token.service';

export const authService = {
  async main (type: 'login' | 'register', data: AuthFormType) {
    const response = await axiosWithOutAuth.post<AuthResponseType>(
      `/auth/${type}`,
      data
    );
    const accessToken = response.data.accessToken;
    if (accessToken) {
      saveTokenStorage(accessToken);
    }
    return response;
  },

  async getNewTokens() {
    const response = await axiosWithOutAuth.post<AuthResponseType>(
      '/auth/login/access-token'
    );

    const accessToken = response.data.accessToken;
    if (accessToken) {
      saveTokenStorage(accessToken);
    }

    return response;
  },
  async logout() {
    const response = await axiosWithOutAuth.post<boolean>('/auth/logout');
    if(response.data) {
      removeTokenFromStorage();
    }
    return response;
  }
}