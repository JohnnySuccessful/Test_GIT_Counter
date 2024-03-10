import React, {useState} from 'react';

const TextField = () => {

    const [text, setText] = useState('Some text')

    const EventHandler = (event) => {
        const textChange = event.target.value
        setText(textChange)
        console.log(textChange)
    }


    return (
        <div>
        <input value={text} onChange={EventHandler}/>
        </div>
    );
};

export default TextField;