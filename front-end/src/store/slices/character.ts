import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPaginateMeta, IPaginate} from "../../components/table/IPaginate";
import axios from "axios";

export interface ICharacterResponse {
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

export interface ICharacter {
	isLoading: boolean;
	characters: ICharacterResponse[];
	character: ICharacterResponse | null;
	meta: IPaginateMeta | null;
}

const initialState: ICharacter = {
	isLoading: false,
	characters: [],
	character: null,
	meta: null,
};

const slice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},
		endLoading: state => {
			state.isLoading = false;
		},
		getCharacters: (state, action: PayloadAction<IPaginate<ICharacterResponse>>) => {
			state.isLoading = false;
			state.characters = action.payload.results || [];
			state.meta = action.payload.info;
		},
		getCharacter: (state, action: PayloadAction<ICharacterResponse>) => {
			state.isLoading = false;
			state.character = action.payload || null;
		},
	},
});

export default slice.reducer;

export function getCharacters(page: number = 1, query: string = '') {
	return async (dispatch: any) => {
		await dispatch(slice.actions.startLoading());
		try {
			const res = await axios('https://rickandmortyapi.com/api/character?page=' + page + '&name=' + query);
			dispatch(slice.actions.getCharacters(res.data));
		} catch (error) {
			dispatch(slice.actions.endLoading());
		}
	};
}

export function getCharacter(id: string) {
	return async (dispatch: any) => {
		await dispatch(slice.actions.startLoading());
		try {
			const res = await axios('https://rickandmortyapi.com/api/character/' + id);
			dispatch(slice.actions.getCharacter(res.data));
		} catch (error) {
			dispatch(slice.actions.endLoading());
		}
	};
}
