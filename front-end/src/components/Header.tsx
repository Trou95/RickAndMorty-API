import {Link} from "react-router-dom";
import {IMenu, menus} from "../config/menu";

export default function Header() {
	return (
		<nav
			aria-label="Main"
			data-orientation="horizontal"
			dir="ltr"
			className="relative z-10 flex max-w-max mx-auto mt-10 flex-1 items-center justify-center"
		>
			<div className="relative">
				<ul
					data-orientation="horizontal"
					className="group flex flex-1 list-none items-center justify-center space-x-1"
					dir="ltr"
				>
					{menus.map((menu: IMenu, key: number) => (
						<li key={key}>
							<Link to={menu.path}
								  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
								{menu.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="absolute left-0 top-full flex justify-center"></div>
		</nav>
	)
}
