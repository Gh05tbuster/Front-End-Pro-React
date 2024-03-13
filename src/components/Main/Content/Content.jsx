import React from 'react';
import Grade from '../../Grade/Grade';

class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className='rateBox'>
                    {/* <Grade image={'./assets/images/0.svg'}/> */}
                    <Grade image={'./assets/images/1.svg'}/>
                    <Grade image={'./assets/images/2.svg'}/>
                    <Grade image={'./assets/images/3.svg'}/>
                    <Grade image={'./assets/images/4.svg'}/>
                    <Grade image={'./assets/images/5.svg'}/>
                    {/* <Grade image={'./assets/images/5+.svg'}/> */}
                </div>
            </div>
        );
    }
}

export default Content;