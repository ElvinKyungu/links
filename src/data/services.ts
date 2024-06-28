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
      'Transport Optimization'
    ]
  },
  logistic: {
    title: 'Logistics Solutions',
    description: 'Your logistics solution details here...',
    list: [
      'Local & International Logistics',
      'Warehousing And distribu9',
      'Import & Export',
      'Clearing and forwarding',
      'Integrated Logistics ',
      'On-site Logistics '
    ]
  },
  supply: {
    title: 'Supply Chain management',
    description: 'Your logistics solution details here...',
    list: [
      'IT And industrial equipment supply',
      'Supply of construction materials and aggregates',
      'Services supply',
      'Monitoring performance supply',
      'Supply chain consultancy',
      'Safety management',
      'Digital Solutions'
    ]
  },
  operation: {
    title: 'Operations management',
    description: 'Your logistics solution details here...',
    list: [
      'Process planning and optimization',
      'Service design',
      'Resource management',
      'Quality control',
      'Continuous improvement of processes and services'
    ]
  },
  monitoring: {
    title: 'Monitoring',
    description: 'Your logistics solution details here...',
    list: [
      'We provide Uniformed escorts officers',
      'Witness loading and recording of commodities',
      'Prevent tempering or removal of product along the route', 
      'Ensure a Detailed handover of products at destination', 
      'Record misconduct of drivers or misuse of vehicles' 
    ]
  },
  'escorts-tracking': {
    title: 'Escorts & Tracking',
    description: 'Your logistics solution details here...',
    list: [
      'Monitoring of clients’ goods during uploading, transportation, and offloading stage',
      'Monitoring of the service delivery by the transportation companies that have been appointed by the clients',
      'Recommend the best route track to be used by the transportation company',
      'Monitoring of the implementation of the risk management standards', 
      'Real-time tracking and 24/7 armed protection', 
      'Personal close protection teams and response units',

    ]
  }
  ,
  'escorts-experts': {
    title: 'Escots Experts Managers',
    description: 'Your logistics solution details here...',
    list: [
      'Supervise and control the specific teams',
      'Report to the client on a daily base about current operations', 
      'Responsable for Logistics & Escort during transit',
      'Operations planning and delivery',
      'Highly professional from military and other security agencies maintain oversight of all operations',
      'Expert will supervise and coordinate teams with 24/7 real-time monitoring', 
      'In each region there will be at least one expert who will control and manage the daily Operations',
      'Controlled checkpoints with response units on call',
      'Ground truth and intelligence led planning identifying and mitigating risk' 
    ]
  }
};
