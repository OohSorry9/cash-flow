import React from 'react'
import './css/sectionTitle.css'

function SectionTitle({ data }) {
  return (
           <div className="Sectiontitle">
          <div className="image">
            <img src={data.src} alt={data.alt} />
          </div>
          <h2 id="section-title">{data.title}</h2> 
        </div>
  )
}

export default SectionTitle