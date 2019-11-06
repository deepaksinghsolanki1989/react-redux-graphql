import React from 'react'
import Link from './link'
import { useDispatch } from "react-redux";
import { useLazyQuery } from '@apollo/react-hooks';
import { FEED_QUERY } from '../graphql'

const LinkList = () => {
	const [execute, { loading, data }] = useLazyQuery(FEED_QUERY);

	const dispatch = useDispatch();

	const callAPI = () => {
		console.log("callApi")
		execute()
	}

	if (data && data.BusinessTypes.length > 0) {
		console.log("DATA LENGTH", data.BusinessTypes.length)
		dispatch({ type: 'SAVE_DATA_IN_STORE', data });
	}

	if (loading) return "Loding..."

	return (
		<div>
			<button onClick={() => callAPI()}>Call me</button>
			<ul>
				{
					data && data.BusinessTypes.length > 0
						? data.BusinessTypes.map(link => <Link key={link.businessId} link={link} />)
						: <li>No data</li>

				}
			</ul>
		</div >
	)
}

export default LinkList;
