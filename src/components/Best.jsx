import React from "react";
import { Link } from 'react-router-dom';
import './Best.css';

function Best(){
    return(
        <div className="bestCnt">
            <p>베스트</p>
            <ul>
                <li><Link to='./best/nowBest'>실시간 베스트</Link></li>
                <li><Link to='./best/weekBest'>주간 베스트</Link></li>
                <li><Link to='./best/monthBest'>월간 베스트</Link></li>
            </ul>
        </div>
    );
}

export default Best;