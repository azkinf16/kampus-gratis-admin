import { TMetaResponseSingle } from '@kampus-gratis/utils';

export type TUser = {
  user: {
    id: string;
    email: string;
    full_name: string;
    user_name: string;
    gender: string;
    phone_number: string;
    avatar: string;
    email_verified_at: null;
    role: string;
    created_at: string;
    updated_at: string;
  };
};

export type TAvatarItem = {
  avatar: string;
};

export type TAvatarPayload = {
  avatar?: File;
};

export type TProfilePayload = {
  full_name: string;
  email?: string;
  gender?: string;
  phone_number: string;
};

export type TUserDetailResponse = TMetaResponseSingle<TUser>;
export type TAvatarResponse = TMetaResponseSingle<TAvatarItem>;

export type TProfileCompletePayload = {
  avatar: any;
  poin: number;
  user_name: string;
  discussion_likes: number;
  discussion_posted: number;
  full_name: string;
  semester: number;
  ipk: string;
  major: string;
  role: string;
  total_certificates: number;
  current_subjects: number;
  finished_subjects: number;
};
