import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import backgroundImage from '@/assets/homepage.jpg'

const HomePage = () => {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', 
  };

  return (
    <div id='root' className={styles.container} style={pageStyle}>
      <h1>Welcome</h1>
      <h3>Take your Writing to another level!</h3>
      <Link href={'/FormPage'}><button>To access more, Register</button></Link>
      <Link href={'/Dashboard'}><button>To Dashboard</button></Link>
    </div>
  );
}

export default HomePage;
