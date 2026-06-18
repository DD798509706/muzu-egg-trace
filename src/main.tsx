import { createRoot } from 'react-dom/client';
import 'antd-mobile/es/global/global.css';
import App from './App';
import './App.module.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
