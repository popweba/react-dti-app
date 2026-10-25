import Footer from "./../components/Footer.jsx"
import NavBarMain from "./../components/NavBarMain.jsx"
import hero from "./../assets/hero.png"
export default function Home() {
  return (
    <>
    <NavBarMain />
    <div>
      <img src={hero} alt="hero" className="mx-auto my-5 w-30" />
    </div>
      <h1 className="text-center font-bold text-4xl text-blue-700 font-itim">
        Welcome to SAU
      </h1>
      <h1 className="text-center font-bold text-xl text-red-700 font-kanit">
        สวัสดีทุกท่าน
      </h1>
      <hr className="my-5 w-[80%] mx-auto" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id. Veniam, sequi minus neque itaque nisi sapiente aperiam vero iste corrupti cupiditate? Aliquid nam at repellendus quas veniam commodi doloribus autem praesentium earum beatae! Labore odit enim adipisci quidem? Adipisci dolor quasi in nam eius dolores veniam voluptate cumque nobis!
      </p>
      <h3 className="text-center font-charm my-5 font-bold">
        ยินดีต้อนรับทุกท่าน WOW WOW WOW
      </h3>
      <hr className="my-5 w-[80%] mx-auto" />
      <Footer />
    </>
  )
}