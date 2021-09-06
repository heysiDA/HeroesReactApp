import React from 'react';
import {Link} from "react-router-dom";

const HeroCard = ({
      id,
      superhero,
      alter_ego,
      characters,
      width = ''
  }) => {
    return (
        <div className="card ms-3 mr-2 mb-3 col-md-3 col-sm-3 col-10" style={{maxWidth: 540, width: width}}>
            <div className={'row no-gutters'}>
                <div className={'col-md-4'}>
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero}/>
                </div>
                <div className={'col-md-8'}>
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className={'card-tex'}>{characters}</p>
                        }
                       <Link to={`./hero/${id}`}>
                            Mas..
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
