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

/** localStorage key */
const STORAGE_KEY = 'muzu_cert_click_count'

/** 生成 10-30 之间的随机初始次数 */
const getRandomInitialCount = (): number => {
  return Math.floor(Math.random() * 21) + 10
}

/** 获取点击次数（没有记录时返回随机初始值） */
const getClickCount = (dateStr: string): number => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    if (data[dateStr] !== undefined) {
      return data[dateStr]
    }
    // 首次访问，生成随机初始值并保存
    const initialCount = getRandomInitialCount()
    data[dateStr] = initialCount
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return initialCount
  } catch {
    return getRandomInitialCount()
  }
}

/** 增加点击次数 */
const incrementClickCount = (dateStr: string): number => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    const newCount = (data[dateStr] || 0) + 1
    data[dateStr] = newCount
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return newCount
  } catch {
    return 1
  }
}

const CertificatePage: React.FC<CertificatePageProps> = ({ onNavigateToDetail }) => {
  const [dateVisible, setDateVisible] = useState(false)
  /** 日期默认为今天 */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const dateLabel = formatDate(selectedDate)
  /** 当前日期的点击次数 */
  const [clickCount, setClickCount] = useState(() => getClickCount(dateLabel))

  /** 日期变化时更新点击次数显示 */
  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
    setDateVisible(false)
    setClickCount(getClickCount(formatDate(date)))
  }

  /** 点击查看合格证书 */
  const handleViewCert = () => {
    const newCount = incrementClickCount(dateLabel)
    setClickCount(newCount)
    onNavigateToDetail(selectedDate)
  }

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
        onConfirm={handleDateChange}
        title="选择时间"
        max={new Date()}
      />
    </div>
  )
}

export default CertificatePage
