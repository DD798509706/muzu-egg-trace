import React, { useState } from 'react'
import { Picker, DatePicker, Toast } from 'antd-mobile'
import styles from './CertificatePage.module.css'

interface CertificatePageProps {
  onNavigateToDetail: () => void;
}

const companyOptions = [
  [
    { label: '牧族蛋鸡养殖(北京)有限公司', value: 'bj' },
    { label: '云南牧族蛋业有限公司', value: 'yn' },
    { label: '牧族蛋业(山东)有限公司', value: 'sd' },
  ],
]

const CertificatePage: React.FC<CertificatePageProps> = ({ onNavigateToDetail }) => {
  const [companyVisible, setCompanyVisible] = useState(false)
  const [dateVisible, setDateVisible] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  /** 表单验证：检查企业和日期是否已选择 */
  const validateForm = (): boolean => {
    if (selectedCompany.length === 0) {
      Toast.show({ content: '请选择企业名称', position: 'center' })
      return false
    }
    if (!selectedDate) {
      Toast.show({ content: '请选择生产日期', position: 'center' })
      return false
    }
    return true
  }

  /** 点击查看合格证书 */
  const handleViewCert = () => {
    if (validateForm()) {
      onNavigateToDetail()
    }
  }

  const companyLabel = selectedCompany.length
    ? companyOptions[0].find((item) => item.value === selectedCompany[0])?.label ?? ''
    : ''

  const formatDate = (date: Date) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  const dateLabel = selectedDate ? formatDate(selectedDate) : ''

  return (
    <div className={styles.pageContainer}>
      {/* 顶部标题区域 */}
      <div className={styles.headerSection}>
        <div className={styles.titleButton}>承诺达标合格证</div>
      </div>

      {/* 查询卡片 */}
      <div className={styles.queryCard}>
        {/* 企业选择 */}
        <div className={styles.pickerRow}>
          <div
            className={`${styles.pickerTrigger} ${companyLabel ? styles.pickerTriggerActive : ''}`}
            onClick={() => setCompanyVisible(true)}
          >
            <span>{companyLabel || '请选择企业名称查询'}</span>
            <span className={styles.pickerTriggerArrow}>▼</span>
          </div>
        </div>

        {/* 日期选择 */}
        <div className={styles.pickerRow}>
          <div
            className={`${styles.pickerTrigger} ${dateLabel ? styles.pickerTriggerActive : ''}`}
            onClick={() => setDateVisible(true)}
          >
            <span>{dateLabel || '请选择时间查询'}</span>
            <span className={styles.pickerTriggerArrow}>▼</span>
          </div>
        </div>

        {/* 备注小字 */}
        <div className={styles.remarkText}>
          *生产企业及日期见包装生产者代码及日期喷码
        </div>

        {/* 查询按钮 */}
        <button
          className={`${styles.queryButton} ${(!companyLabel || !dateLabel) ? styles.queryButtonDisabled : ''}`}
          onClick={handleViewCert}
        >
          查看合格证书
        </button>
      </div>

      {/* 企业 Picker */}
      <Picker
        columns={companyOptions}
        visible={companyVisible}
        onClose={() => setCompanyVisible(false)}
        value={selectedCompany}
        onConfirm={(val) => {
          setSelectedCompany(val as string[])
          setCompanyVisible(false)
        }}
        title="选择企业"
      />

      {/* 日期 Picker */}
      <DatePicker
        visible={dateVisible}
        onClose={() => setDateVisible(false)}
        value={selectedDate || new Date()}
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
