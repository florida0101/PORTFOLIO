import React from "react";
import './style.css';

function Apropos() {

    return (
        <section className="apropos" id="apropos">
            <div className="apropos-content">
                <div className='apropos-img'>
                    <img src="image/profile2.jpg" alt="" className='image' />
                </div>

                <div className="apropos-text">
                    <h4>Apropos de moi</h4>
                    <p>
                        Passionnée par la création de sites web et d'applications web,
                        je suis une développeuse web enthousiaste avec 02 années et demis
                        d'expérience dans la conception et le développement de solutions web innovantes et performantes.
                        Mon expertise réside dans la création de sites web spécialités : back-end
                        en utilisant des langages de programmation tels que java et php et des frameworks tels que reactjs et vuejs .
                        Je suis passionnée par la création de sites web qui répondent aux besoins de mes clients et qui offrent
                        une expérience utilisateur exceptionnelle. Je travaille en étroite collaboration avec mes clients pour
                        comprendre leurs objectifs et je crée des sites web sur mesure qui répondent à leurs besoins spécifiques.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Apropos;