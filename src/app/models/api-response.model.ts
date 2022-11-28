export interface ApiResponseModel<T> {
  readonly status: string;
  readonly data: T;
}
