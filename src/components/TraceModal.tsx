import React from 'react'
import styles from './TraceModal.module.css'

interface TraceModalProps {
  onClose: () => void
}

const traceSteps = [
  {
    icon: '检',
    title: '鸡蛋收检',
    date: '2026-01-11',
    person: '责任人：秦年霞',
  },
  {
    icon: '包',
    title: '鸡蛋包装',
    date: '2026-01-11',
    person: '责任人：秦年霞',
  },
  {
    icon: '售',
    title: '上市销售',
    date: '2026-01-12',
    person: '',
  },
]

const TraceModal: React.FC<TraceModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        {/* Title Badge */}
        <div className={styles.titleBadge}>
          <span className={styles.titleBadgeText}>牧族区块链溯源</span>
        </div>

        {/* Subtitle */}
        <div className={styles.subtitle}>每一枚领鲜一步</div>

        {/* Trace Steps */}
        <div className={styles.traceSteps}>
          {traceSteps.map((step, index) => (
            <div className={styles.stepItem} key={index}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepTitle}>{step.title}</span>
                  <span className={styles.stepDate}>{step.date}</span>
                </div>
                {step.person && (
                  <div className={styles.stepPerson}>{step.person}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className={styles.trustBadge}>
          <span className={styles.trustBadgeText}>体检满分的好鸡蛋</span>
        </div>
        <div className={styles.trustSlogan}>吃进肚子有保障</div>

        {/* Blockchain Address */}
        <div className={styles.blockchainSection}>
          <div className={styles.blockchainLabel}>区块链地址:</div>
          <div className={styles.blockchainAddress}>
            0x13aa09c474fc5864f94e57c9325e9ed888274253ce6affd0dc69c
            <br />
            9baf7c3a564
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button className={styles.closeBtn} onClick={onClose}>
        <svg
          className={styles.closeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}

export default TraceModal
