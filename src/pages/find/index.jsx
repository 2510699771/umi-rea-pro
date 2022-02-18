import React from 'react'
import { Link } from 'umi'
export default function Find({ children }) {
    return (
        <div>
            <ul>
                <li><Link to='/find/discover'>推荐</Link></li>
                <li><Link to='/find/topList'>排行榜</Link></li>
                <li><Link to='/find/playList'>歌单</Link></li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}
