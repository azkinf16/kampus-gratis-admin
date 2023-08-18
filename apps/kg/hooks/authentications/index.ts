import { TRegisterPayload } from '../../types/authentications';
import { REGISTER, TMetaErrorResponse, TMetaItem } from '@kampus-gratis/utils';
import { api } from '../../config';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

const registerRequest = async (payload: TRegisterPayload): Promise<TMetaItem> =>
  await api.post(REGISTER, payload);

export const useRegister = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TRegisterPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: async (payload) => await registerRequest(payload),
  });
