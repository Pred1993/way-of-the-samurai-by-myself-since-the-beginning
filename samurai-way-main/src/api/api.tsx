import axios from 'axios';
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d',
  },
});
// create подкапотная функция axios которая позволяет вынести аргумент config в отдельную переменную. Оставил как пример изначального сонтаксиса followUsers и UnfollowUsers. В запросе post config передается третим аргументом, а в запросе delete и get вторым

export const getUsers = (currentPage: number, pageSize: number) => {
  return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
};

export const follow = (userId: number) => {
  return axios
    .post(
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
};

export const unfollow = (userId: number) => {
  return axios
    .delete(baseUrl + `follow/${userId}`, {
      withCredentials: true,
      headers: {
        'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d',
      },
    })
    .then((response) => response.data);
};
