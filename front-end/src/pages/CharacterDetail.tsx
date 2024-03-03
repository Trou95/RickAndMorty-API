import React, {useEffect} from 'react';
import {dispatch, useSelector} from "../store";
import {Link, useParams} from "react-router-dom";
import {getCharacter} from "../store/slices/character";

function EpisodeDetail() {
	const { character, meta, isLoading } = useSelector(state => state.character);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			dispatch(getCharacter(id));
		}

	}, [dispatch]);

	return (
		<div className="w-9/12 mx-auto m-16 flex justify-around">
			<div
				className="border text-card-foreground w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden"
			>
				<div className="flex items-center p-4">
					<div className="flex-shrink-0">
						<img src={character?.image} alt="Rick Sanchez" className="h-16 w-16 rounded-full"/>
					</div>
					<div className="ml-4">
						<div className="text-lg font-semibold">{character?.name}</div>
						<div className="text-sm text-gray-500">{character?.species} - {character?.gender}</div>
						<div
							className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-1">
							{character?.status}
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200">
					<div className="p-4">
						<div className="text-sm font-medium text-gray-900">Origin</div>
						<div className="text-sm text-gray-500">{character?.origin?.name}</div>
					</div>
					<div className="border-t border-gray-200 p-4">
						<div className="text-sm font-medium text-gray-900">Location</div>
						<div className="text-sm text-gray-500">{character?.location?.name}</div>
					</div>
					<div className="border-t border-gray-200 p-4">
						<div className="text-sm font-medium text-gray-900">Episodes</div>
						<div className="text-sm text-gray-500">
							<ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
								{character?.episode?.map((episodeUrl: string) => {
									const parts = episodeUrl.split("/");
									const episodeId = parts[parts.length - 1];

									return (
										<li key={episodeId}>
											<Link to={`/episodes/${episodeId}`}>
												{episodeUrl}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EpisodeDetail;
