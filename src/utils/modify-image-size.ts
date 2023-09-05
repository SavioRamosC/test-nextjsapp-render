export function modifyImageUrl(url: string): string {
  const baseUrlRegex = /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)/;
  const filenameRegex = /\/v\d+\//;

  const baseUrlMatch = url.match(baseUrlRegex);
  const filenameMatch = url.match(filenameRegex);

  if (baseUrlMatch && filenameMatch) {
    const baseUrl = baseUrlMatch[1];
    const filename = url.replace(baseUrl, '').replace(filenameRegex, '/');
    return baseUrl + 'w_320,h_180/' + filename;
  }

  // If the URL doesn't match the expected format, return it unchanged.
  return url;
}
