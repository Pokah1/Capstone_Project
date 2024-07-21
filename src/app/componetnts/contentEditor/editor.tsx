'use client';

import React from 'react';
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';

import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import styles from "@/app/componetnts/contentEditor/editor.module.css";
import { uploadFiles } from '@/utils/uploadthing';

interface EditorProps {
  onChange: () => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable = true, // Default to true if not provided
}) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: async (file: File) => {
      const [res] = await uploadFiles('imageUploader', { files: [file] });
      return res.url;
    }
  });

  return (
    <div className={styles.customMargin}>
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme='light' // Ensure 'light' is a valid theme for BlockNoteView
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;