"use client"
import { mainCatData } from "../data/mainCatData"
import Link from "next/link"
import Image from "next/image"
export const MainCategories = () => {

  return(
    <div className="flex gap-5 mt-10">
      {mainCatData.map(category => {
        return(
          <Link href="/" key={category.id} className={`boxShadow`}>
            <div className="relative">
              <Image src={category.logo} alt={category.alt} width={640} height={360}/>
              <video className={`hover-image absolute top-0 -z-10`} style={{width: "100%"}} width="320" height="240" autoPlay loop muted>
                <source src={category.videoSrc} type="video/mp4"/>
              </video>
            </div>
          </Link>
        )
      })}
    </div>
  )
}