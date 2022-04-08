const BLOG = "/blog";

export function blogUrl(subRoute) {
  if (!subRoute) {
    return BLOG;
  }
  return `${BLOG}${subRoute}`;
}
