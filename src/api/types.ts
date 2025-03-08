export interface Question {
  id: string;
  content: string;
}

export interface Alternative {
  id: string;
  content: string;
  value: number;
}

export interface AwnserResponse {
  [key: string]: string;
}