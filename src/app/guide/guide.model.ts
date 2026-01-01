export interface GuideStep {
  id: string;
  title: string;
  content: string;
  image: string;
}

export interface GuideChapter {
  number: number;
  title: string;
  steps: GuideStep[];
}

