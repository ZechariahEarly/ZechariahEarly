export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  summary: string;
  logo: string;
}

export const experiences: Experience[] = [
  {
    company: 'Capital One',
    role: 'Senior Software Engineer',
    dateRange: '2025 – Present',
    summary: 'Loan decisioning systems & streaming infrastructure',
    logo: '/images/logos/Capital_One_logo.svg',
  },
  {
    company: 'JPMorgan Chase',
    role: 'Software Engineer II',
    dateRange: '2023 – 2025',
    summary: 'Fraud prevention technology & machine learning modeling',
    logo: '/images/logos/J_P_Morgan_Logo.svg',
  },
  {
    company: 'Citi',
    role: 'Software Engineer',
    dateRange: '2022 – 2023',
    summary: 'Foundational platforms & customer products',
    logo: '/images/logos/Citi.svg',
  },
];
