import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'
import pdf from './resume.pdf'

function App() {
  return (
    <div className="App">
        <Layout>
          <Header className="header-color" title="Arjun Luthra" scroll>
            <Navigation className="navigation-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to={pdf} target="_blank">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                {/* <Link to="/contact">Contact Me</Link> */}
            </Navigation>
          </Header>
          <Drawer title="Arjun Luthra">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to={pdf} target="_blank">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                {/* <Link to="/contact">Contact Me</Link> */}
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main></Main>
          </Content>
        </Layout>
    </div>
  );
}

export default App;