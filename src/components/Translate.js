import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Ukrainian',
        value: 'uk',
    },
    {
        label: 'French',
        value: 'fr',
    },
    {
        label: 'Latin',
        value: 'la',
    },
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <Dropdown
                        label='Select a language'
                        selected={language}
                        onSelectedChange={setLanguage}
                        options={options}
                    />
                    <hr />
                    <Convert text={text} language={language} />
                </div>
            </div>
        </div>
    );
};

export default Translate;
