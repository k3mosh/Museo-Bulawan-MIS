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

    <div className='w-screen h-auto min-h-[79rem]'>
        {/* Parent div with two flexboxes */}
        <div className="flex flex-col md:flex-row h-auto mt-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./assets/440832115_947772303495782_6010038099693171993_n.png')" }}>
          
          {/* First flexbox */}
          <div className="flex-1 flex flex-col items-end text-justify p-6 min-w-[40%]">
           
            <p className="max-w-[70rem] min-h-auto max-h-full text-lg">
            The Museo Bulawan, also known as the Community Museum of Camarines Norte, embodies the rich cultural and historical essence of the province. Its origins trace back to 1995, when the construction of a new neo-classical provincial capitol building provided a fitting backdrop for the establishment of a museum. The Greco-Roman architecture of the building inspired a vision of timeless grandeur, making it an ideal setting to house artifacts and exhibits that celebrate the province's heritage.     
            <img src="../src/assets/Bulawan-Museum-14 1.png" alt="About Us" className="mt-6 max-w-auto h-auto  shadow-lg -center" />
              </p>
            
          </div>

          {/* Second flexbox */}
          <div className="flex-1 flex items-start p-6 min-w-[59%]">
            <p className="max-w-[105rem] min-h-auto h-auto text-justify">
              <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit amet. Hic enim obcaecati in nostrum neque in laboriosam iure ut odio cumque non voluptates rerum! In commodi tempora sit repellat error est dolorem eius et iure dolorem. </h1>
              <br />
                <br />
                Humble Beginnings
Initially, the museum was situated in a modest space at the center of the capitol building's frontage, directly facing the main entrance. Despite its limited size, this initial venue served as a hub for various periodic exhibits and activities. It became an effective platform for the provincial government to foster cultural awareness and education among the youth and the community at large.
<br />
                <br />
Through collaborations with national organizations such as the National Commission for Culture and the Arts (NCCA), the National Museum, and the National Historical Institute, the museum hosted numerous events that sparked a growing interest in local history and cultural preservation. These partnerships deepened the community's sense of identity and strengthened their connection to the national narrative.
<br />
                <br />
This initial phase of the museum also served as a testament to the community's commitment to preserving their heritage despite spatial limitations. The intimate setting encouraged meaningful interactions between visitors and exhibits, fostering a deeper appreciation for the artifacts on display. Local artists, historians, and cultural advocates found a welcoming space to share their work and knowledge, further enriching the museum's offerings. These early efforts laid the groundwork for a vibrant cultural hub that would eventually grow into a larger and more comprehensive institution, embodying the community's dedication to celebrating and safeguarding their shared history.
            </p>
          </div>
        </div>
    </div>
    </>
  )
}

export default About
