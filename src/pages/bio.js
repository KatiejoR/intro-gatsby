import React from "react"

//Adding the "Link" component from the "gatsby" library will allow you to link internal pages
//uses react-router inderneath
import {Link} from "gatsby"

//Adding the "Layout" component will allow you o keep consistent layout throughtout your app
//To make adjustments to the "Layout" component,ro to the layout.js file
import Layout from "..//components/layout"
import SEO from "../components/seo"

//Adding a conponent inside the "pages" directory will automatically create
//
const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <img src="https://source.unsplash.com/random/400x200" alt=""/>
            <h1>Hi, My name is Katie.</h1>
            <p>lorem100   </p>
            <Link to="/">&larr; Back to Home</Link>
        </Layout>
    )
}

export default Bio