export type Color = 'primary' | 'interface-300';
export type Size = 'small' | 'big';

export type TagCloudProps = {
  color?: Color;
  size?: Size;
  tags: string[];
};
