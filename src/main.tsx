import { createRoot } from 'react-dom/client';
import 'antd-mobile/es/global/global.css';
import App from './App';
import './App.module.css';

/* 全局覆盖 antd-mobile 主题色为红色 #fbca01 */
const style = document.createElement('style');
style.textContent = `
  :root {
    --adm-color-primary: #fbca01;
    --adm-color-danger: #fbca01;
    --adm-color-success: #fbca01;
    --adm-color-warning: #fbca01;
    --adm-color-link: #fbca01;
    --adm-button-primary-background: #fbca01;
    --adm-button-primary-border-color: #fbca01;
    --adm-picker-header-button-color: #fbca01;
    --adm-list-item-active-background-color: rgba(175, 14, 20, 0.06);
    --adm-tabs-active-line-color: #fbca01;
    --adm-tabs-active-text-color: #fbca01;
    --adm-tab-bar-active-color: #fbca01;
    --adm-action-sheet-button-font-color: #fbca01;
    --adm-dialog-button-font-color: #fbca01;
    --adm-popover-menu-item-font-color: #fbca01;
  }

  /* Picker 确认/取消按钮 */
  .adm-picker-header-button {
    color: #fbca01 !important;
  }

  /* TabBar 激活态 */
  .adm-tab-bar-item-active {
    color: #fbca01 !important;
  }

  /* Tabs 激活态 */
  .adm-tabs-tab-active {
    color: #fbca01 !important;
  }
  .adm-tabs-tab-line {
    background: #fbca01 !important;
  }
`;
document.head.appendChild(style);

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
