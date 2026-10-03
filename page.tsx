"use client";

import { ToggleSection } from "@/components/ToggleSection";
import { HeroSection } from "../components/sections/HeroSection";
import { DraggableCardBody, DraggableCardContainer } from "@/components/DraggableCards";
import LoveGallery from "@/components/LoveGallery";
import StellarCardGallerySingle from "@/components/NewWorld";
import Book from "@/components/Book";
import PersonalizeBirthday from "@/components/PersonalizeBirthday";
import PersonalizedImageOverride from "@/components/PersonalizedImageOverride";

function BirthdayRevealFrame() {
  return (
    <iframe
      src="/birthday.html"
      title="Birthday Reveal"
      className="h-screen w-screen border-0 block"
      allow="autoplay"
      onLoad={(event: React.SyntheticEvent<HTMLIFrameElement>) => {
        const iframe = event.currentTarget;
        try {
          const doc = iframe.contentWindow?.document;
          if (!doc) return;
          const forwardWheel = (wheelEvent: WheelEvent) => {
            wheelEvent.preventDefault();
            // The page uses its own scroll container, so scrolling window would
            // not move the main birthday page. Forward the wheel to that container.
            const scroller = document.querySelector<HTMLElement>("#birthday-scroll-container");
            if (scroller) scroller.scrollBy({ top: wheelEvent.deltaY, left: 0, behavior: "auto" });
          };
          doc.addEventListener("wheel", forwardWheel, { passive: false });
          iframe.dataset.scrollForwarding = "true";
        } catch {
          // Same-origin in this app; ignore if the browser blocks access.
        }
      }}
    />
  );
}


export default function Home() {
  return (
    <div id="birthday-scroll-container" className="h-full w-full overflow-x-hidden overflow-y-auto snap-y snap-proximity bg-zinc-50 dark:bg-black select-none scroll-smooth">
      {/* <section className="h-screen w-full snap-start snap-always shrink-0">
        <HeroSection />
      </section> */}
    
        {/* <ToggleSection /> */}
        {/* <BirthdayMagic /> */}
         
           {/* <StellarCardGallerySingle/> */}
           {/* <StellarCardGallerySingle/> */}
             {/* <HeroSection /> */}
             

              <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
                   <BirthdayRevealFrame />
              </section>

         

         
           
        
     
 
    <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
<HeroSection />
    </section>


      <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
 <LoveGallery/>
    </section>

    <section  className="h-screen  w-full snap-start snap-always shrink-0 overflow-visible relative z-10" >
 <div className="flex  h-screen overflow-hidden flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                           <Book/>  
              </div>
    </section>



    <section className="h-screen w-full snap-start overflow-y-scroll snap-always shrink-0 relative ">
        <StellarCardGallerySingle />
      </section>



 


  


    
   


    


    

     

      
      <PersonalizedImageOverride />
      <PersonalizeBirthday />
    </div>
  );
}
