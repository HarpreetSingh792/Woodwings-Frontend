import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-scroll";
import { About } from "./components/About";
import Contact from "./components/Contact";
import FeaturedCards from "./components/FeaturedCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Work from "./components/Work";

const linkIds = ["home", "projects", "howWeWork", "aboutUs", "contacts"];
const imgArray = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg"];

function App() {

  const galleryDivRef = useRef(null);
  const [canScrollToTop, setCanScrollToTop] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const yCordinateWatcher = () => {
      if (window.scrollY > 100) {
        setCanScrollToTop(true)
      } else {
        setCanScrollToTop(false)

      }

    }

    window.addEventListener("scroll", yCordinateWatcher)

    return () => window.removeEventListener("scroll", yCordinateWatcher)


  }, [canScrollToTop])

  const galleryCloseHandler = () => {
    setIsGalleryOpen(false);

    window.scrollTo({
      left: 0, top: window.scrollY - galleryDivRef.current.offsetHeight,
      behavior: "instant"
    })
  }

  return (
    <>
      {
        canScrollToTop &&
        <Link to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}><button className="w-fit h-fit  outline-none border-none fixed top-3/4 lg:right-14 min-[320px]:right-4 z-[9999] transition"><IoIosArrowDropupCircle className=" min-[320px]:w-16 min-[320px]:h-16 lg:w-12 lg:h-12 shadow-xl rounded-full fill-[#302824]/80" /></button></Link>
      }
      <header className="lg:min-h-[calc(100vh-20px)] min-[320px]:min-h-[670px] overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('././assets/hero.png')]">
        <Header links={linkIds} />
        <p className="relative lg:top-20 lg:left-[73px] lg:w-[700px] min-[320px]:top-24 min-[320px]:left-4 min-[320px]:w-[calc(100vw-30px)] font-playfair lg:text-5xl min-[320px]:text-3xl  font-bold text-textColor">Custom Kitchen Cabinets and Bespoke Woodworking Solutions</p>
        <p className="relative lg:top-24 lg:left-[73px] lg:w-[600px] min-[320px]:top-28 min-[320px]:left-[20px] min-[320px]:w-[calc(100vw-50px)] lg:text-base min-[320px]:text-sm font-playfair text-[#F6E1B8] font-normal  text-justify">Transform your home with handcrafted kitchen cabinets, wardrobes, vanities, and more. At Woodwings, we specialize in delivery custom carpentry solutions designed to meet your style and functional need. Let out craftsmanship elevate the heart of your home.</p>
        <Link to={"projects"}
          // className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}> <button className="relative uppercase top-40 lg:hidden min-[320px]:flex justify-center items-center m-auto border-2 border-[#bd9b6d] w-3/4 h-12 text-[#bd9b6d] p-4 font-lato rounded-sm hover:bg-[#5D3A29]/70">Our Projects</button></Link>
        <Link to={"contacts"}
          // className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}><button className="relative uppercase top-48 lg:hidden min-[320px]:flex justify-center items-center m-auto border-2 border-[#bd9b6d] w-3/4 h-12 text-[#bd9b6d] p-4 font-lato rounded-sm hover:bg-[#5D3A29]/70">Get a Consultation</button></Link>
      </header>
      <div id="projects" className="bg-[#F5F5F5] h-full py-8 px-8">
        <p className="font-playfair font-bold text-primary lg:text-5xl min-[320px]:text-3xl text-center underline">Featured Projects</p>
        <p className="lg:mt-4 min-[320px]:mt-2 text-center text-primary/70 font-playfair font-bold lg:text-xl min-[320px]:text-sm">Crafted with Care, Built to Last</p>
        <FeaturedCards />
        <div className="flex flex-col justify-center items-center gap-2">

          {!isGalleryOpen &&
            (<>
              <p className="font-lato lg:text-4xl min-[320px]:text-2xl text-primary mt-16 text-center">Want to see more projects?</p>
              <button className="m-auto bg-[#5D3A29] lg:w-1/4 min-[320px]:w-3/4 h-12 text-white font-lato rounded-sm hover:bg-[#5D3A29]/70" onClick={() => setIsGalleryOpen(true)}>VIEW OUR GALLERY</button>
            </>)}
          {isGalleryOpen && <p className="mt-16 font-playfair font-bold text-primary lg:text-3xl min-[320px]:text-xl text-center w-full underline">Gallery</p>}
          {
            isGalleryOpen && <div ref={galleryDivRef} className="mt-4 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
              {
                imgArray.map((img) => (
                  <img className=" brightness-75" loading="lazy" src={`assets/gallery/${img}`} key={img} alt={"gallery-" + img.split(".")[0]} />
                ))
              }
            </div>
          }
          {isGalleryOpen && <button className="m-auto bg-[#5D3A29] lg:w-1/4 min-[320px]:w-3/4 h-12 text-white font-lato rounded-sm hover:bg-[#5D3A29]/70" onClick={galleryCloseHandler}>VIEW LESS</button>}
        </div>
      </div>

      <div id="howWeWork" className="h-full py-8 px-8">
        <p className="font-playfair font-bold text-primary lg:text-5xl min-[320px]:text-3xl text-center underline">How we work</p>
        <Work />
      </div>

      <div id="aboutUs" className="bg-[#F5F5F5]/30 h-full py-8 px-8">
        <p className="font-playfair font-bold text-primary lg:text-5xl min-[320px]:text-3xl text-center underline">About Us</p>
        <About />
      </div>

      <div id="reviews" className="h-full py-8 px-8">
        <p className="font-playfair font-bold text-primary lg:text-5xl min-[320px]:text-3xl text-center underline">Testimonials</p>
        <Reviews />
      </div>

      <div id="contacts" className="bg-[#FDF3F5]/30 h-full py-8 px-8">
        <p className="font-playfair font-bold text-primary lg:text-5xl min-[320px]:text-3xl text-center underline">Contact Us</p>
        <Contact />
      </div>

      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
