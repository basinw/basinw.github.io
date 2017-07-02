import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

import Github from './github'
import Nav from './nav'

class Index extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            user: {},
            repos: []
        }
    }

    

    async fetchProfile() {
        const user = await fetch('https://api.github.com/users/basinw')
            .then(res => res.json())
            .then(data => data)
        
        this.setState({ user })
    }

    async fetchRepos() {
        const repos = await fetch('https://api.github.com/users/basinw/repos')
            .then(res => res.json())
            .then(data => data)
        
        this.setState({ repos })
    }
    
    componentWillMount(){
        this.fetchProfile();
        this.fetchRepos();
    }

    render() {

        return (
            <div>
                <Head>
                    <title>profile | Github</title>
                    <link rel="icon" href="https://assets-cdn.github.com/favicon.ico"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700,600"/>
                    <link rel="stylesheet" href="/static/style.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                </Head>

                <Nav></Nav>
                <Github user={this.state.user} title="Github profile" repos={ this.state.repos }></Github>
                
                
            </div>
        )
    }

}


export default Index