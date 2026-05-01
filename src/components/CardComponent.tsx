import Link from '@docusaurus/Link';
import React from 'react';

interface CardSectionProps {
  children: React.ReactNode;
}

export function CardSection(props: CardSectionProps) {
  return (
    <section className='row'>
      {props.children}
    </section>
  );
}

interface CardProps {
  to: string;
  title: string;
  description: string;
  preview?: string;
  new?: boolean;
}

export function Card(props: CardProps) {
  return (
    <article className='col col--6 margin-bottom--lg'>
      <Link
        to={props.to}
        className="card padding--lg cardContainer"
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