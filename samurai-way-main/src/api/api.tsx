import axios from 'axios';
import { UsersType } from '../redux/usersPage-reducer';
import { ProfileUsersType } from '../redux/profilePage-reducer';
import { FormDataType } from '../Components/Login/LoginForm/LoginForm';
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d',
  },
};
const instance = axios.create({
  ...settings,
});

// create подкапотная функция axios которая позволяет вынести аргумент config в отдельную переменную. Оставил как пример изначального сонтаксиса followUsers и UnfollowUsers. В запросе post config передается третим аргументом, а в запросе delete и get вторым

export type getUsersApi = {
  error: string;
  items: UsersType[];
  totalCount: number;
};

export type authApiType = {
  id: number;
  login: string;
  email: string;
};
export type ResponseType<T> = {
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
  data: T;
};

export const UserApi = {
  getUsersApi(currentPage: number, pageSize: number) {
    return instance
      .get<getUsersApi>(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followApi(userId: number) {
    return axios
      .post<ResponseType<{}>>(
        baseUrl + `follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d',
          },
        },
      )
      .then((response) => response.data);
  },
  unfollowApi(userId: number) {
    return axios
      .delete<ResponseType<{}>>(baseUrl + `follow/${userId}`, {
        withCredentials: true,
        headers: {
          'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d',
        },
      })
      .then((response) => response.data);
  },
};

export const profileApi = {
  setProfileApi(userId: string) {
    return instance.get<ProfileUsersType>(baseUrl + `profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get<string>(baseUrl + `/profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType<{}>>(baseUrl + `/profile/status`, { status: status });
  },
};

export const authApi = {
  authMeApi() {
    return instance.get<ResponseType<authApiType>>(baseUrl + `auth/me`);
  },
  login(formData: FormDataType) {
    return instance.post<ResponseType<{ usrID: string }>>(baseUrl + `auth/login`, formData);
  },
  logout() {
    return instance.delete<ResponseType<{}>>(baseUrl + `auth/login`);
  },
};
