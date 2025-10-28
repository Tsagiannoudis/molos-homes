import React from 'react';
import type { Metadata } from "next";
import NewProjectList from '@/components/constructions/NewProjects';

export const metadata: Metadata = {
  title: 'Molos Homes | New Projects',
  description: 'View our portfolio of completed projects in Thassos.',
}

export default function NewProjectsPage() {

  return (
  <>
    <NewProjectList />
  </>
);  
}