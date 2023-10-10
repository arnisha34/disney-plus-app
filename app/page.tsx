import HomeSlider from './components/homeSlider'
import { MainCategories } from './mainCategories'
import { CollectionBox } from './components/collections/CollectionBox'

import { store } from '../app/store'
import { provider } from 'react-redux'

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
      <header>
        <HomeSlider />
      </header>
      <section className='wrapper'>
          <MainCategories />
        <CollectionBox />
      </section>
    </main>
  )
}

