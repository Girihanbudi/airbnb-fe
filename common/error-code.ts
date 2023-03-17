// Error Formatting Template for app
export interface ErrorCode {
  key: string; // this used for error naming code
  code: number; // this is error code for http response code
}

// Default error
export class DefaultError implements ErrorCode {
  static readonly DEFAULT_FED_001 = new DefaultError("DEFAULT_FED_001", 400);

  static readonly DEFAULT_SYS_500 = new DefaultError("DEFAULT_SYS_500", 500);

  static readonly DEFAULT_SCM_001 = new DefaultError("DEFAULT_SCM_001", 400);

  // private to disallow creating other instances of this type
  private constructor(
    public readonly key: string,
    public readonly code: number
  ) {}
}

export default ErrorCode;
