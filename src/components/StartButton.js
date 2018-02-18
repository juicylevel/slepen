import React from 'react';

const StartButton = ({ type, text, className, onClick }) => (
	<button className={ `big-button ${className}` } onClick={ onClick.bind(null, type) }>{ text }</button>
)

export default StartButton;