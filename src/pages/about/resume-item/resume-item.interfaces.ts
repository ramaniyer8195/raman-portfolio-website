export interface ResumeItem {
  id: number;
  category: ResumeCategory;
  year: string;
  title: string;
  name: string;
  description: string;
}

export enum ResumeCategory {
  "EDUCATION",
  "EXPERIENCE",
}

export interface ResumeItemProps {
  item: ResumeItem;
}
