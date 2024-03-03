import React, {useEffect, useState} from 'react';
import Datatable from "../components/table/Datatable";
import {dispatch, useSelector} from "../store";
import {getEpisode, IEpisodeResponse} from "../store/slices/episode";
import {Link, useParams} from "react-router-dom";
import toast from "react-hot-toast";
import {deleteFavoriteCharacter, IFavoriteCharacterResponse} from "../store/slices/favorite";

function Favorite() {

	const {characters, meta, isLoading} = useSelector(state => state.favorite);

	const deleteFavorite = (character: IFavoriteCharacterResponse) => {
		if (window.confirm(`Are you sure you want to remove the character named " ${character.name} " from favorites?`)) {
			dispatch(deleteFavoriteCharacter(character?.id)).then(() => {
				toast.success('Character deleted from favorite');
			});
		}
	}

	return (
		<div className="w-9/12 mx-auto m-16 flex justify-around">

			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">
							Character Name
						</th>
						<th scope="col" className="px-6 py-3">
							Actions
						</th>
					</tr>
					</thead>
					<tbody>
					{characters?.map((character: IFavoriteCharacterResponse) => (
						<tr className="bg-white border-b">
							<th scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								{character?.name}
							</th>
							<th scope="row">
								<button
									onClick={() => deleteFavorite(character)}
									className="text-red-600 hover:text-red-900"
								>
									Delete
								</button>
							</th>
						</tr>
					))}
					</tbody>
				</table>
			</div>

		</div>
	);
}

export default Favorite;
