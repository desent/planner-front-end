import { axiosWithAuth } from '@/api/interceptors';

import { UserType, UserFormType } from '@/types/user.types';

export type ProfileResponseType = {
  user: UserType;
  statistics: {
    label: string;
    value: string;
  }[];
};

const BASE_URL = '/user/profile';

export const userService = {
  async getProfile() {
    const response = await axiosWithAuth.get<ProfileResponseType>(BASE_URL);
    return response.data;
  },

  async update(data: UserFormType) {
    const response = await axiosWithAuth.put(BASE_URL, data);
    return response.data;
  },
};
