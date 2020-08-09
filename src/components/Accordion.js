import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [count, setCount] = useState(0);

	const onTitleClick = index => {
		setActiveIndex(index);
	};
	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>{item.content}</div>
			</React.Fragment>
		);
	});

	const onButtonClick = count => {
		setCount(count + 1);
	};
	return (
		<div>
			<div className='ui styled accordion'>{renderedItems}</div>
			<button type='button' onClick={() => onButtonClick(count)}>
				Click Me!
			</button>
			<br />
			<h2>Clicked times: {count}</h2>
		</div>
	);
};

export default Accordion;
