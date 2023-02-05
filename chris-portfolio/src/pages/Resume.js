export default function Resume() {
    return (
        <div className="container">
            <div className="row m-2">
                <h3>Resume</h3>
                <a 
                    href="https://drive.google.com/file/d/135w-vPrzR7uOJkbXtZvilBxYLgxt9Qyn/view?usp=sharing"
                    rel="noreferrer"
                    target="_blank"
                    style={{textAlign:'left', marginLeft:'20px'}}
                >Download</a>
            </div>
            <div className="row m-2">
                <h3>Front-End Proficiencies</h3>
                <ul style={{marginLeft:'25px'}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="row m-2">
                <h3>Back-End Proficiencies</h3>
                <ul style={{marginLeft:'25px'}}>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySql, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}