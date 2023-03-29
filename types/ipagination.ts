export interface IPagination {
  limit: number;
  page: number;
  pageSize: number;
}

export const ipaginationKeys: (keyof IPagination)[] = [
  "limit",
  "page",
  "pageSize",
];

export const defaultPagination: IPagination = {
  limit: 25,
  page: 1,
  pageSize: 0,
};

export default IPagination;
