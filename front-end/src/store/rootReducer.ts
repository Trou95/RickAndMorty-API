import { combineReducers, Reducer } from 'redux';
import episode from "./slices/episode";
import character from "./slices/character";
import favorite from "./slices/favorite";

interface RootState {
	episode: ReturnType<typeof episode>;
	character: ReturnType<typeof character>;
	favorite: ReturnType<typeof favorite>;
}

const rootReducer: Reducer<RootState> = combineReducers({
	episode,
	character,
	favorite
});

export { rootReducer };
