import styles from './AboutPage.module.css';

/**
 * 关于牧族鸡蛋页面
 * 展示品牌介绍长图，支持滚动查看
 */
export default function AboutPage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.aboutImage}
        src="/about-muzu.jpg"
        alt="关于牧族"
      />
    </div>
  );
}
