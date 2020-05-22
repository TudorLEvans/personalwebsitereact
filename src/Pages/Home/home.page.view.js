import React from 'react'
import {Tudor} from '../../Images'
import Scrollspy from 'react-scrollspy'

const HomePageView = () => {

    return (
        <div class="w-fill pt-32">
            <div class="font-mono fixed w-48 m-8 border-r-2 border-solid border-black text-right pr-4">
            <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'] } offset={1} currentClassName="is-current">
                <li><a href="#section-1">home</a></li>
                <li><a href="#section-2">education</a></li>
                <li><a href="#section-3">career</a></li>
                <li><a href="#section-4">skills</a></li>
                <li><a href="#section-5">interests</a></li>
            </Scrollspy>
            </div>
            <div class="flex-column justify-center mb-32 pt-20">
                <section id='section-1' class="justify-center section-1 w-full">
                    <p class="text-6xl text-center font-thin leading-loose">Tudor Lucien Evans</p>
                    <div class="flex justify-center">
                        <img src={Tudor} alt=''/>
                    </div>
                </section>
                <section id='section-2' class="flex bg-primary-colour pt-12 pb-12 w-full text-white" >
                    <div class="w-1/3"/>
                    <div class="w-1/3">
                    <p class="text-6xl text-center font-thin leading-loose">Education</p>
                        <p class=" text-xl text-center font-hairline mb-4 leading-loose">
                            I read physics at Jesus College, Cambridge, achieving a triple first. After this, I took a bit of a side-step, and chose to read
                            History and Philosophy of Science for my Masters, in order to explore my interest in philosophy. It's all gone, but it's not
                            fogotten, and I continue to maintain an active interest in the subjects I studied at Cambridge.
                        </p>
                    </div>
                    <div class="w-1/4"/>
                </section>
                <section id='section-3' class="flex pt-12 pb-12 bg-white w-full" >
                <div class="w-1/3"/>
                <div class="w-1/3">
                    <p class="text-6xl text-center font-thin leading-loose">Career</p>
                    <p class=" text-xl text-center font-hairline mb-4 leading-loose">
                        After graduating from Cambridge in June of 2019, I began my career at IBM UK, working in the South Bank office
                        as a technology consultant. After entering as part of the ServiceNow practice, I moved into the public sector, 
                        working under Hass Niazi (<a href="https://www.hassniazi.com">https://www.hassniazi.com</a>). Since joining
                        his team, I've been working on the MAZE mutlicloud project, in which we are aiming to create a user-friendly
                        system for automating cloud infrastructure deployment through Terraform. As part of this project I've learnt about
                        working with Databases, APIs, Python, Javascript, React, Technical Architecture, and multiple cloud providers.
                    </p>
                </div>
                </section>
                <section id='section-4' class="flex bg-primary-colour pt-12 pb-12 text-white w-full" >
                <div class="w-1/3"/>
                <div class="w-1/3">
                    <p class="text-6xl text-center font-thin leading-loose">Skills</p>
                    <p class=" text-xl text-center font-hairline mb-4 leading-loose">
                        Naturally, having worked at IBM for a year, I have a strong base of technical skills,
                        with a good knowledge of JavaScript, Node, React, Python, Postgres, SQLite, and Terraform,
                        as well as general principles of technical architecture and various cloud providers. Beyond
                        this, I also have strong numerical and algebraic skills, having a physics degree from Cambridge,
                        and my capacity for written communication is attested to by my Masters degree. It goes without saying,
                        with experience in the corporate environment, that I have the ability to organise myself and others,
                        and to work constructively as part of a team.
                    </p>
                    </div>
                </section>
                <section id='section-5' class="flex bg-white pt-12 pb-12 w-full" >
                <div class="w-1/3"/>
                <div class="w-1/3">
                    <p class="text-6xl text-center font-thin leading-loose">Interests</p>
                    <p class=" text-xl text-center font-hairline mb-4 leading-loose">
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
                </section>
            </div>
        </div>
    )
}

export default HomePageView;