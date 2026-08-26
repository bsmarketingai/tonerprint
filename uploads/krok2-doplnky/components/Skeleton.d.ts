export interface SkeletonProps {
  /** image, name, short nebo price — rozměry odpovídají produktové kartě. */
  variant?: 'image' | 'name' | 'short' | 'price';
  /** Vlastní rozměr, když varianta nesedí. */
  width?: string | number;
  height?: string | number;
  className?: string;
}

export declare function Skeleton(props: SkeletonProps): JSX.Element;
export declare function ProductCardSkeleton(): JSX.Element;
