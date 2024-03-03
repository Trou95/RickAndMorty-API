
export interface IMenu {
	name: string;
	path: string;
}

export const menus: IMenu[] = [
	{
		name: "Episode",
		path: "/",
	},
	{
		name: "Character",
		path: "/characters",
	},
	{
		name: "Favorite",
		path: "/favorite",
	}
]
