import { useCallback, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import styles from './Toast.module.css'

let list = []
let a = true

let toastProperties = null;

export const toast = (text, set_list, type) => {
  switch (type) {
    case 'success':
      toastProperties = {
        id: list.length + 1,
        title: text[0],
        description: text[1],
        backgroundColor: '#5cb85c'
      }
      break;
    case 'error':
      toastProperties = {
        id: list.length + 1,
        title: text[0],
        description: text[1],
        backgroundColor: '#d9534f'
      }
      break;
    case 'info':
      toastProperties = {
        id: list.length + 1,
        title: text[0],
        description: text[1],
        backgroundColor: '#5bc0de'
      }
      break;
    case 'warning':
      toastProperties = {
        id: list.length + 1,
        title: text[0],
        description: text[1],
        backgroundColor: '#f0ad4e'
      }
      break;
    default:
      toastProperties = {
        id: list.length + 1,
        title: text[0],
        description: text[1],
        backgroundColor: '#444'
      }
  }
  list = [...list, toastProperties]
  a = !a
  set_list(!a)
};


const ToastProvider = ({ position = "buttom-right" }) => {
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {
        list.map((toast, i) => (
          <div
            key={i}
            id={i}
            ref={() => setTimeout(() => {
              document.getElementById(i).style.display = 'none'; document.getElementById(i).style.visibility = 'hidden'
            }, 8000)}
            className={`${styles.notification} ${styles.toast} ${styles[position]}`}
            style={{ backgroundColor: toast.backgroundColor ,position: 'relative'}}
          >


            <div >
                <p style={{position:'absolute',top:1, cursor:'pointer' }} onClick={() => { document.getElementById(i).style.display = 'none'; document.getElementById(i).style.visibility = 'hidden' }}>X</p>
                <p style={{ textAlign: 'right',marginLeft: 'auto',paddingBottom:5, marginTop:-2 }} className={styles.title}>{toast.title}</p>
              <p style={{ textAlign: 'right', marginLeft: 'auto' }} className={styles.description}>{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ToastProvider
