
// import React from 'react';
// import styles from '@/app/content/styles.module.css';

// import EditorPage from '../componetnts/contentEditor/blocknote';
// const Content = () => {
//   return (
//     <div className={styles.content}>
//       <header className={styles.header}>
//         <h1>Create Your Content</h1>
//       </header>
 
//       <EditorPage/>
//       <section className={styles.toDoList}>
//         <h2>To-Do List</h2>
//         <input type="text" placeholder="New task..." />
//         <button>Add</button>
//         <ul className={styles.toDoListItems}>
//           <li>Finish project</li>
//           <li>Review PR</li>
       
//         </ul>
//       </section>
//       <section className={styles.statsGraph}>
//         <h2>Statistics</h2>
       
//       </section>
//       <section className={styles.calendar}>
//         <h2>Calendar</h2>
//         <ul className={styles.calendarItems}>
//           <li>Event 1: July 20</li>
//           <li>Event 2: July 21</li>
         
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Content;




'use client'

import React, { useMemo, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import dynamic from 'next/dynamic';
import styles from '@/app/content/styles.module.css';
import Cover from '../componetnts/cover';
import cameraIcom from '@/assets/camera.svg'


const EditorPage = () => {
const [coverUrl, setCoverUrl] = useState<string>();

const enableCover = async () => {
  const randomImage = await fetch('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  setCoverUrl(randomImage.url);
}


  const Editor = useMemo(() => dynamic(() => import('@/app/componetnts/contentEditor/editor'), { ssr: false }), []);
  return (
    <main className={styles.container}>
     <h1>Create Your Content</h1>
      <Cover url={coverUrl} setUrl={setCoverUrl}/>
      <div>
     <div className={styles.group}>
      {!coverUrl && 
      <div className={styles.hiddenContent}>
        <button className={styles.button}
        onClick={enableCover}
        >{cameraIcom} Add Image </button>
      </div>
      }
     <TextareaAutosize 
          placeholder='Untitled' 
          className={styles.textarea}
        />
       </div>
       
       
        <Editor onChange={() => {}} />
      </div>
      
    </main>
  );
};

export default EditorPage;
