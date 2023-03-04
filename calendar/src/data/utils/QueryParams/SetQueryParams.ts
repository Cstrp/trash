export const setQueryParams = (queryObject: Record<string, string>, path?: string): string => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(queryObject).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  });

  const newPathname = path || window.location.pathname;
  const newUrl = newPathname + '?' + searchParams.toString();
  window.history.pushState({ path: newUrl }, '', newUrl);
  return newUrl;
};
