import React from "react";
import './Best.css';

function Best(){
    return(
        <div className="bestCnt">
            <p>베스트</p>
            <ul>
                <li>실시간 베스트</li>
                <li>주간 베스트</li>
                <li>월간 베스트</li>
            </ul>
        </div>
    );
}

export default Best;