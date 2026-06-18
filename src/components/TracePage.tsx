import React, { useState } from 'react'
import { Toast } from 'antd-mobile'
import TraceModal from './TraceModal'
import styles from './TracePage.module.css'

const TracePage: React.FC = () => {
  const [traceCode, setTraceCode] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const handleTrace = () => {
    // 允许空输入直接打开弹窗展示演示数据
    setModalVisible(true)
  }

  return (
    <div className={styles.tracePage}>
      {/* Top Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          24小时从农场到餐桌 每一枚领鲜一步
        </div>
      </div>

      {/* Main Card */}
      <div className={styles.mainCard}>
        {/* Input */}
        <div className={styles.inputWrapper}>
          <input
            className={styles.traceInput}
            type="text"
            placeholder="请输入或者拍照识别追溯号"
            value={traceCode}
            onChange={(e) => setTraceCode(e.target.value)}
          />
          {/* Scan Icon SVG */}
          <svg
            className={styles.scanIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <line x1="7" y1="12" x2="17" y2="12" />
          </svg>
        </div>

        {/* Product Image Placeholder */}
        <div className={styles.productImage}>
          <div className={styles.productName}>牧族富硒鸡蛋</div>
          <div className={styles.productSpec}>净含量: 1千克</div>
          <div className={styles.productDisclaimer}>
            *图片仅供示意，请以实物包装为准
          </div>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <div>追溯码即包装生产日期喷码 如 "2026/01/11 YN合格"</div>
          <div>可点击扫码拍照识别或手动输入</div>
        </div>

        {/* Trace Button */}
        <button className={styles.traceBtn} onClick={handleTrace}>
          点击追溯
        </button>
      </div>

      {/* Brand Trust Area */}
      <div className={styles.brandTrust}>
        <div className={styles.brandTitle}>牧族鸡蛋 冠军之选</div>
        <div className={styles.certIcons}>
          <div className={styles.certIcon}>认证</div>
          <div className={styles.certIcon}>溯源</div>
        </div>
      </div>

      {/* Trace Modal */}
      {modalVisible && (
        <TraceModal onClose={() => setModalVisible(false)} />
      )}
    </div>
  )
}

export default TracePage
