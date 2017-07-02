import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

class Github extends React.Component{

    render(){
        return(
            <div>

                {/*<nav>
                    <span className="page-title">PROFILE</span>
                    
                    <Link href="/">github</Link><span className="separator"></span>
                    <Link href="https://www.facebook.com/supawit.ruen">Facebook</Link><span className="separator"></span>
                    <Link href="/about">ABOUT</Link><span className="separator"></span>
                </nav>*/}
                {/*<div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
                            <input className="col-xs-12 search" type="search" placeholder="Search.."/>
                        </div>
                    </div>
                </div>*/}
                <div style={{  }} className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 panel panel-default">
                    <div  className="panel-body">
                        <div className="block-img text-center">
                            <img src={ this.props.user.avatar_url } />

                            <h3>{ this.props.user.name }</h3>
                        </div>
                    </div>
                    <hr style={{ margin: '0' }}/>
                    <div  className="panel-body container-fluid text-center">
                        <div className="row">
                            <div className="col-xs-4">
                                <h3>{ this.props.user.followers }</h3>
                                <span>Followers</span>
                            </div>
                            <div className="col-xs-4">
                                <h3>{ this.props.user.public_repos }</h3>
                                <span>Repository</span>
                            </div>
                            <div className="col-xs-4">
                                <h3>{ this.props.user.following }</h3>
                                <span>Following</span>
                            </div>
                            
                        </div>
                    </div>
                    <hr style={{ margin: '10px 0'}}/>
                </div>
                
                {/*<section id="card_profile">
                    <div className="profile">
                        
                        <h2>{ this.props.user.name }</h2>
                        <div>
                            <div className="col-4">
                                <b>{ this.props.user.followers }</b>
                                <p>Followers</p>
                            </div>
                            <div className="col-4">
                                <b>{ this.props.user.public_repos }</b>
                                <p>Repo</p>
                            </div>
                            <div className="col-4">
                                <b>{ this.props.user.following }</b>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    <h4>Repository Name</h4>
                    <div className="repo">
                        
                        {
                            this.props.repos.map(repo => (
                                <div key={repo.name}>
                                    <a href={repo.html_url} target="_blank">
                                        { repo.name }
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    
                </section>*/}

            </div>
        );
    }

}

export default Github