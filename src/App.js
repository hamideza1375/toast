import { useState } from 'react';
import ToastProvider, { toast } from './components/toast/Toast'

function App() {

  const [, set_list] = useState(false)
  

  return (
    <div>
      <button onClick={() =>{ toast(['عنوان','توضیحات'],set_list)}}>Success</button>
      <ToastProvider/>
    </div>
  );
}

export default App;
