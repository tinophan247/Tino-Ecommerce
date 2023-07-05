/* eslint-disable import/no-anonymous-default-export */ 
import { ApiService } from "./api.services"; 

export class ApiAuthGateWay extends ApiService {
  register(payload) {
    return this.post('customer/register', payload);
  }  

  login(payload) {
    return this.post('customer/login', payload);
  };
}
export default new ApiAuthGateWay();