import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebooks from '../components/Freebooks'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <div className="overflow-x-hidden dark:bg-black/95">
                <Navbar />               
                <main className="pt-20">
                    <Banner />
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Home