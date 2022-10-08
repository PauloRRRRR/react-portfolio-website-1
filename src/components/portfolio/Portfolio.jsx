import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'


const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Timer para ginástica laboral',
    github: 'https://github.com/PauloRRRRR/timercare-next',
    demo: 'https://timercarenext-kd4tmmxlz-paulorrrrr.vercel.app'
  },
  {},
  {}
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
