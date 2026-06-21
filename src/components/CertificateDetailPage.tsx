import React from 'react';
import styles from './CertificateDetailPage.module.css';

interface CertificateDetailPageProps {
  onBack: () => void;
  /** 从查询页传入的日期 */
  date: Date;
}

/** 格式化日期为 YYYY-MM-DD */
const formatDate = (date: Date): string => {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/**
 * 合格证书详情页
 * 复刻参考页面样式：绿色主题、卡片式布局
 * 日期字段动态填充自查询页选择
 */
const CertificateDetailPage: React.FC<CertificateDetailPageProps> = ({ onBack, date }) => {
  const dateStr = formatDate(date)

  return (
    <div className={styles.page}>
      {/* 顶部标题栏 */}
      <div className={styles.header}>
        <div className={styles.backBtn} onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className={styles.headerTitle}>合格证查询</div>
        <div className={styles.headerPlaceholder} />
      </div>

      {/* 主内容区 */}
      <div className={styles.content}>
        {/* 合格证主卡片 */}
        <div className={styles.certCard}>
          <div className={styles.certCardInner}>
            {/* 标题 */}
            <div className={styles.certTitle}>承诺达标合格证</div>
            <div className={styles.certNo}>合格证编号：3707820012605170000142</div>

            {/* 承诺内容 */}
            <div className={styles.promiseBox}>
              <div className={styles.promiseLabel}>我承诺对生产销售的食用农产品：</div>
            </div>
            <div className={styles.promiseItem}>未使用禁用农药、兽药及其他化合物；</div>
            <div className={styles.promiseItem}>使用的常规农药、兽药残留不超标。</div>

            {/* 承诺依据 */}
            <div className={styles.basisRow}>
              <span className={styles.basisLabel}>承诺依据：</span>
              <span className={styles.checkboxChecked}>☑ 质量安全控制符合要求</span>
              <span className={styles.checkboxUnchecked}>☐ 自行检测合格</span>
              <span className={styles.checkboxUnchecked}>☐ 委托检测合格</span>
            </div>

            {/* 产品信息 */}
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>产品名称：</span>
              <span className={styles.infoValue}>鲜鸡蛋</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>重量或数量：</span>
              <span className={styles.infoValue}>312681枚</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>产地：</span>
              <span className={styles.infoValue}>山东省潍坊市诸城市石桥子镇枳房村</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>承诺主体：</span>
              <span className={styles.infoValue}>山东牧族生态农业科技有限公司</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>联系方式：</span>
              <span className={styles.infoValue}>0536-2993768</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>开具时间：</span>
              {/* 动态日期 */}
              <span className={styles.infoValue}>{dateStr}</span>
            </div>
          </div>
        </div>

        {/* 承诺依据卡片 */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>☰</div>
            <div className={styles.sectionTitle}>承诺依据</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.proofRow}>
            <span className={styles.proofLabel}>质量安全控制符合要求证明：</span>
            <div className={styles.proofImages}>
              <img className={styles.proofImg} src="/cert1.png" alt="证书1" />
              <img className={styles.proofImg} src="/cert2.png" alt="证书2" />
              <img className={styles.proofImg} src="/cert3.png" alt="证书3" />
            </div>
          </div>
        </div>

        {/* 购货方卡片 */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>📋</div>
            <div className={styles.sectionTitle}>购货方</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>名称：</span>
            <span className={styles.infoValue}>山东牧族生态农业科技有限公司</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>地址：</span>
            <span className={styles.infoValue}>山东省潍坊市诸城市石桥子镇枳房村</span>
          </div>
        </div>

        {/* 区块链认证查询卡片 */}
        <div className={styles.blockchainCard}>
          <div className={styles.blockchainHeader}>
            <div className={styles.blockchainIcon}>⬆</div>
            <div className={styles.blockchainTitle}>区块链认证查询</div>
            <div className={styles.blockchainIcon}>⬇</div>
          </div>
          <div className={styles.blockchainContent}>
            <div className={styles.blockchainRow}>
              <span className={styles.blockchainLabel}>该批次农产品区块链ID：</span>
              <span className={styles.blockchainValue}>0x2c47f89f629931704c6531cec86f315f415b805fec57d81565ebf33f25bf3f2</span>
            </div>
            <div className={styles.blockchainRow}>
              <span className={styles.blockchainLabel}>查询次数：</span>
              <span className={styles.blockchainValue}>26次</span>
            </div>
            <div className={styles.blockchainRow}>
              <span className={styles.blockchainLabel}>首次查询时间：</span>
              {/* 动态日期 */}
              <span className={styles.blockchainValue}>{dateStr}</span>
            </div>
          </div>
        </div>

        {/* 产品信息卡片 */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🥚</div>
            <div className={styles.sectionTitle}>产品信息</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>产品名称：</span>
            <span className={styles.infoValue}>鲜鸡蛋</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>生产日期：</span>
            {/* 动态日期 */}
            <span className={styles.infoValue}>{dateStr}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>生产地址：</span>
            <span className={styles.infoValue}>山东省潍坊市诸城市石桥子镇枳房村</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>推荐保质方式：</span>
            <span className={styles.infoValue}>• 冷藏30日；</span>
          </div>
        </div>

        {/* 主体信息卡片 */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>👤</div>
            <div className={styles.sectionTitle}>主体信息</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>企业名称：</span>
            <span className={styles.infoValue}>山东牧族生态农业科技有限公司</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>所在区域：</span>
            <span className={styles.infoValue}>山东省潍坊市诸城市</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetailPage;
