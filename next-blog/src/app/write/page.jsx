"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ReactQuill from "react-quill";
import { app } from "@/utils/firebase";

const tags = [
  {
    id: 1,
    slug: "algorithms",
    title: "#Algorithms"
  },
  {
    id: 2,
    slug: "systems",
    title: "#Systems"
  },
  {
    id: 3,
    slug: "food",
    title: "#Food"
  },
  {
    id: 4,
    slug: "travel",
    title: "#Travel"
  },
  {
    id: 5,
    slug: "networks",
    title: "#Networks"
  },
  {
    id: 6,
    slug: "books",
    title: "#Books"
  },
  {
    id: 7,
    slug: "shows",
    title: "#Shows"
  },
  {
    id: 8,
    slug: "javascript",
    title: "#JavaScript"
  },
  {
    id: 9,
    slug: "python",
    title: "#Python"
  },
]

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [editorsPick, setEditorsPick] = useState("")
  

  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  // function addTag(e){
  //   if (e.key !== 'Enter') return
  //   const value = e.target.value
  //   if(!value.trim()) return
  //   setTags([...tags, value])
  //   e.target.value = ''
  // }

  // function removeTag(index){
  //   setTags(tags.filter((el, i) => i !== index))
  // }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.boxContainer}>

        <div className={styles.boxOne}>
          <div className={styles.selectBox}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}

          </div>
          
          <div className={styles.selectBox}>
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
              <option value="dev">Dev</option>
              <option value="data">Data</option>
              <option value="blockchain">Blockchain</option>
              <option value="security">Security</option>
              <option value="histories">Histories</option>
              <option value="ai">AI</option>
            </select>
          </div>
        </div>

        <div className={styles.boxTwo}>
          {/* <div>
            enter some tags ...
            <div className={styles.tagsInputContainer}>

              { tags.map((tag, index) => (
                <div className={styles.tagsItem} key={index}>
                  <span className={styles.tagsText}> {tag} </span>
                  <span className={styles.tagsClose} onClick={() => removeTag(index)}> &times; </span>
                </div>
              ))}
              <input className={styles.tagsInput} onKeyDown={addTag} type="text" placeholder="Type something" />
            </div>
          </div> */}
          <div>
            <input 
              className={styles.checkbox}
              type="checkbox" 
              id="editorsPick" 
              name="editorsPick"             
              onClick={() => setEditorsPick(true)}
            />
            <label className={styles.label}>Editor's Pick</label>
          </div>
        </div>
      </div>

      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
