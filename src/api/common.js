import request from "../utils/request";

export function getSwiperData() {
  return request.get('/index.json')
}