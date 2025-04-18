export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  postedDate: string;
  url: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  type: string;
  imageUrl?: string;
}

export interface MentorshipProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  mentorName: string;
  mentorTitle: string;
  topics: string[];
  startDate: string;
}

export interface AnalyticsData {
  totalConversations: number;
  averageRating: number;
  popularTopics: {topic: string, count: number}[];
  responseAccuracy: number;
}