import React from "react"

//Adding the "Link" component from the "gatsby" library will allow you to link internal pages
//uses react-router inderneath
import {Link} from "gatsby"

//Adding the "Layout" component will allow you o keep consistent layout throughtout your app
//To make adjustments to the "Layout" component,ro to the layout.js file
import Layout from "..//components/layout"
import SEO from "../components/seo"

//Replacing the previous content with our "People" component. I can now reuse the
//component with my custom styles only applied to the component
import People from "..//components/people"

//Adding a conponent inside the "pages" directory will automatically create
//
const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <People
                avatar="https://source.unsplash.com/random/"
                title="Katie"
                excerpt="This is some Text"
            />
               <People
                avatar="https://source.unsplash.com/random/"
                title="Sue"
                excerpt="This is some Text"
            />
               <People
                avatar="https://source.unsplash.com/random/"
                title="Matt"
                excerpt="This is some Text"
            />
            <Link to="/">&larr; Back to Home</Link>
        </Layout>
    )
}

export default Bio