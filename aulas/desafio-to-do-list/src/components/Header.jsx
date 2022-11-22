import styles from './Header.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

import toDoLogo from '../assets/logo.svg';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logo do site" />
    
      <form className={styles.newTaskForm}>
        <input placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    
    </header>
  ); 
}