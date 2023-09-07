import Image from 'next/image'
import HomeSlider from './components/homeSlider'
import { CollectionBox } from './collectionBox'

// import { doc, getDoc } from "firebase/firestore";
// import { db } from './firebaseConfig'

// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

export default function Home() {
  return (
    <main className='text-white'>
      <HomeSlider />
      <CollectionBox />
    </main>
  )
}

