import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import Nav from './nav'


const handler = () => Router.push({
    pathname: 'content',
    query: { name: 'supawit' }
})

Router.onRouteChangeStart = (url) => {
  console.log('App is changing to: ', url)
}

Router.onAppUpdated = (nextUrl) => {
  // persist the local state
  location.href = nextUrl
}

export default () => (
    <div>
        <Head>
            <title>profile | about</title>
            <link rel="icon" href="https://assets-cdn.github.com/favicon.ico"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700,600"/>
            <link rel="stylesheet" href="/static/style.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </Head>

        <Nav></Nav>
        <p>Welcome to About!</p>
        <div> Click <span onClick={() => Router.push('/content')}>here</span> to open other page</div>
        <div><span onClick={handler}>click here send query string</span></div>
        <Link prefetch href="/"><a>back to home</a></Link>
        {/*<style jsx>{`
            pre{
               color: white;
               background: gray; 
            }    
        `}</style>*/}
    </div>
)