import Image from 'next/image'
import Link from 'next/link'

const mainCategories = [
  {
    id: "1",
    alt: "Disney",
    logo: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/disney%2Fdisney-logo-thumb.png?alt=media&token=c51b6547-86b6-41ef-9ee6-34cb675e64a3",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/disney%2Fdisney-video-thumb.mp4?alt=media&token=e787d8ae-a936-4f49-aa76-8c3cb0cfab15"
  },
  {
    id: "2",
    alt: "Pixar",
    logo: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/pixar%2Fpixar-logo-thumb.png?alt=media&token=babe98be-897f-43eb-ad9e-0f1828833840",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/pixar%2Fpixar-video-thumb.mp4?alt=media&token=e9dc0ccf-ae44-451e-a825-851fb51725b4"
  },
  {
    id: "3",
    alt: "Marvel",
    logo: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/marvel%2Fmarvel-logo-thumb.png?alt=media&token=50e191db-14fd-4b99-819e-e41607399299",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/marvel%2Fmarvel-video-thumb.mp4?alt=media&token=b12ad087-ee6f-427b-8397-b80103d71e44"
  },
  {
    id: "4",
    alt: "Star Wars",
    logo: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/starwars%2Fstarwars-logo-thumb.png?alt=media&token=b168e447-3c42-4e43-ae06-1985697c63c0",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/starwars%2Fstarwars-video-thumb.mp4?alt=media&token=24d84439-ca6d-4017-8ae5-56149bbfbf19"
  },
  {
    id: "5",
    alt: "National Geographic",
    logo: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/natgeo%2Fnatgeo-logo-thumb.png?alt=media&token=c75c520f-9566-494f-b57b-0587f2558a14",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/natgeo%2Fnatgeo-video-thumb.mp4?alt=media&token=50adab05-4067-40b7-b202-ef7712a81950"
  },
]

export const CollectionBox = () => {
  return(
    <div className="wrapper flex mx-auto mt-4">
      {mainCategories.map(category => {
        return(
          <Link href="/" key={category.id}>
          <div className="boxShadow mainCategoryBG">
            <Image src={category.logo} alt={category.alt} width={640} height={360}/>
          </div>
          </Link>
        )
      })}
    </div>
  )
}