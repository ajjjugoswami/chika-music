export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface ImageCredit {
  imageId: string;
  title: string;
  photographer: string;
  source: string;
  license: string;
  url: string;
}
