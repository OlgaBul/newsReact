import styles from "./styles.module.css";
import Image from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../Interfaces";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;