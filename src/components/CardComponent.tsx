import Link from '@docusaurus/Link';
import React from 'react';

export function CardSection(props) {
  return (
    <section className='row'>
      {props.children}
    </section>
  );
}

export function Card(props) {
  return (
    <article className='col col--6 margin-bottom--lg'>
      <Link
        to={props.to}
        className="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
        style={{height: "100%"}}
      >
        <div className=''>
          {
            props.preview ?
            <div className='img-card margin-bottom--md'>
              <img src={props.preview} className='' style={{flex: 1, height: "100%"}}/>
            </div> :
            undefined
          }
          <h3>
            {props.title} {props.new ? <span className="badge badge--info">Новинка</span> : null}
          </h3>
          <p className='hardshard-p'>{props.description}</p>
        </div> 
      </Link>
    </article>
  );
}