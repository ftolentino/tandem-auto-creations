import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hoodies',
          imageUrl: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 1,
          linkUrl: 'shop/hoodies'
        },
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1542529727-24cb357c57d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          id: 2,
          linkUrl: 'shop/hats'
        },
        {
          title: 'shirts',
          imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          id: 3,
          linkUrl: 'shop/shirts'
        },
        {
          title: 'Skate Decks',
          imageUrl: 'https://i.ibb.co/RvqMhq8/Decks2.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/decks'
        }
      ]
    }
  }

  render () {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
};

export default Directory;