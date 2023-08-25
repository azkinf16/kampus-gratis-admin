'use client';

import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  TAvatarPayload,
  TAvatarResponse,
  TProfilePayload,
  TUserCompletePayload,
  TUserDetailResponse,
} from '../../types/profile';
import { useSession } from 'next-auth/react';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UpdateAvatarProfile,
  UpdateUserProfile,
  profileCompleteRequest,
  profileRequest,
} from './request';

export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-me'],
    queryFn: async () => await profileRequest(),
  });
};

export const useProfileComplete = (): UseQueryResult<
  TUserCompletePayload,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-complete'],
    queryFn: async () => await profileCompleteRequest(),
  });
};

export const useUpdateUserProfile = (): UseMutationResult<
  TUserDetailResponse,
  TMetaErrorResponse,
  TProfilePayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-user-profile'],
    mutationFn: async (payload) => await UpdateUserProfile(payload),
  });
};

export const useUpdateAvatar = (): UseMutationResult<
  TAvatarResponse,
  TMetaErrorResponse,
  TAvatarPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-avatar-profile'],
    mutationFn: async (payload) => await UpdateAvatarProfile(payload),
  });
};
