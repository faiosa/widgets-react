import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// Test

const App = () => {
    const items = [
        {
            title: 'What is React?',
            content: 'React is a JavaScript framework',
        },
        {
            title: 'Where is React used?',
            content: 'In various cases',
        },
        {
            title: 'Do you like coding in React?',
            content: 'Yes, pretty good',
        },
    ];

    const options = [
        {
            label: 'Shine bright like a rose! Choose R E D',
            value: 'red',
            content: (
                <img
                    alt="red"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe6%2FRed_rectangle.svg%2F1280px-Red_rectangle.svg.png&f=1&nofb=1"
                    width="700px"
                    height="700px"
                />
            ),
        },
        {
            label: 'Support vegans! Choose G R E E N',
            value: 'green',
            content: (
                <img
                    alt="green"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F25%2FGreen_rectangle.svg%2F2000px-Green_rectangle.svg.png&f=1&nofb=1"
                    width="700px"
                    height="700px"
                />
            ),
        },
        {
            label: 'Support freedom! Choose B L U E',
            value: 'blue',
            content: (
                <img
                    alt="blue"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.flagshop.fi%2FWebRoot%2Fvilkasfi01%2FShops%2F2014080403%2F53F0%2FF886%2FBB3A%2F522C%2FCB5B%2F0A28%2F100A%2F2578%2Fblue_rectangle.jpg&f=1&nofb=1"
                    width="700px"
                    height="700px"
                />
            ),
        },
    ];

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="ui container">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="button"
            >
                Toggle Dropdown
            </button>

            {showDropdown ? (
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            ) : null}
        </div>
    );
};

export default App;
