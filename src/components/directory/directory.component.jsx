import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Black',
          imageUrl: 'https://i.ibb.co/zSPJbYz/Ralliart-HB-Skate-Decks-BLK-Correct.png',
          id: 1,
          linkUrl: 'shop/decks'
        },
        {
          title: 'Black-White',
          imageUrl: 'https://i.ibb.co/pfHqL6r/Ralliart-HB-Skate-Decks-BLKWHT-Correct.png',
          id: 2,
          linkUrl: 'shop/decks'
        },
        {
          title: 'Blue',
          imageUrl: 'https://i.ibb.co/6rLT7kM/Ralliart-HB-Skate-Decks-BLUE-Correct.jpg',
          id: 3,
          linkUrl: 'shop/decks'
        },
        {
          title: 'Orange',
          imageUrl: 'https://i.ibb.co/w7yh1ZQ/Ralliart-HB-Skate-Decks-Orange-Correct.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/decks'
        },
        {
          title: 'Red',
          imageUrl: 'https://i.ibb.co/4dgVppR/Ralliart-HB-Skate-Decks-RED-Correct.png',
          id: 5,
          linkUrl: 'shop/decks'
        },
        {
          title: 'White',
          imageUrl: 'https://i.ibb.co/1Myh92V/Ralliart-HB-Skate-Decks-WHT-Correct.png',
          id: 5,
          linkUrl: 'shop/decks'
        }
      ]
    }
  }

  render () {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ title, imageUrl, id }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} />
          ))
        }
      </div>
    )
  }
};

export default Directory;