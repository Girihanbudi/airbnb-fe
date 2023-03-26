import { DefaultError } from "./error-code";

export interface StdError {
  internalCode: string;
  message: string;
}

export const ServerErrorResponseAPI: StdError = {
  internalCode: DefaultError.DEFAULT_SYS_500.key,
  message: "",
};

export default StdError;
