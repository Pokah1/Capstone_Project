import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const HomePage = () =>{
  
  return (
      <div id='root' className={styles.container}>
      <h1>Welcome</h1>
      <h3>Take your Writing to another !!!</h3>
     
      <Link href={'/form'}><button>To assess more, Register</button></Link>
     
      <Link href={'/home-redirect'}><button>To Dashboard</button></Link>
      </div>
  )
}

export default HomePage;