import React, {useEffect, useState} from 'react';
import {TrashIcon} from "@heroicons/react/24/outline";
import Datatable from "../components/table/Datatable";
import {dispatch, useSelector} from "../store";
import {getEpisodes, IEpisodeResponse} from "../store/slices/episode";
import {Link} from "react-router-dom";
import {getCharacters, ICharacterResponse} from "../store/slices/character";
import {addFavoriteCharacter} from "../store/slices/favorite";
import toast from "react-hot-toast";

function Episode() {

	const {characters, meta, isLoading} = useSelector(state => state.character);
	const {favoriteCharacterIds} = useSelector(state => state.favorite);
	const [pagePaginate, setPagePaginate] = useState(1);
	const [search, setSearch] = useState('');

	const addFavorite = (character: ICharacterResponse) => {
		if (favoriteCharacterIds.length == 10) {
			toast.error('You can only add 10 characters to favorite');
			return;
		}

		dispatch(addFavoriteCharacter(character)).then(() => {
			toast.success('Character added to favorite');
		}).catch(() => {
			toast.error('Character already added to favorite');
		});

	}


	useEffect(() => {
		dispatch(getCharacters(pagePaginate, search))
	}, [dispatch, pagePaginate, search]);

	return (
		<div className="w-9/12 mx-auto m-16">
			<Datatable
				pagePaginate={pagePaginate}
				setPagePaginate={setPagePaginate}
				meta={meta} isLoading={isLoading} setSearch={setSearch}
			>
				<div className="flex flex-wrap">
					{characters?.map((character: ICharacterResponse) => (
						<div
							key={character.id}
							className="border text-card-foreground m-3 w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden"
						>
							<div className="flex items-center p-4">
								<div className="flex-shrink-0">
									<img src={character?.image} alt="Rick Sanchez" className="h-16 w-16 rounded-full"/>
								</div>
								<div className="ml-4">
									<div className="text-lg font-semibold">{character?.name}</div>
									<div
										className="text-sm text-gray-500">{character?.species} - {character?.gender}</div>
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
							</div>
							<div className="items-center p-6 flex justify-center">
								<Link to={`/characters/${character.id}`} className="inline-block w-full max-w-xs">
									<button
										className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-primary-foreground hover:bg-black/90 h-10 px-4 py-2">
										View Character
									</button>
								</Link>
								<button
									onClick={() => addFavorite(character)}
									disabled={favoriteCharacterIds?.includes(character.id)}
									className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-600 text-primary-foreground hover:bg-yellow-400/90 h-10 px-4 py-2">
									Add to Favorite
								</button>
							</div>
						</div>
					))}
				</div>
			</Datatable>
		</div>
	);
}

export default Episode;
