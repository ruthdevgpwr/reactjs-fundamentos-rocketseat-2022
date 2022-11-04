import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ruth Dantas"
            profissao="Dev Frontend"
            src="https://github.com/ruthdevgpwr.png"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Emerson Bezerra"
            profissao="Web Developer"
            src="https://github.com/emersondevelops.png"
            content="Quo, velit eum vel, laboriosam illum a officia corrupti exercitationem porro minus accusamus. "
          />
        </main>
      </div>
    </div>
  );
}
