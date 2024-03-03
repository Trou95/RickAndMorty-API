import React, {useEffect, useState} from 'react';
import {TrashIcon} from "@heroicons/react/24/outline";
import Datatable from "../components/table/Datatable";
import {dispatch, useSelector} from "../store";
import {getEpisodes, IEpisodeResponse} from "../store/slices/episode";
import {Link} from "react-router-dom";

function Episode() {

	const {episodes, meta, isLoading} = useSelector(state => state.episode);
	const [pagePaginate, setPagePaginate] = useState(1);
	const [search, setSearch] = useState('');


	useEffect(() => {
		dispatch(getEpisodes(pagePaginate, search))
	}, [dispatch, pagePaginate, search]);

	return (
		<div className="w-9/12 mx-auto m-16">
			<Datatable
				pagePaginate={pagePaginate}
				setPagePaginate={setPagePaginate}
				meta={meta} isLoading={isLoading} setSearch={setSearch}
			>
				<div className="flex flex-wrap">


					{episodes?.map((episode: IEpisodeResponse) => (
						<div key={episode.id} className="rounded-lg border m-3 bg-cardtext-card-foreground shadow-sm w-full max-w-sm">
							<div className="flex flex-col flex-wrap space-y-1.5 p-6">
								<h3 className="font-semibold whitespace-nowrap text-wrap  tracking-tight text-2xl">{episode.name}</h3>
								<p className="text-sm text-muted-foreground">Last aired on {episode.air_date}</p>
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
									Episode #{episode.episode}
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
									Created on {episode.created}
								</div>
							</div>
							<div className="items-center p-6 flex justify-center">
								<Link to={`/episodes/${episode.id}`} className="inline-block w-full max-w-xs">
									<button
										className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-primary-foreground hover:bg-black/90 h-10 px-4 py-2">
										View Episode
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</Datatable>
		</div>
	);
}

export default Episode;
