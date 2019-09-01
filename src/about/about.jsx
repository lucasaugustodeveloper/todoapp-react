import React from 'react'

import PageHeader from '../templates/pageHeader'

export default props => (
  <div className='row'>
    <div className='col-lg-12 about'>
      <header className='about_title'>
        <PageHeader name='Sobre' small='nós' />
      </header>
      <div className='row'>
        <div className='col-lg-12 about_mission'>
          <header className='about_mission_title'>
            <h2>Missão</h2>
          </header>
          <p className='about_mission_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus adipisci quod cupiditate, ducimus obcaecati fuga eaque atque nobis excepturi totam.</p>
        </div>
        <div className='col-lg-12 about_vision'>
          <header className='about_vision_title'>
            <h2>Visão</h2>
          </header>
          <p className='about_vision_description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non incidunt doloremque eius ratione omnis quasi beatae velit cumque atque magni delectus esse saepe expedita debitis at quod fugit similique ipsum quis, porro voluptas sed recusandae vitae mollitia? Neque nam, rerum.
          </p>
        </div>
        <div className='col-lg-12 about_values'>
          <header className='about_values_title'>
            <h2>Valores</h2>
          </header>
          <p className='about_vision_description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis praesentium consequatur, iste, illo a consectetur maxime ipsa culpa ducimus. Minus, iusto nemo, quod eum a perspiciatis adipisci rem totam dolorum at minima natus enim eaque autem soluta eos facere provident fugiat aperiam nam. Suscipit maxime odio, quisquam sunt distinctio voluptatibus qui, excepturi eum eos vitae, quo sint modi saepe quaerat.
          </p>
        </div>
      </div>
    </div>
  </div>
)
