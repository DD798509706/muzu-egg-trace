import React, { useState } from 'react'
import { DatePicker } from 'antd-mobile'
import styles from './CertificatePage.module.css'

interface CertificatePageProps {
  onNavigateToDetail: (date: Date) => void;
}

/** 固定企业名称，不可更改 */
const FIXED_COMPANY = '山东牧族生态农业科技有限公司'

/** 格式化日期为 YYYY-MM-DD */
const formatDate = (date: Date): string => {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

const CertificatePage: React.FC<CertificatePageProps> = ({ onNavigateToDetail }) => {
  const [dateVisible, setDateVisible] = useState(false)
  /** 日期默认为今天 */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  /** 点击查看合格证书 */
  const handleViewCert = () => {
    onNavigateToDetail(selectedDate)
  }

  const dateLabel = formatDate(selectedDate)

  return (
    <div className={styles.pageContainer}>
      {/* 顶部标题区域 */}
      <div className={styles.headerSection}>
        <div className={styles.titleButton}>承诺达标合格证</div>
      </div>

      {/* 查询卡片 */}
      <div className={styles.queryCard}>
        {/* 企业名称 - 固定不可更改 */}
        <div className={styles.pickerRow}>
          <div className={`${styles.pickerTrigger} ${styles.pickerTriggerActive} ${styles.pickerTriggerDisabled}`}>
            <span>{FIXED_COMPANY}</span>
          </div>
        </div>

        {/* 日期选择 */}
        <div className={styles.pickerRow}>
          <div
            className={`${styles.pickerTrigger} ${styles.pickerTriggerActive}`}
            onClick={() => setDateVisible(true)}
          >
            <span>{dateLabel}</span>
            <span className={styles.pickerTriggerArrow}>▼</span>
          </div>
        </div>

        {/* 备注小字 */}
        <div className={styles.remarkText}>
          *生产企业及日期见包装生产者代码及日期喷码
        </div>

        {/* 查询按钮 */}
        <button className={styles.queryButton} onClick={handleViewCert}>
          查看合格证书
        </button>
      </div>

      {/* 日期 Picker */}
      <DatePicker
        visible={dateVisible}
        onClose={() => setDateVisible(false)}
        value={selectedDate}
        onConfirm={(val) => {
          setSelectedDate(val)
          setDateVisible(false)
        }}
        title="选择时间"
        max={new Date()}
      />
    </div>
  )
}

export default CertificatePage
