import StdError from "./std-error";

export interface StdResponse {
  data?: any;
  metadata?: any;
  error?: StdError;
}

export default StdResponse;
