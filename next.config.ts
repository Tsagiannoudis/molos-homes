import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // ✅ Πρώτα επιτρέπουμε τα static αρχεία να περάσουν κανονικά
      {
        source: '/_next/:path*',
        destination: '/_next/:path*',
      },
      // ✅ Μετά, αν πραγματικά θες όλα τα υπόλοιπα να δείχνουν στην αρχική
      // (π.χ. single-page app συμπεριφορά)
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
