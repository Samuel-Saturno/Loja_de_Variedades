import React from 'react'
import './index.css'

import PrecoImg from '../../assets/img/precoimg.png'
import FreteImg from '../../assets/img/freteimg.png'
import BuyImg from '../../assets/img/buyimg.png'

const Advantages = () => {
  return (
    <div className="advantages-main-container">
      <div className="advantages-container">
        <div className="advantages-card">
            <img src={PrecoImg} alt="Preço baixo" className='advantages-img'/>
            <h3 className='advantages-title'>Melhores preços que irá encontrar</h3>
        </div>
        <div className="advantages-card">
            <img src={FreteImg} alt="Frete grátis" className='advantages-img'/>
            <h3 className='advantages-title'>Frete grátis para toda Uiraúna-PB</h3>
        </div>
        <div className="advantages-card">
            <img src={BuyImg} alt="Compra segura" className='advantages-img'/>
            <h3 className='advantages-title'>Todas as formas de pagamento</h3>
        </div>
      </div>
    </div>
  )
}

export default Advantages
