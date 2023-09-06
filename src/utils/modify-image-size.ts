export function modifyImageSize(url: string, width: number, height: number): string {
  const baseUrlRegex = /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)/;
  const filenameRegex = /\/v\d+\//;

  const baseUrlMatch = url.match(baseUrlRegex);
  const filenameMatch = url.match(filenameRegex);

  if (baseUrlMatch && filenameMatch) {
    const baseUrl = baseUrlMatch[1];
    const filename = url.replace(baseUrl, '').replace(filenameRegex, '/');
    return baseUrl + `w_${width},h_${height}/` + filename;
  }

  // If the URL doesn't match the expected format, return it unchanged.
  return url;
}
