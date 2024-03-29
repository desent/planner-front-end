import { axiosWithAuth } from "@/api/interceptors";
import { TaskType, TypeTaskFormStateType } from "@/types/task.types";

const BASE_URL = '/user/tasks';

export const timeBlockService = {
  async getTasks() {
    const response = await axiosWithAuth.get<TaskType[]>(BASE_URL);
    return response;
  },

  async createTask(data: TypeTaskFormStateType) {
    const response = await axiosWithAuth.post(BASE_URL, data);
    return response;
  },

  async updateTask(id: string, data: TypeTaskFormStateType) {
    const response = await axiosWithAuth.put(`${BASE_URL}/${id}`, data);
    return response;
  },

  async deleteTimeBlock(id: string) {
    const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`);
    return response;
  },
};
