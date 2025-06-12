import { createRoot } from 'react-dom/client';
import { App } from './App/App';
import './i18n';

const rootElement = document.getElementById('root');
const createReactRoot = createRoot(rootElement);

createReactRoot.render(<App />);
