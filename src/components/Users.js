import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="http://ladyzest.com/wordpress/wp-content/uploads/2013/08/2358132_Screen_shot_2012-07-15_at_7.07.21_PM.jpg" 
                alt="man"
                name="Scott"/>
                <div className="users__block">
                    <User 
                        src="http://ladyzest.com/wordpress/wp-content/uploads/2013/08/2358132_Screen_shot_2012-07-15_at_7.07.21_PM.jpg" 
                        alt="man"
                        name="Scott"
                        min
                        />
                    <User 
                    src="http://ladyzest.com/wordpress/wp-content/uploads/2013/08/2358132_Screen_shot_2012-07-15_at_7.07.21_PM.jpg" 
                    alt="man"
                    name="Scott"
                    min
                    />
                    <User 
                    src="http://ladyzest.com/wordpress/wp-content/uploads/2013/08/2358132_Screen_shot_2012-07-15_at_7.07.21_PM.jpg" 
                    alt="man"
                    name="Scott"
                    min
                    />
                    <User 
                    src="http://ladyzest.com/wordpress/wp-content/uploads/2013/08/2358132_Screen_shot_2012-07-15_at_7.07.21_PM.jpg" 
                    alt="man"
                    name="Scott"
                    min
                    />
                </div>
        </div>
    )
}