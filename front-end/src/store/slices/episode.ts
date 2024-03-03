import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPaginateMeta, IPaginate} from "../../components/table/IPaginate";
import axios from "axios";

export interface IEpisodeResponse {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: string;
}

export interface IEpisode {
	isLoading: boolean;
	episodes: IEpisodeResponse[];
	episode: IEpisodeResponse | null;
	meta: IPaginateMeta | null;
}

const initialState: IEpisode = {
	isLoading: false,
	episodes: [],
	episode: null,
	meta: null,
};

const slice = createSlice({
	name: 'episode',
	initialState,
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},
		endLoading: state => {
			state.isLoading = false;
		},
		getEpisodes: (state, action: PayloadAction<IPaginate<IEpisodeResponse>>) => {
			state.isLoading = false;
			state.episodes = action.payload.results || [];
			state.meta = action.payload.info;
		},
		getEpisode: (state, action: PayloadAction<IEpisodeResponse>) => {
			state.isLoading = false;
			state.episode = action.payload || null;
		},
	},
});

export default slice.reducer;

export function getEpisodes(page: number = 1, query: string = '') {
	return async (dispatch: any) => {
		await dispatch(slice.actions.startLoading());
		try {
			const res = await axios('https://rickandmortyapi.com/api/episode?page=' + page + '&name=' + query);
			dispatch(slice.actions.getEpisodes(res.data));
		} catch (error) {
			dispatch(slice.actions.endLoading());
		}
	};
}

export function getEpisode(id: string) {
	return async (dispatch: any) => {
		await dispatch(slice.actions.startLoading());
		try {
			const res = await axios('https://rickandmortyapi.com/api/episode/' + id);
			dispatch(slice.actions.getEpisode(res.data));
		} catch (error) {
			dispatch(slice.actions.endLoading());
		}
	};
}
