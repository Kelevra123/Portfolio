import React from 'react';
import AboutArea from './about';
import Banner from './banner';
import BrandArea from './brand';
import ContactArea from './contact';
import ProjectArea from './project';
import ServicesArea from './services';


export default function MainArea() {
  return (
    <>
    <main className='site-main'>
        <Banner/>
        <AboutArea/>
        <BrandArea/>
        <ServicesArea/>
        <ProjectArea/>
        <ContactArea/>
    </main>
    </>
  );
}
