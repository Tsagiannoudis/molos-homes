import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Molos Homes | Sold Projects',
  description: 'View our portfolio of completed and sold projects in Thassos.',
}

export default function SoldProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-[calc(100vh-400px)]">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Sold Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Villa Sunset</h3>
          <p>Πωλήθηκε το 2023. Πολυτελής βίλα με πανοραμική θέα.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">House by the Sea</h3>
          <p>Πωλήθηκε το 2022. Παραθαλάσσια κατοικία με άμεση πρόσβαση στην παραλία.</p>
        </div>
      </div>
    </main>
  );
}
