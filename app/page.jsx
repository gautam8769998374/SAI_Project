import { Benefit, ClientsTestimonials, HeroSection, IndustryReport, LatestPublication, Solutions, WhyChooseUs } from "@/components";



const Home = () => {
  return (
    <section className="flex-start flex-col m-3 p-3 mb-16">
              <HeroSection/>

              <Solutions/>
        
              <IndustryReport/> 
         
             <LatestPublication/> 
          
              <Benefit/>
          
             <ClientsTestimonials/>
          
             <WhyChooseUs/>
          
    </section>
  )
}

export default Home;
