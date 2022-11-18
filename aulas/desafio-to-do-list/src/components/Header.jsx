import toDoLogo from '../assets/logo.svg';

export function Header() {
  return(
    <>
      <header>
        <img src={toDoLogo} alt="Logo do site" />
      </header>
    </>
  ) 
}