import { useState } from 'react';
import ToastProvider, { toast } from './components/toast/Toast'

function App() {
  

  return (
    <div>
      <button onClick={() => toast('show')}>Success</button>
      <ToastProvider />
    </div>
  );
}

export default App;
