import { MetadataRoute } from 'next';
import { NewProjects } from '@/data/newProjectsData';
import { SoldProjects } from '@/data/soldProjectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.molos-homes.gr';

  // Στατικές σελίδες
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly'as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Δυναμικές σελίδες για τα νέα projects
  const newProjectRoutes = NewProjects.map((project) => ({
    url: `${baseUrl}/new-projects/${project.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Δυναμικές σελίδες για τα πουλημένα projects
  const soldProjectRoutes = SoldProjects.map((project) => ({
    url: `${baseUrl}/sold-projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...newProjectRoutes,
    ...soldProjectRoutes,
  ];
}
