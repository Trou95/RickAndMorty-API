import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPaginateMeta, IPaginate} from "../../components/table/IPaginate";
import axios from "axios";

export interface IFavoriteCharacterResponse {
	id: number;
	name: string;
	status: string;
	species: string
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export interface IFavoriteCharacter {
	characters: IFavoriteCharacterResponse[];
	favoriteCharacterIds: number[];
}

const initialState: IFavoriteCharacter = {
	characters: [],
	favoriteCharacterIds: [],
};

const slice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavoriteCharacter: (state, action: PayloadAction<IFavoriteCharacterResponse>) => {
			state.characters.push(action.payload);
			state.favoriteCharacterIds.push(action.payload.id);
		},
		deleteFavoriteCharacter: (state, action: PayloadAction<number>) => {
			state.characters = state.characters.filter(character => character.id !== action.payload);
			state.favoriteCharacterIds = state.favoriteCharacterIds.filter(id => id !== action.payload);
		}
	},
});

export default slice.reducer;

export function addFavoriteCharacter(character: IFavoriteCharacterResponse) {
	return async (dispatch: any) => {
		dispatch(slice.actions.addFavoriteCharacter(character));
	};
}

export function deleteFavoriteCharacter(id: number) {
	return async (dispatch: any) => {
		dispatch(slice.actions.deleteFavoriteCharacter(id));
	};
}
