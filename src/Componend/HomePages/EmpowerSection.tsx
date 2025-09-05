/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Lottie from 'lottie-react'
import empowerAnimation from '../../assets/js/empower.json'

const EmpowerSection = () => {
const interactivity: any = {
  mode: "scroll",
  actions: [
    { visibility: [0, 0.2], type: "stop", frames: [0] },
    { visibility: [0.2, 0.8], type: "seek", frames: [0, 60] },
    { visibility: [0.8, 1.0], type: "loop", frames: [60, 90] }
  ],
}


  return (
    <section id="about" className="empower-area section-link !relative py-16">
      <div className='empower-top'>
      <div className="ellipse ellipse-3"></div>
      <div className="dots-background dotsBackground"></div>

      <div className="!container mx-auto px-4">
        <div className="empower-content flex flex-col lg:flex-row items-center gap-8">
          
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Empowering the Future of Blockchain
            </h2>
            <p className="text-base lg:text-lg">
              MetaFusion Labs is a blockchain solutions company officially registered in Panama…
            </p>
          </div>

          <div className="lg:w-1/2">
            <Lottie animationData={empowerAnimation} interactivity={interactivity} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {[
            { icon: 'power-1.png', title: 'Blockchain Infrastructure', text: 'MetaFusion Labs is...' },
            { icon: 'power-2.png', title: 'Ensure Accessibility', text: 'Make Web3 tools...' },
            { icon: 'power-3.png', title: 'Bridge Finance & Commerce', text: 'Develop robust systems...' },
            { icon: 'power-4.png', title: 'Champion Decentralization', text: 'Promote transparent...' },
          ].map((card, idx) => (
            <div key={idx} className="single-empower-card p-6">
              <div className="flex flex-col items-center md:items-start gap-3 mb-4">
                <img className="empower-icon" src={`/assets/images/icon/${card.icon}`} alt="" />
                <h3 className="text-xl font-medium">{card.title}</h3>
              </div>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default EmpowerSection
