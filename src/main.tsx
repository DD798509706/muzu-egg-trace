import { createRoot } from 'react-dom/client';
import 'antd-mobile/es/global/global.css';
import App from './App';
import './App.module.css';

/* 全局覆盖 antd-mobile 主题色为红色 #af0e14 */
const style = document.createElement('style');
style.textContent = `
  :root {
    --adm-color-primary: #af0e14;
    --adm-color-danger: #af0e14;
    --adm-color-success: #af0e14;
    --adm-color-warning: #af0e14;
    --adm-color-link: #af0e14;
    --adm-button-primary-background: #af0e14;
    --adm-button-primary-border-color: #af0e14;
    --adm-picker-header-button-color: #af0e14;
    --adm-list-item-active-background-color: rgba(175, 14, 20, 0.06);
    --adm-tabs-active-line-color: #af0e14;
    --adm-tabs-active-text-color: #af0e14;
    --adm-tab-bar-active-color: #af0e14;
    --adm-action-sheet-button-font-color: #af0e14;
    --adm-dialog-button-font-color: #af0e14;
    --adm-popover-menu-item-font-color: #af0e14;
  }

  /* Picker 确认/取消按钮 */
  .adm-picker-header-button {
    color: #af0e14 !important;
  }

  /* TabBar 激活态 */
  .adm-tab-bar-item-active {
    color: #af0e14 !important;
  }

  /* Tabs 激活态 */
  .adm-tabs-tab-active {
    color: #af0e14 !important;
  }
  .adm-tabs-tab-line {
    background: #af0e14 !important;
  }
`;
document.head.appendChild(style);

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
