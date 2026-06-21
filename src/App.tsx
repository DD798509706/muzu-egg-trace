import { useState } from 'react';
import './App.module.css';
import BottomTab from './components/BottomTab';
import AboutPage from './components/AboutPage';
import CertificatePage from './components/CertificatePage';
import CertificateDetailPage from './components/CertificateDetailPage';
import TracePage from './components/TracePage';

/**
 * 主应用组件
 * 通过 useState 控制 Tab 切换和页面导航
 * 默认激活合格证书页面
 */
export default function App() {
  const [activeTab, setActiveTab] = useState('cert');
  /** 是否显示证书详情页 */
  const [showCertDetail, setShowCertDetail] = useState(false);

  /** 处理 Tab 切换 */
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    // 切换 Tab 时隐藏详情页
    setShowCertDetail(false);
  };

  /** 跳转到证书详情页 */
  const handleNavigateToDetail = () => {
    setShowCertDetail(true);
  };

  /** 返回证书查询页 */
  const handleBackToCert = () => {
    setShowCertDetail(false);
  };

  /** 根据当前状态渲染对应页面 */
  const renderContent = () => {
    // 证书详情页优先级最高，覆盖 Tab 切换
    if (showCertDetail) {
      return <CertificateDetailPage onBack={handleBackToCert} />;
    }

    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'cert':
        return <CertificatePage onNavigateToDetail={handleNavigateToDetail} />;
      case 'trace':
        return <TracePage />;
      default:
        return <CertificatePage onNavigateToDetail={handleNavigateToDetail} />;
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

      {/* 底部 Tab 导航 - 详情页时隐藏 */}
      {!showCertDetail && (
        <BottomTab activeKey={activeTab} onChange={handleTabChange} />
      )}
    </div>
  );
}
