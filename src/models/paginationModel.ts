export default interface IPagination {
  nextPage: number | null;
  page: number;
  previousPage: number | null;
  size: number;
  totalItems: number;
  totalPages: number;
}
