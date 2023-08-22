import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { dashboardDataState } from '../../recoil';
import { TDashboardResponse, TuseDashboardData } from '../../types';
import { useRecoilState } from 'recoil';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { dashboardGetRequest } from './request';

export const useDashboardData = (): TuseDashboardData => {
  const [get, set] = useRecoilState(dashboardDataState);
  return {
    getDashboardData: get,
    setDashboardData: (val) => set(val),
  };
};

export const useGetDashboard = (): UseQueryResult<
  TDashboardResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['dashboard-get-all'],
    queryFn: async () => await dashboardGetRequest(),
  });
