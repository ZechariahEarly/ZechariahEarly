export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  detail: string;
  logoText: string;
}

export const education: Education[] = [
  {
    school: 'Georgia Tech',
    degree: 'MSCS, AI Specialization',
    dateRange: '2026 – 2028',
    detail: 'In progress',
    logoText: 'GT',
  },
  {
    school: 'UT Dallas',
    degree: 'BS Computer Science',
    dateRange: '2018 – 2021',
    detail: '',
    logoText: 'UTD',
  },
];

export const certifications = ['AWS Solutions Architect'];
