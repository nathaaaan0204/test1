import React, { Fragment } from 'react'
import { LoginPage } from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { BlogPostDetail } from './components/BlogPostDetail'

const App = () => {
  return (
    <Fragment>

<Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/BlogPostDetail" element={<BlogPostDetail />} />
      </Routes>


    </Fragment>
  )
}

export default App