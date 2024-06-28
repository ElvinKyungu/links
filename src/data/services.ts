// src/data/services.ts

interface Service {
  title: string;
  description: string;
  list: string[];
}
export const services: Record<string, Service> = {
  transport: {
    title: 'Transport Services',
    description: 'Sed gravida consequat orci in ullamcorper.',
    list: [
      'Local & International multi-mode transportation',
      'Freight',
      'Transport of hazardous materials',
      'Optimization'
    ]
  },
  logistic: {
    title: 'Logistics Solutions',
    description: 'Your logistics solution details here...',
    list: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  },
  supply: {
    title: 'Supply Chain management',
    description: 'Your logistics solution details here...',
    list: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  },
  operation: {
    title: 'Operations management',
    description: 'Your logistics solution details here...',
    list: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  },
  monitoring: {
    title: 'Monitoring',
    description: 'Your logistics solution details here...',
    list: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  },
  'escorts-tracking': {
    title: 'Escorts & Tracking',
    description: 'Your logistics solution details here...',
    list: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  }
  ,
  'escorts-experts': {
    title: 'Escots Experts Managers',
    description: 'Your logistics solution details here...',
    list: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  }
};
