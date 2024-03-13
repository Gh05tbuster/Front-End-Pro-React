import React from 'react';
import Grade from './Grade/Grade';

class Rate extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(() => {
            const grades = document.querySelectorAll('.rate .rateBox .grade');
            if (grades.length === 0) return;

            let maxEl = grades[0];
            let maxVal = 0;
            let winnerCnt = 0;

            grades.forEach(grade => {
                const cnt = +grade.querySelector('.count').innerText;
                if (cnt > maxVal) {
                    maxVal = cnt;
                    maxEl = grade;
                    winnerCnt = 1;
                } else if (cnt === maxVal) {
                    winnerCnt++;
                }
            });

            document.querySelector('.rate .winner').innerHTML = 
            winnerCnt === 1 ? 
            `<img src=${maxEl.querySelector('img').src} alt=''/>`
            :
            `<p class='text'>Unable to determine a winner</p>`;            
        });

    }

    render() {
        return (
            <div className='rate'>
                <div className='rateBox'>
                    {/* <Grade image={'./assets/images/0.svg'}/> */}
                    <Grade image={'./assets/images/1.svg'}/>
                    <Grade image={'./assets/images/2.svg'}/>
                    <Grade image={'./assets/images/3.svg'}/>
                    <Grade image={'./assets/images/4.svg'}/>
                    <Grade image={'./assets/images/5.svg'}/>
                    {/* <Grade image={'./assets/images/5+.svg'}/> */}
                </div>
                <button className='btn big' onClick={this.handleClick}>Summarize</button>
                <div className='winner'></div>
                
            </div>
        );
    }
}

export default Rate;