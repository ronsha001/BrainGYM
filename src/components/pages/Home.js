import React from 'react'
import Cards from '../Cards';
import Dedicate from '../Dedicate';
import Footer from '../Footer';
import Navbar from '../Nav';
import TopSection from '../topSection';
import TrainProgram from '../TrainProgram';

function Home() {
    return (
        <>
            <Navbar></Navbar>

            <TopSection></TopSection>

            <TrainProgram></TrainProgram>

            <Cards></Cards>

            <Dedicate></Dedicate>

            <Footer></Footer>
        </>
    )
}

export default Home;
