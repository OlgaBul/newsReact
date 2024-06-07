import { IPaginationProps } from "../../model/types";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

interface Props {
  children: React.ReactNode
  top?: boolean
  bottom?: boolean
}


const Pagination = ({
  top,
  bottom,
  children,
  ...PaginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...PaginationProps} />}
      {children}
      {bottom && <PaginationButtons {...PaginationProps} />}
    </>
  );
};

export default Pagination;
