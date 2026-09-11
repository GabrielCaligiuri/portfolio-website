//src Home.jsx
//Gabriel Caligiuri
import './background.css';

export default function Background() {
    return (
        <>
        <div className='section_block'>
            <h2 className='education__title'> Education </h2>
            <ul className='list__education'>
                <p className='coursework'> Relevant coursework: Data Structures and Algorithms, Discrete Math, Applied Linear Algebra, Probability and Statistics, Information Assurance.</p>
                <li>
                    <h3 className='cc__subcategory'> Palomar Community College: </h3>
                    <p className='cc__information'>
                        Computer Science Transfer Program, Sep 2022 - May 2025
                    </p>
                </li>
                <li>
                    <h3 className='asu__subcategory'> Arizona State University: </h3>
                    <p className='asu__information'>
                        Bachelor of Science, Computer Science, Sep 2025 - Present
                    </p>
                </li>
            </ul>
        </div>
        <div className='section_block'>
            <h2 className='skills'> Skills </h2>
            <ul className='list__skills'>
                <li>
                    <h3 className='languages'> Programming Languages </h3>
                    <p className='languages__info'>
                        Python, Java, C, Assembly, SQL, Bash Scripting
                    </p>
                </li>
                <li>
                    <h3 className='web'> Web Development </h3>
                    <p className='web__info'>
                        HTML, CSS, JavaScript, TypeScript, Git, GitHub, React
                    </p>
                </li>
                <li>
                    <h3 className='core'> Core Competencies </h3>
                    <p className='core__info'>
                        Statistical Analysis, Problem Solving, Attention to Detail, Data Analysis
                    </p>
                </li>
            </ul>
        </div>
        <div className='section_block'>
            <h2 className='skills'> Work Experience </h2>
            <ul className='list__work'>
                <li>
                    <h3 className='calabria'> Caffe Calabria </h3>
                        <ul>
                            <li>
                                <p className='calabria__info'>
                                    Designed and built a wholesale ordering portal enabling customers to place orders online.
                                </p>
                            </li>
                            <li>
                                <p className='calabria__info'>
                                    Developed and maintained the back end of the company website resolving issues and implementing updates as needed.
                                </p>
                            </li>
                            <li>
                                <p className='calabria__info'>
                                    Supported wholesale operations directly, including roasting and packing coffee beans to fulfill orders.
                                </p>
                            </li>
                        </ul>
                </li>
                <li>
                    <h3 className='jojos'> JoJo's Creamery </h3>
                    <ul>
                        <li>
                            <p>
                                Managed store operations, including inventory tracking and cash handling, overseeing a team of 4 employees.
                            </p>
                        </li>
                        <li>
                            <p className='jojos__info'>
                                Led a team of 4 employees, training new hires and maintaining efficiency, cleanliness and product quality.
                            </p>
                        </li>
                        
                    </ul>
                </li>
            </ul>
        </div>
        </>
    )
};






