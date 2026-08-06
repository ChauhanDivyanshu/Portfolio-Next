export const withBasePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio-Next' : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};