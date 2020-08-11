import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResult] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        // We can use three methods to get response from the API request

        // First is by using async inside newly created function and then call it
        // const search = async () => {
        // 	await axios.get('url');
        // };
        // search()

        // Second is when we use promises to get response back
        // axios.get('url').then(response => {
        // 	console.log(response.data);
        // });

        // And the third one, which looks more convenient to me - is by creating new function, but without assigning it to the new value.
        // Instead we can call it in the same time.
        (async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                }
            );

            setResult(data.query.search);
        })();
    }, [debouncedTerm]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Visit
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        className='input'
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                    />
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
};

export default Search;
