import { TDashboardResponse } from '../../types';
import { api } from '../../config/api/apiConfig';

export const dashboardGetRequest = async (): Promise<TDashboardResponse> => {
  const { data } = await api.get('/dashboard');
  return data;
};
