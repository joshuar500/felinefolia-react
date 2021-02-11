// this should be handles using react router
// but since i'm lazy, we're doing it this way

const protectedRoutes = ['/dashboard', '/subscribe'];

export function isAuthenticatedRoute() {
  const pathname = window.location.pathname;
  return protectedRoutes.includes(pathname);
}
