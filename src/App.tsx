import { useState } from 'react';
import './App.module.css';
import BottomTab from './components/BottomTab';
import AboutPage from './components/AboutPage';
import CertificatePage from './components/CertificatePage';
import TracePage from './components/TracePage';

/**
 * 主应用组件
 * 通过 useState 控制 Tab 切换，默认激活合格证书页面
 */
export default function App() {
  const [activeTab, setActiveTab] = useState('cert');

  /** 根据当前激活的 Tab 渲染对应页面组件 */
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'cert':
        return <CertificatePage />;
      case 'trace':
        return <TracePage />;
      default:
        return <CertificatePage />;
    }
  };

  return (
    <div
      style={{
        maxWidth: 750,
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        position: 'relative',
      }}
    >
      {/* 内容区 - 可滚动 */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {renderContent()}
      </div>

      {/* 底部 Tab 导航 */}
      <BottomTab activeKey={activeTab} onChange={setActiveTab} />
    </div>
  );
}
