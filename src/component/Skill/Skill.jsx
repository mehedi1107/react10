import React from 'react'
import './Skill.css'

const Services = () => {
  return (
    <div id='skill'>
      <h2 id='skill-h2'>My <span id='front'> Skills</span> </h2>
      <div id='skill2'>
      <div id='container1'>
        <h2 >Tecnical Skills</h2>
        <div id='tecnical'>

          <div id='bar'><i id='pro-language1' class='bx bxl-html5'></i>
           <div>
            <span id='w3s'>HTML:5</span>
            <div   className='we' id='progress-line html'>
            <span id='line-html'></span>
            </div>
           </div>
          </div>

          <div id='bar'><i id='pro-language2' class='bx bxl-css3' ></i>
           <div>
            <span id='w3s'>CSS</span>
            <div  className='we' id='progress-line css'>
            <span id='line-css'></span>
            </div>
           </div>
          </div>

          <div id='bar'><i id='pro-language3' class='bx bxl-javascript' ></i>
           <div>
            <span id='w3s'>Javascript</span>
            <div   className='we' id='progress-line javascript'>
            <span id='line-java'></span>
            </div>
           </div>
          </div>

          <div id='bar'><i  id='pro-language4' class='bx bxl-react' ></i>
           <div>
            <span id='w3s'>React</span>
            <div className='we' id='progress-line react'>
            <span id='line-react'></span>
            </div>
           </div>
          </div>

          <div id='bar'><i  id='pro-language5' class='bx bxl-nodejs' ></i>
           <div>
            <span id='w3s'>Node.js</span>
            <div className='we' id='progress-line node.js'>
            <span id='line-node'></span>
            </div>
           </div>
          </div>
          </div>

      </div>
      <div id='container1'>
        <h2> Professional Skills</h2>
        <div id='radio5'>
        
        <div id='radial-bar'>
          <svg x='0px' y='0px' viewBox='0 0 200 200'>
            <circle id='circle1' cx="100" cy="100" r="80"></circle>
            <circle className='path' id='path-1' cx="100" cy="100" r="80"></circle>
          </svg>
          <div id='percentage'>90%</div>
          <div id='text3'>Creativity</div>
        </div>

        <div id='radial-bar'>
          <svg x='0px' y='0px' viewBox='0 0 200 200'>
            <circle id='circle1' cx="100" cy="100" r="80"></circle>
            <circle className='path' id='path-2' cx="100" cy="100" r="80"></circle>
          </svg>
          <div id='percentage'>65%</div>
          <div id='text3'>Communication</div>
        </div>
        <div id='radial-bar'>
          <svg x='0px' y='0px' viewBox='0 0 200 200'>
            <circle id='circle1' cx="100" cy="100" r="80"></circle>
            <circle className='path' id='path-3' cx="100" cy="100" r="80"></circle>
          </svg>
          <div id='percentage'>90%</div>
          <div id='text3'>Problem Solving</div>
        </div>
        <div id='radial-bar'>
          <svg x='0px' y='0px' viewBox='0 0 200 200'>
            <circle id='circle1' cx="100" cy="100" r="80"></circle>
            <circle className='path' id='path-4' cx="100" cy="100" r="80"></circle>
          </svg>
          <div id='percentage'>90%</div>
          <div id='text3'>Teamwork</div>
        </div>
        </div>

        </div>
       </div>
      
    </div>
  )
}

export default Services
