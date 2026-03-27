export interface Project {
  id: string;
  name: string;
  description: string;
  techPills: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoComponent?: string;
}

export const projects: Project[] = [
  {
    id: 'glowlocal',
    name: 'GlowLocal',
    description:
      'Direct mail marketing SaaS for med spas. Automated print-and-mail fulfillment with demographic-targeted mailing lists.',
    techPills: ['Python', 'Next.js', 'Lob API'],
    liveUrl: 'https://glowlocal.co',
    demoComponent: 'GlowLocalDemo',
  },
  {
    id: 'swiftbits',
    name: 'SwiftBits',
    description:
      'CLI tool for document embedding and semantic retrieval. Local-first architecture exposed as an MCP server for AI assistant context augmentation.',
    techPills: ['Python', 'ChromaDB', 'Click', 'MCP Server'],
    githubUrl: 'https://github.com/ZechariahEarly/swiftbits',
    demoComponent: 'SwiftBitsDemo',
  },
];
