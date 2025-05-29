
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link?: string;
  abstract?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
  certificateLink?: string; // URL or path to certificate image/PDF
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  category: string; 
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  sources?: GroundingSource[];
  isLoading?: boolean;
}

export interface GroundingSource {
  uri: string;
  title: string;
}

export interface NavLink {
  id: string;
  title: string;
}