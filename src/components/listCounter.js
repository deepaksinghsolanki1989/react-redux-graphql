import React from 'react';
import {useSelector} from 'react-redux';

const ListCounter = () => {
	const data1 = useSelector(state => state);

	console.log("ListCounter data : ",data1.articleReducers.data.BusinessTypes);

	return (
		<p>
		{
			data1.articleReducers.data.BusinessTypes ? data1.articleReducers.data.BusinessTypes.length : 0
		}
		</p>
	)
}

export default ListCounter;
