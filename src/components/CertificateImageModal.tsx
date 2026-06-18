import React from 'react'
import styles from './CertificateImageModal.module.css'

interface CertificateImageModalProps {
  onClose: () => void
}

const CertificateImageModal: React.FC<CertificateImageModalProps> = ({ onClose }) => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const dateStr = `${year}年${month}月${day}日`

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.certificateContainer} onClick={(e) => e.stopPropagation()}>
        {/* 顶部标题 */}
        <div className={styles.certificateTitle}>承诺达标合格证</div>

        {/* 承诺内容 */}
        <div className={styles.promiseSection}>
          <div className={styles.promiseIntro}>我承诺生产销售的食用农产品:</div>
          <div className={styles.promiseItem}>未使用禁用农药、兽药及其他化合物;</div>
          <div className={styles.promiseItem}>使用的常规农药、兽药残留不超标。</div>
        </div>

        {/* 承诺依据 */}
        <div className={styles.basisTitle}>承诺依据:</div>
        <div className={styles.basisOptions}>
          <div className={styles.basisOption}>
            <span className={`${styles.checkbox} ${styles.checkboxChecked}`}>✓</span>
            <span>质量安全控制符合要求</span>
          </div>
          <div className={styles.basisOption}>
            <span className={`${styles.checkbox} ${styles.checkboxUnchecked}`}>✓</span>
            <span>自行检测合格</span>
          </div>
          <div className={styles.basisOption}>
            <span className={`${styles.checkbox} ${styles.checkboxUnchecked}`}>✓</span>
            <span>委托检测合格</span>
          </div>
        </div>

        {/* 分割线 */}
        <div className={styles.divider} />

        {/* 产品信息 + 印章（用 relative 包裹） */}
        <div className={styles.infoSection}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>产品名称:</span>
            <span className={styles.infoValue}>牧族富硒鸡蛋</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>数量或重量:</span>
            <span className={styles.infoValue}>同包装净含量</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>产地:</span>
            <span className={styles.infoValue}>北京市平谷区峪口镇西樊各庄村南</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>承诺主体:</span>
            <span className={styles.infoValue}>牧族蛋鸡养殖(北京)有限公司</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>联系方式:</span>
            <span className={styles.infoValue}>010-56651849</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>开具时间:</span>
            <span className={styles.infoValue}>{dateStr}</span>
          </div>

          {/* 红色印章 - 放在产品信息区域内右下角 */}
          <div className={styles.stamp}>
            <span className={styles.stampTop}>牧族蛋鸡养殖</span>
            <span className={styles.stampStar}>★</span>
            <span className={styles.stampBottom}>检验合格</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateImageModal
