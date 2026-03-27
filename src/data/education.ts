export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  detail: string;
  logo: string;
}

export const education: Education[] = [
  {
    school: 'Georgia Tech',
    degree: 'MSCS, AI Specialization',
    dateRange: '2026 – 2028',
    detail: 'In progress',
    logo: '/images/logos/Georgia_Tech.svg',
  },
  {
    school: 'UT Dallas',
    degree: 'BS Computer Science',
    dateRange: '2018 – 2021',
    detail: '',
    logo: '/images/logos/UT_Dallas.svg',
  },
];

export const certifications = ['AWS Solutions Architect'];
