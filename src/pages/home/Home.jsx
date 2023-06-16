import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <Footer/>
    </>
  )
}
export default Home
