import { axiosWithAuth } from "@/api/interceptors";
import { PomodoroSessionResponseType, PomodoroSessionStateType, PomodoroRoundStateType } from "@/types/pomodoro.types";

const BASE_URL = '/user/timer';

export const pomodoroService = {
  async getTodaySession() {
    const response = await axiosWithAuth.get<PomodoroSessionResponseType>(`${BASE_URL}/today`);
    return response;
  },

  async createSession() {
    const response = await axiosWithAuth.post(BASE_URL);
    return response;
  },

  async updateSession(id: string, data: PomodoroSessionStateType) {
    const response = await axiosWithAuth.put(`${BASE_URL}/${id}`, data);
    return response;
  },

  async deleteSession(id: string) {
    const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`);
    return response;
  },

  async updateRound(id: string, data: PomodoroRoundStateType) {
    const response = await axiosWithAuth.put(`${BASE_URL}/round/${id}`, data);
    return response;
  },
};
