import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <img src='' alt='LOGO' />
                    <nav>
                        <ul className='navigation'>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                        </ul>
                        <div className='btnGroup'>
                            <button className='btn'>Log in</button>
                            <button className='btn'>Sign up</button>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;