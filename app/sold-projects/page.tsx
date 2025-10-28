import React from 'react';
import type { Metadata } from "next";
import SoldProjectList from '@/components/constructions/SoldProjects';

export const metadata: Metadata = {
  title: 'Molos Homes | Sold Projects',
  description: 'View our portfolio of sold projects in Thassos.',
}

export default function SoldProjectsPage() {

  return (
  <>
    <SoldProjectList />
  </>
);  

}