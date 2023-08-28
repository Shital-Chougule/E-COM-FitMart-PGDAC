import React from 'react'

const About = () => {
    return (
        <body>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 container mt-2 offset-md-3">
                        <h1 style={{ color: "green" }}><u><b>About Us</b></u></h1>

                        <h4 className='mt-4'>Introducing FitMart</h4>

                        <p>Introducing FitMart, your one-stop destination for shopping online fitness equipment. Our e-commerce platform offers a seamless shopping experience for fitness enthusiasts. Powered by the MERN Stack technology, FitMart combines the power of ReactJS, Bootstrap, ExpressJS, and NodeJS and MongoDB as a database at the backend</p>

                        <h4 className='mt-4'>Front-End (ReactJS and Bootstrap)</h4>

                        <p>we prioritize user experience. Our front-end is developed using ReactJS, ensuring fast and interactive interfaces. The integration of Bootstrap enhances the visual appeal and responsiveness, making browsing through our vast range of fitness equipment.</p>

                        <h4 className='mt-4'>Back-End (ExpressJS and NodeJS)</h4>

                        <p className='mb-5'>	Seamless transactions are made possible through our robust back-end architecture. ExpressJS and NodeJS work hand-in-hand, ensuring fast and secure data processing. This dynamic duo guarantees that every user interaction, from account creation to place a order, is executed flawlessly.
                        </p>
                            {/* By Rahul B */}
                    </div>
                </div>
            </div>

        </body>




    )
}
export default About;