import React, {Component} from 'react';
import User from './User';

// експорт компонента в верхний уровень для использования 
export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="http://ladyzest.com/wordpress/wp-content/uploads/2013/08/2358132_Screen_shot_2012-07-15_at_7.07.21_PM.jpg" 
                    alt="man"
                    name="Scott"
                    min
                    />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quos voluptates ut, esse dolore atque 
                    nesciunt ea quaerat laudantium nobis, illum voluptatum? Excepturi quibusdam expedita illo enim aliquid, i
                    psum quasi.
                </div>
            </div>
        )
    }
}