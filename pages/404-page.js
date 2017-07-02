export default () => (
    <div>
        <h1>404</h1><span className="separator"></span>
        <h2>Not Found</h2>
        <p>powered by Bas</p>
        <style jsx>{`
            h1{
                font-size: 50px;
                display: inline-block;
                position: relative;
                top: -1em;
            }

            p{
                margin-top: -2em
            }
            h2{
                color: gray;
                font-family: sans-serif;
                font-weight: normal;
                font-size: 50px;
                display: inline-block;
                position: relative;
                top: -1em;
            }


            div{
                text-align: center;
                position: absolute;
                top: 20%;
                width: 100%;
                

            }

            .separator{
                border: 1px solid black;
                display: inline-block;
                height: 150px;
                margin: 0 20px;
            }
        `}</style>
    </div>
)