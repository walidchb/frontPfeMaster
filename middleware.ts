import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'fr'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// import {clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';
// import createMiddleware from 'next-intl/middleware';
 
// const intlMiddleware = createMiddleware({
//   locales: ['en', 'fr'],
//   defaultLocale: 'en'
// });
 
// const isProtectedRoute = createRouteMatcher(['/:locale/About(.*)']);
 
// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
 
//   return intlMiddleware(req);
// });
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(fr|en)/:path*']
// };