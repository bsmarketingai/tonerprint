export interface PaginationProps {
  page?: number;
  pages?: number;
  onChange?: (page: number) => void;
  /** top = kompaktní nad výpisem, bottom = pod výpisem. */
  position?: 'top' | 'bottom';
  className?: string;
}

export declare function Pagination(props: PaginationProps): JSX.Element;
