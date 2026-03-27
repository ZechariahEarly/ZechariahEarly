export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  summary: string;
  logoText: string;
}

export const experiences: Experience[] = [
  {
    company: 'Capital One',
    role: 'Senior Software Engineer',
    dateRange: '2023 – Present',
    summary: 'Loan decisioning systems & streaming infrastructure',
    logoText: 'C1',
  },
  {
    company: 'JPMorgan Chase',
    role: 'Software Engineer',
    dateRange: '2022 – 2023',
    summary: 'Investment banking technology & trade processing',
    logoText: 'JPM',
  },
  {
    company: 'Citi',
    role: 'Software Engineer',
    dateRange: '2021 – 2022',
    summary: 'Risk analytics & financial data platforms',
    logoText: 'CITI',
  },
];
