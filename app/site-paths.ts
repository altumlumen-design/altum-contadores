const rawBase = (import.meta as ImportMeta & { env: { BASE_URL?: string } }).env.BASE_URL || '/';

export const siteBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function sitePath(path = '') {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return `${siteBase}${cleanPath}`;
}

export function assetPath(fileName: string) {
  return sitePath(fileName);
}
