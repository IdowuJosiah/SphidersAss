import React from 'react'
import LightNavbar from '../Components/LightNavbar'
import BrowseButton from '../Components/BrowseButton'
import LightFooter from '../Components/LightFooter'
//import '../App.scss'
const CoursesPage = () => {

    let courseInformation = [
        {
            courseImageSrc: 'course-1.png',
            courseLength: ' 4 weeks',
            courseDifficulty: 'Beginner',
            courseUser: 'John Smith',
            courseTitle: 'Web Design Fundamentals',
            courseDetails: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.'
        },

        {
            courseImageSrc: 'course-2.png',
            courseLength: '6 weeks',
            courseDifficulty: 'Intermediate',
            courseUser: 'Emily Johnson',
            courseTitle: 'UI/UX Design',
            courseDetails: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
        },

        {
            courseImageSrc: 'course-3.png',
            courseLength: '8 weeks',
            courseDifficulty: 'Intermediate',
            courseUser: 'David Brown',
            courseTitle: 'Mobile App Development',
            courseDetails: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.'
        },

        {
            courseImageSrc: 'course-4.png',
            courseLength: '10 weeks',
            courseDifficulty: 'Beginner',
            courseUser: 'Sarah Thompson',
            courseTitle: 'Graphic Design for Beginners',
            courseDetails: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.'
        },

        {
            courseImageSrc: 'course-5.png',
            courseLength: '10 weeks',
            courseDifficulty: 'Intermediate',
            courseUser: 'Micheal Adams',
            courseTitle: 'Front-End Web Development',
            courseDetails: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.'
        },

        {
            courseImageSrc: 'course-6.png',
            courseLength: '6 Weeks',
            courseDifficulty: 'Advance',
            courseUser: 'Jennifer Wilson',
            courseTitle: 'Advanced JavaScript',
            courseDetails: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.'
        },



    ]
  return (
    <section className='courses-section'>

        <LightNavbar/>

        <div className='courses-section-page-width'>
            <div className='access-section'>
                <p>
                Access To 5000+ Courses from 300 Instructors & Institutions
                </p>

                <img src='Saly-10.png'alt='#'/>
            </div>

           <div className='courses-input-container'>
                <input className='courses-search-bar' type='text' placeholder='What do you want to learn?'/>
                <div className='magnifying-button-container'>
                    <img src='MagnifyingGlass.png' alt='#'/>
                </div>
           </div>

            <div className='course-benefit-section'>
                <div className='course-benefit-intro'>
                    <header>Benefits</header>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                     Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                    </p>
                </div>

                <div className='course-benefits'>
                    <div className='benefit'>
                        <header>01</header>
                        <div className='text-container'>
                            <h3>Flexible Learning Schedule</h3>
                            <p>Fit your coursework around your existing commitments and obligations.</p>
                        </div>
                        <div className='icon-container'>
                                <img src='./Icon-9.png' alt='#'/>
                        </div>
                    </div>

                    <div className='benefit'>
                        <header>02</header>
                        <div className='text-container'>
                            <h3>Expert Instruction</h3>
                            <p>Learn from industry experts who have hands-on experience in design and development.</p>
                           
                        </div>
                        <div className='icon-container'>
                                <img src='./Icon-9.png' alt='#'/>
                        </div>
                    </div>

                    <div className='benefit'>
                        <header>03</header>
                        <div className='text-container'>
                            <h3>Diverse Course Offerings</h3>
                            <p>Explore a wide range of design and development courses covering various topics.</p>
                           
                        </div>

                        <div className='icon-container'>
                                <img src='./Icon-9.png' alt='#'/>
                        </div>
                    </div>

                    <div className='benefit'>
                        <header>04</header>
                        <div className='text-container'>
                            <h3>Updated Curriculum</h3>
                            <p>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                           
                        </div>

                        <div className='icon-container'>
                                <img src='./Icon-9.png' alt='#'/>
                        </div>
                    </div>

                    <div className='benefit'>
                        <header>05</header>
                        <div className='text-container'>
                            <h3>Practical Projects and Assignments</h3>
                            <p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                          
                        </div>

                        <div className='icon-container'>
                                <img src='./Icon-9.png' alt='#'/>
                        </div>
                    </div>

                    <div className='benefit'>
                        <header>06</header>
                        <div className='text-container'>
                            <h3>Interactive Learning Environment</h3>
                            <p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                          
                        </div>

                        <div className='icon-container'>
                                <img src='./Icon-9.png' alt='#'/>
                        </div>
                    </div>
                  
                </div>
            </div>

            <div className='course-section'>
                <div className='course-benefit-intro'>
                    <header>Our Courses</header>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                        Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                    </p>
                </div>

                <div className='courses'>
                    {
                        courseInformation.map((data, index)=>{
                            return <div key={index} className='course'>
                                        <div className='image-container'>
                                            <img src={data.courseImageSrc} alt='#'/>
                                        </div>
                                        <div className='info-container'>
                                        <div className='span-container'>
                                            <span>{data.courseLength}</span>
                                            <span>{data.courseDifficulty}</span>
                                        </div>

                                            <span className='username'>By {data.courseUser}</span>
                                        </div>
                                        <header>{data.courseTitle}</header>
                                        <p>{data.courseDetails}</p>
                                        <button className='get-button'>Get it Now</button>
                                    </div>
                        })
                    }
              
                </div>
            </div>

            <BrowseButton/>
            <LightFooter/>
        </div>
    </section>
  )
}

export default CoursesPage
