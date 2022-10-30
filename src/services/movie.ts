import { AxiosPromise } from 'axios';
import { request } from '../configs/axios';
import { GROUP_ID } from '../constants/common';
import { Movie } from '../interfaces/movie';

export const fetchMovieListApi = (): AxiosPromise<HttpResponse<Movie[]>> => {
  return request({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
    method: 'GET',
  });
};
