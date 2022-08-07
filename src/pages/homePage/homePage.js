import React from 'react';
import './homePage.css';
import ShowcasePreview from '../../components/showcasePreview/showcasePreview';

function HomePage() {
    return (
        <section>
            <ShowcasePreview 
                imageSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' 
                artistName='Some Artist' 
                showcaseTitle='Showcase Title' 
            />
        </section>
    );
}

export default HomePage;