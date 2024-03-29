import { axiosWithAuth } from "@/api/interceptors";
import { TimeBlockResponseType, TimeBlockFormStateType } from "@/types/time-block.types";

const BASE_URL = '/user/time-blocks';

export const timeBlockService = {
  async getTimeBlocks() {
    const response = await axiosWithAuth.get<TimeBlockResponseType[]>(BASE_URL);
    return response;
  },

  async createTimeBlock(data: TimeBlockFormStateType ) {
    const response = await axiosWithAuth.post(BASE_URL, data);
    return response;
  },

  async updateTimeBlock(id: string, data: TimeBlockFormStateType) {
    const response = await axiosWithAuth.put(`${BASE_URL}/${id}`, data);
    return response;
  },

  async deleteTimeBlock(id: string) {
    const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`);
    return response;
  },

  async updateTimeBlocksOrder(ids: string[]) {
    const response = await axiosWithAuth.post(`${BASE_URL}/update-order`, { ids });
    return response;
  },
};
