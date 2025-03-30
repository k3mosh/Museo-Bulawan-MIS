import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'


const About = () => {
  return (
    <>
    
    <div className='bg-white  flex flex-col gap-y-4 min-h-fit h-fit w-screen pt-7' >
      <div className='min-h-[10%] w-screen'>
        <LandingNav/>
      </div>
      <div className='w-screen h-[40rem] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./src/assets/440832115_947772303495782_6010038099693171993_n.png')" }}>

      </div>
    </div>

      <div className='w-screen h-auto min-h-[79rem] '>
       <div className='max-w-[140rem]  3xl:max-w-[180rem] h-auto min-h-[79rem] mx-auto text-[3rem]'>
          <div className='flex flex-col sm:flex-row mt-[10rem]'>
            
            <span className='w-full sm:w-2/5  h-full m-[2rem]'>
              <p className=" max-w-full h-auto items-end text-justify">
              The Museo Bulawan, also known as the Community Museum of Camarines Norte, embodies the rich cultural and historical essence of the province. Its origins trace back to 1995, when the construction of a new neo-classical provincial capitol building provided a fitting backdrop for the establishment of a museum. The Greco-Roman architecture of the building inspired a vision of timeless grandeur, making it an ideal setting to house artifacts and exhibits that celebrate the province's heritage.
                <img src="../src/assets/Bulawan-Museum-14 1.png" alt="About Us" className="mt-6 w-full h-auto rounded-lg shadow-lg" />
              </p>
            </span>
            <span className='w-full sm:w-3/5 h-full m-[2rem] text-justify'>
                <h1 className='text-[4rem] font-bold'>Lorem ipsum dolor sit amet. Sit maxime delectus et amet itaque rem esse perferendis et ratione accusantium non natus rerum non similique pariatur. 
                  </h1>
                  <br />
                  <br />
                  <p className='font-bold'>Humble Beginnings
                  </p>
                    <br />
                   
                        <p>Initially, the museum was situated in a modest space at the center of the capitol building's frontage, directly facing the main entrance. Despite its limited size, this initial venue served as a hub for various periodic exhibits and activities. It became an effective platform for the provincial government to foster cultural awareness and education among the youth and the community at large.
                        <br />
                                            <br />
                        Through collaborations with national organizations such as the National Commission for Culture and the Arts (NCCA), the National Museum, and the National Historical Institute, the museum hosted numerous events that sparked a growing interest in local history and cultural preservation. These partnerships deepened the community's sense of identity and strengthened their connection to the national narrative.
                        <br />
                                            <br />
                        This initial phase of the museum also served as a testament to the community's commitment to preserving their heritage despite spatial limitations. The intimate setting encouraged meaningful interactions between visitors and exhibits, fostering a deeper appreciation for the artifacts on display. Local artists, historians, and cultural advocates found a welcoming space to share their work and knowledge, further enriching the museum's offerings. These early efforts laid the groundwork for a vibrant cultural hub that would eventually grow into a larger and more comprehensive institution, embodying the community's dedication to celebrating and safeguarding their shared history.</p>
                 </span>
          </div>
  
        <div>
        <div className='flex flex-col sm:flex-row mt-[10rem] text-justify'>
            {/* 2nd Part */}
          <span className='w-full sm:w-1/2  h-full m-[2rem] '>
          <p>
              <h1 className='text-[4rem] font-bold mb-[6rem]'>“Heritage is not what we inherit from the past; it is what we preserve for the future.”</h1>
              <img src="../src/assets/455363415_812761527719886_1195461782753847821_n.png" alt="About Us" className="mt-6 w-full h-auto rounded-lg shadow-lg" />

           </p> 
           </span>
           <span className='w-full sm:w-1/2 h-full m-[2rem] mt-[13.5rem] '>
              <p>
                <h1 className='font-bold'>Expansion and Transformation</h1>
                <br />
                The new location facilitated significant advancements in museum management, including systematic techniques in documentation, research, preservation, and exhibition. Enhanced marketing and promotional efforts further broadened the museum's reach, attracting a diverse audience of local residents and travelers.
                <br />
                <br />
                <span className='text-[15rem] font-bold text-black float-left leading-none mr-4'>O</span>
                <p className='mt-[6.8rem]'>ver time, the museum's popularity and collections grew, outstripping the capacity of its original location. The year 2000 marked a pivotal moment in its history when the museum was relocated to a larger building adjacent to the provincial capitol. This move addressed the need for a more spacious venue, enabling improved collection displays and a more comfortable experience for visitors.
                </p>
              </p>
            </span>

        </div>
        </div>
          {/* 3rd Part */}
        <div>
        <div className='flex flex-col sm:flex-row mt-[3rem] text-justify'>
           
          <span className='w-full sm:w-2/5  h-full m-[2rem] '>
          <div>
            <h1 className='text-[5rem] font-bold'>
              Museo Bulawan: A Beacon of Cultural Wealth
              </h1>
              <br /><br />
                <p>
                The museum's name, Museo Bulawan—translated as “Golden Museum”—reflects Camarines Norte's distinction as a province historically linked to gold mining. This golden legacy resonates in the museum's exhibits and collections, which include:
                </p>
                <ul class="list-disc">
                <br />
                <li>Numismatics: An extensive collection of coins and currencies.</li>
                <li>Portraits of Governors: A gallery honoring the province's leaders.</li>
                <li>Historical Panels: Computer-generated displays illustrating significant moments in local and national history.</li>
                <li>Local Heroes Exhibit: Tributes to the individuals who shaped the province's story.</li>
                <li>Tourism Showcases: Presentations highlighting the scenic beauty and cultural richness of Camarines Norte.rism Showcases: Presentations highlighting the scenic beauty and cultural richness of Camarines Norte.</li>
                </ul>   
              </div>
           </span>
           <span className='w-full sm:w-3/5 h-full flex justify-center items-center'>
           <img src="../src\assets\456513150_820321936963845_2439220914474688907_n 1.png" alt="About Us" className="mt-6 w-[100rem] h-auto rounded-lg shadow-lg" />

            </span>

        </div>

        </div>
      </div>
    </div>
    <div/>
    </>
  )
}

export default About
