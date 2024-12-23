import React from 'react'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section>
        <h2>Acerca de mi</h2>
        <div><img src={getImageUrl("about/aboutImage.png")} alt="Yo programando" /></div>
        <ul>
            <li><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" /></li>
        </ul>
    </section>
  )
}
