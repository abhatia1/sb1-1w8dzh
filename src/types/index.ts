export interface Stakeholder {
  name: string;
  role: string;
}

export interface Timeframe {
  duration: string;
  progress: string;
  remaining: string;
}

export interface Engagement {
  id: string;
  title: string;
  vendor: string;
  startDate: string;
  endDate: string;
  budget: string;
  description: string;
  purpose: string;
  objectives: string[];
  deliverables: string[];
  scope: string;
  stakeholders: Stakeholder[];
  timeframe: Timeframe;
}