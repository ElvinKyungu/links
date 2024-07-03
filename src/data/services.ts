// src/data/services.ts

interface Service {
  title: string;
  description: string;
  list: string[];
}
export const services: Record<string, Service> = {
  transport: {
    title: 'Transport Services',
    description: 'We provide a comprehensive suite of services designed to optimize your logistics. We manage routes, schedules, and resources, ensuring on-time deliveries, minimized costs, and seamless communication..',
    list: [
      'Local & International multi-mode transportation',
      'Freight',
      'Transport of hazardous materials',
      'Transport Optimization'
    ]
  },
  logistic: {
    title: 'Logistics Solutions',
    description: "We are your one-stop shop for streamlined logistics solutions. We'll take the wheel, ensuring your products get where they need to be, on time and hassle-free.",
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
    description: 'We understand the importance of a robust and optimized supply chain. Our team of experienced professionals works closely with you to identify bottlenecks, streamline processes, and implement data-driven solutions.',
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
    description: 'We offer a team of seasoned operations management professionals dedicated to streamlining your processes and maximizing your efficiency.',
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
    description: 'Our advanced monitoring systems keep a watchful eye on your assets, providing real-time data and immediate alerts for any potential issues.',
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
    description: 'Our secure escort and tracking services ensure the safe and efficient movement of your high-value assets, with complete transparency throughout the journey.',
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
    description: 'Escorts Experts provides a team of highly-trained managers adept at handling complex logistics and high-end arrangements.',
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
