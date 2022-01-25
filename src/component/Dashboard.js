import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../style.css';
import Content from './Content';
import Sidebarone from './Sidebarone';

export default function Dashboard() {
  return <>
     <Sidebarone />
     <Content/>
    <Footer />
    </>
  ;
}
