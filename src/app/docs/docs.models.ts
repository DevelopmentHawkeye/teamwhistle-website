export interface DocSection {
  id: string;
  title: string;
  children?: DocSection[];
  blocks: DocBlock[];
}

export type DocBlock =
  | TextBlock
  | ImageBlock
  | TipBlock
  | WarningBlock
  | HeadingBlock;

interface BaseBlock {
  type: string;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string;
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string;
}

export interface TipBlock extends BaseBlock {
  type: 'tip';
  content: string;
}

export interface WarningBlock extends BaseBlock {
  type: 'warning';
  content: string;
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  content: string;
}