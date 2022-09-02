import { createRoot } from 'react-dom/client'
import App from './App'
import ReactWrapper from './wrapper/core/ReactWrapper';
const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <ReactWrapper>
    <App />
  </ReactWrapper>
)
