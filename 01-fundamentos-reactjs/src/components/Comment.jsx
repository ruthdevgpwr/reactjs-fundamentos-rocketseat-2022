import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/80555245?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ruth Dantas</strong>
              <time
                title="11 de Novembro às 08:10h"
                dateTime="2022-11-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentários">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
