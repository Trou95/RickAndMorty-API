import React, {useEffect, useState} from 'react';
import Datatable from "../components/table/Datatable";
import {dispatch, useSelector} from "../store";
import {getEpisode, IEpisodeResponse} from "../store/slices/episode";
import {Link, useParams} from "react-router-dom";

function EpisodeDetail() {

	const { episode, meta, isLoading } = useSelector(state => state.episode);
	const [pagePaginate, setPagePaginate] = useState(1);
	const [search, setSearch] = useState('');
	const { id } = useParams();




	useEffect(() => {
		if (id) {
			dispatch(getEpisode(id));
		}

	}, [dispatch, pagePaginate, search]);

	return (
		<div className="w-9/12 mx-auto m-16 flex justify-around">
			<div key={episode?.id} className="rounded-lg border bg-cardtext-card-foreground shadow-sm w-full max-w-sm">
				<div className="flex flex-col flex-wrap space-y-1.5 p-6">
					<h3 className="font-semibold whitespace-nowrap text-wrap  tracking-tight text-2xl">{episode?.name}</h3>
					<p className="text-sm text-muted-foreground">Last aired on {episode?.air_date}</p>
				</div>
				<div className="p-6 grid gap-2">
					<div className="flex items-center gap-2 text-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-4 h-4"
						>
							<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
							<line x1="16" x2="16" y1="2" y2="6"></line>
							<line x1="8" x2="8" y1="2" y2="6"></line>
							<line x1="3" x2="21" y1="10" y2="10"></line>
						</svg>
						Episode #{episode?.episode}
					</div>
					<div className="flex items-center gap-2 text-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-4 h-4"
						>
							<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
							<line x1="16" x2="16" y1="2" y2="6"></line>
							<line x1="8" x2="8" y1="2" y2="6"></line>
							<line x1="3" x2="21" y1="10" y2="10"></line>
						</svg>
						Created on {episode?.created}
					</div>
				</div>
			</div>
			<div>
				<h2 className="mb-2 text-lg font-semibold text-gray-900 ">Character:</h2>

				<ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
					{episode?.characters?.map((characterUrl: string) => {
						const parts = characterUrl.split("/");
						const characterId = parts[parts.length - 1];

						return (
							<li key={characterId}>
								<Link to={`/characters/${characterId}`}>
									{characterUrl}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default EpisodeDetail;
