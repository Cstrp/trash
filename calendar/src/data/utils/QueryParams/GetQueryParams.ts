export const getQueryParams = (): Record<string, string> => {
  const searchParams = new URLSearchParams(window.location.search);
  const queryParams: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });
  return queryParams;
};
