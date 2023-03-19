/**
 * Please, improve this component and fix all problems.
 *
 * What is important:
 * - design (extensibility, testability)
 * - code cleanliness, following best practices
 * - bugs
 * - consistency
 * - naming
 * - formatting
 *
 * Write your perfect code!
 */

import React, { useEffect, useState } from 'react';

function Card({
  rel,
  title,
  text,
  target,
  linkTitle,
  href,
  onClick,
  linkClassName,
}) {
  return (
    <div className="card">
      <div className="card__title">{title}</div>

      <div className="card__text">{text}</div>
      <a
        className={`default-link card__link ${linkClassName}`}
        target={target}
        rel={rel}
        href={href}
        onClick={onClick}
      >
        {linkTitle}
      </a>
    </div>
  );
}

export default function Page() {
  const [cards, setCards] = useState([]);

  const getData = async () => {
    var data = await fetch(
      'https://my-json-server.typicode.com/savayer/demo/posts'
    );
    const response = await data.json();
    setCards(response);
  };

  useEffect(() => {
    getData();
  }, []);

  function analyticsTrackClick(url) {
    // sending clicked link url to analytics
    console.log(url);
  }

  return (
    <div>
      {cards.map(function (item, index) {
        return (
          <Card
            key={index}
            rel="external"
            title={item.title.en}
            linkTitle={item.link_title}
            href={item.link}
            text={item.text}
            linkClassName={item.id == 1 ? 'card__link--red' : ''}
            target={item.id == 1 ? '_blank' : ''}
            onClick={() => analyticsTrackClick(item.link)}
          />
        );
      })}
    </div>
  );
}
