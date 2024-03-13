import React from 'react';
import Aside from './Aside/Aside'
import Content from './Content/Content'

class Main extends React.Component {
    render() {
        return (
            <main className='main'>
                <Aside />
                <Content />
            </main>
        );
    }
}

export default Main;