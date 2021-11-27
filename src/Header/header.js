import React from 'react';
import "./header.css";

const Header = ({heading, img_url, sub_heading}) => {
    const styles = {
        header: {
          backgroundImage: `url(/dist/images${img_url})`,
          height: '20vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(215, 215, 180, 0.7)',
        }
    }
      
    return (
        <div style={styles.header}>
            <div style={styles.content}>
                <h1 className="display-3 header">{heading}</h1>
                <h3 className="display-6 sub-header">{sub_heading}</h3>
            </div>
        </div>
    );
}

export default Header;
