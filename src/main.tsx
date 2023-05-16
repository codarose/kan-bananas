import React from 'react';
import ReactDOM from 'react-dom/client';
import { BoardProvider } from './components/UI/board/create-new-board/board-context';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </React.StrictMode>
);
