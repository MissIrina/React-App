import React, {Component} from 'react';

class Gallery extends Component {
  render() {
    let alternative = 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg';
    return (
      <div>
        {
          this.props.items.map( (item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <a 
              key={index} className="book"
              href={infoLink}
              target="_blank"
              >
              <img 
                src={imageLinks !== undefined ? imageLinks.thumbnail : alternative} alt="book image" className="book-img"/>
                <div className="book-text">
                  {title}
                </div>
              </a>
             )
          })
        }
      </div>
    )
  }
}
export default Gallery;