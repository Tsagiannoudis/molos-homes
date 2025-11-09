import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // Αυτή η ανακατεύθυνση είναι πολύ γενική και θα ανακατευθύνει όλα τα αιτήματα στην αρχική σελίδα.
      // Ενδέχεται να μην είναι αυτό που θέλετε, καθώς θα απενεργοποιήσει όλες τις άλλες σελίδες και API routes.
      // Αν χρειάζεστε ανακατευθύνσεις, ορίστε τις πιο συγκεκριμένα.
      {
        source: '/:path*',
        destination: '/',
      },
      //Η παρακάτω γραμμή είναι συνήθως περιττή, καθώς το Next.js διαχειρίζεται το /_next/ αυτόματα.
      {
        source: '/_next/:path*',
        destination: '/_next/:path*',
      },
    ]
  }
}

export default nextConfig;
