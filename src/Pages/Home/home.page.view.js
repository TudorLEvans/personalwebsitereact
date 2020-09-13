import React from 'react'
import {JesusCollege,IBM,WebDev,DayToday} from '../../Images/index'

const HomePageView = () => {

    return (
        <div class="w-fill">
            <div class="invisible lg:visible font-mono fixed w-48 m-8 border-r-2 border-solid border-black text-right pr-4">
            </div>
            <div class="flex-col justify-center ">
                <div class="flex flex-col items-center bg-white w-full text-gray-600 min-h-64 pb-32" >
                    <p class="text-5xl md:text-6xl text-center leading-loose font-bold">My Story</p>
                </div>
                <div id="header_backing" class="flex flex-col items-center w-full text-white pt-24" >
                    <div class="flex flex-col md:flex-row w-full md:pl-64 pl-6 pr-6 md:pr-0 justify-between items-center ">
                        <div class="md:w-1/3 py-4 md:py-0">
                            <p class="text-5xl md:text-6xl font-bold leading-normal">Education</p>
                            <p class=" text-xl font-thin mb-4 leading-loose">
                                I read physics at Jesus College, Cambridge, achieving a triple first. After this, I took a bit of a side-step, and chose to read
                                History and Philosophy of Science for my Masters, in order to explore my interest in philosophy. It's all gone, but it's not
                                fogotten, and I continue to maintain an active interest in the subjects I studied at Cambridge.
                            </p>
                        </div>
                        <div class="md:w-1/2 md:pr-64 py-4 md:py-0">
                            <div class="bg-gray-300 p-6 rounded-lg shadow-2xl text-black ">
                                <img src={JesusCollege} width={450}  alt='' class="border border-grey-700 rounded-lg"/>
                                <p class="font-bold p-4">Did you know?</p>
                                <p class="pl-4 wrap">Jesus College was founded in 1496 by John Alcock, treasurer of England and Bishop of Ely. 
                                Previously, it had been a nunnery, formed furing the Norman times.
                                Full name? The College of the Blessed Virgin Mary, Saint John the Evangelist and the glorious Virgin Saint Radegund, near Cambridge. Let's stick with Jesus, eh?</p>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
                <div class="flex flex-col items-center w-full text-gray-600 md:pr-64 pl-6 pr-6 md:pl-0 mb-6" >
                    <div class="flex md:flex-row flex-col w-full justify-between items-center">
                        <div class="md:w-1/2 md:pl-64 py-4 md:py-0">
                            <div class="bg-gray-600 p-6 rounded-lg shadow-xl text-white ">
                                <img src={IBM} width={500} height={400}  alt='' class=" rounded-lg"/>
                                <p class="font-bold p-4">IBM's History</p>
                                <p class="pl-4 wrap">International Business Machines was founded in 1911. For over 100 years it has been one of the world's foremost tech companies.
                                It has distinguished itself with innovations from chip and pin machines to the personal computer and SQL. It continues to invest in future technologies, 
                                most notably Qunatum Computing.
                                </p>
                            </div>
                        </div>
                        <div class="md:w-1/3 py-4 md:py-0">
                            <p class="text-5xl md:text-6xl font-bold leading-normal text-right">Career</p>
                            <p class=" text-xl font-thin leading-loose text-right">
                                After graduating from Cambridge in June of 2019, I began my career at IBM UK, working in the South Bank office
                                as a technology consultant. After entering as part of the ServiceNow practice, I moved into the public sector, 
                                working under Hass Niazi (<a href="https://www.hassniazi.com">https://www.hassniazi.com</a>). Since joining
                                his team, I've been working on the MAZE mutlicloud project, in which we are aiming to create a user-friendly
                                system for automating cloud infrastructure deployment through Terraform. As part of this project I've learnt about
                                working with Databases, APIs, Python, Javascript, React, Technical Architecture, and multiple cloud providers.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="header_backing" class="flex flex-col items-center w-full text-white" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                    <div class="flex md:flex-row flex-col justify-between items-center w-full md:pl-64 pl-6 pr-6 md:pr-0">
                    <div class="md:w-1/3 py-4 md:py-0">
                        <p class="text-5xl md:text-6xl font-bold leading-normal">Skills</p>
                        <p class=" text-xl font-thin mb-4 leading-loose">
                        Naturally, having worked at IBM for a year, I have a strong base of technical skills,
                        with a good knowledge of JavaScript, Node, React, Python, Postgres, SQLite, and Terraform,
                        as well as general principles of technical architecture and various cloud providers. Beyond
                        this, I also have strong numerical and algebraic skills, having a physics degree from Cambridge,
                        and my capacity for written communication is attested to by my Masters degree. It goes without saying,
                        with experience in the corporate environment, that I have the ability to organise myself and others,
                        and to work constructively as part of a team.
                        </p>
                    </div>
                    <div class="md:w-1/2 md:pr-64 py-4 md:py-0">
                        <div class="bg-gray-300 p-6 rounded-lg shadow-2xl text-black ">
                            <img src={WebDev} width={450}  alt='' class="border border-grey-700 rounded-lg"/>
                            <p class="font-bold p-4">ECMA talking about?</p>
                            <p class="pl-4 wrap">Ever wondered what the difference between ECMAScript and JavaScript is? In the late 90s, web developers involved 
                            in the creation of JavaScript wanted to produce an interoperable standardised version to make the language universal. To do this, they handed over 
                            the definition of standards to the European Computer Manufacturers Association (ECMA). In 1997, ECMA released its first set of guidance on JavaScript standards.</p>
                        </div>
                    </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
                <div class="flex flex-col items-center w-full text-gray-600" >
                    <div class="flex md:flex-row flex-col justify-between items-center w-full md:pr-64 pl-6 pr-6 md:pl-0 justify-end">
                        <div class="md:w-1/2 md:pl-64 py-4 md:py-0">
                            <div class="bg-gray-600 p-6 rounded-lg shadow-xl text-white ">
                                <img src={DayToday} width={500} height={400}  alt='' class=" rounded-lg"/>
                                <p class="font-bold p-4">Now fact me till I fart!</p>
                                <p class="pl-4 wrap">The Day Today was a popular satirical comedy programme in the mid 90s which lampooned the strange rituals of newcasters.
                                Written by Armando Ianucci and Chris Morris, amongst others, it helped launch the career of a certain Alan Partridge as the BBC's go-to chat provider.
                                Chris Morris later built a career along similar lines making hilarious and controversial satires like Brass Eye and Four Lines. Armando Ianucci has
                                written such iconic works as The Thick of It, Veep, Alan Partridge - the list goes on!
                                </p>
                            </div>
                        </div>
                        <div class="md:w-1/3 py-4 md:py-0">
                            <p class="text-5xl md:text-6xl font-bold leading-normal text-right">Interests</p>
                            <p class=" text-xl font-thin mb-4 leading-loose text-right">
                            Outside of work my interests are very varied. I like to play guitar, both classical and electric, as
                            well as piano, and have a broader interest in music, regularly attending concerts in London (when we
                            aren't in lockdown). As well, I have a love of literature, with an especial interest in Tolstoy and
                            Turgenev, and a guilty pleasure in spy fiction. I'm also a bit of a graphophile - I love to write -
                            and write short stories, (very bad) attempts at novels, and philosophical essays for my own pleasure.
                            But for all of that, I'm never one to say no to a visit to the pub, or a meal with friends,
                            and I enjoy unwinding by watching old movies and comedy programs (particular favourites are Brass Eye
                            and Peep Show, which probably tells you something about the level of humour on which I subsist). 
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomePageView;