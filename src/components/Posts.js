import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://w-dog.ru/wallpapers/9/4/291798253025085/zima-nebo-el-sneg-priroda-foto.jpg" alt="inst"/>
                <Post src="https://avatars.mds.yandex.net/get-pdb/28866/64669f39-4c1c-4e1d-a4c1-a7c1715a6dfa/s1200?
                webp=false" alt="second"/>
            </div>
        )
    }
}