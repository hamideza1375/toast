import { useCallback, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import styles from './Toast.module.css'

let list = []

let toastProperties = null;

export const toast = (type) => {
  switch (type) {
    case 'success':
      toastProperties = {
        id: list.length + 1,
        title: 'Success',
        description: 'This is a success toast component',
        backgroundColor: '#5cb85c'
      }
      break;
    case 'danger':
      toastProperties = {
        id: list.length + 1,
        title: 'Danger',
        description: 'This is a danger toast component',
        backgroundColor: '#d9534f'
      }
      break;
    case 'info':
      toastProperties = {
        id: list.length + 1,
        title: 'Info',
        description: 'This is a info toast component',
        backgroundColor: '#5bc0de'
      }
      break;
    case 'warning':
      toastProperties = {
        id: list.length + 1,
        title: 'Warning',
        description: 'This is a warning toast component',
        backgroundColor: '#f0ad4e'
      }
      break;
    default:
      toastProperties = {
        id: list.length + 1,
        title: 'Warning',
        description: 'This is a warning toast component',
        backgroundColor: '#444'
      }
  }
  list = [...list, toastProperties]

};




const ToastProvider = ({ position = "buttom-right" }) => {

  const [_list, _setList] = useState(false);


  const deleteToast = useCallback(id => {
    const toastListItem = list.filter(e => e.id !== id);
    list = toastListItem
    _setList(!_list)
  }, [_list]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id);
      }
    }, 3000);

    _setList(!_list)
    return () => {
      clearInterval(interval);
    }

  }, [_list]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {
        list.map((toast, i) => (
          <div
            key={i}
            className={`${styles.notification} ${styles.toast} ${styles[position]}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div>
              <p className={styles.title}>{toast.title}</p>
              <p className={styles.description}>{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ToastProvider
