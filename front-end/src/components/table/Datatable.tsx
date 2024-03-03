'use client';

import React, {ChangeEvent, ReactNode} from 'react';
import Pagination from './Pagination';
import {IPaginateMeta} from './IPaginate';
import {Link} from "react-router-dom";

interface DataRow {
	[key: string]: any;
}

interface IDatatableProps {
	pagePaginate: number;
	// eslint-disable-next-line no-unused-vars
	setPagePaginate: (page: number) => void;
	meta: IPaginateMeta;
	isLoading: boolean;
	link?: {
		name: string;
		href: string;
	};
	// eslint-disable-next-line no-unused-vars
	setSearch: (search: string) => void;
	children: ReactNode;
}

export default function Datatable({
									  children,
									  pagePaginate,
									  setPagePaginate,
									  meta,
									  link,
									  setSearch,
								  }: IDatatableProps) {
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 2) {
			setSearch(e.target.value);
		} else {
			setSearch('');
		}
	};

	// @ts-ignore
	// @ts-ignore
	// @ts-ignore
	return (
		<>
			<div className="bg-white overflow-hidden">
				<div
					className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
					<div className="w-full md:w-1/2">
						<div className="flex items-center">
							<div className="w-full">
								<input
									type="search"
									placeholder="Search..."
									onChange={handleSearch}
									className="w-full transition placeholder:transition hover:border-zinc-900 hover:placeholder:text-zinc-900 focus:ring-transparent focus:border-zinc-900 text-zinc-900 focus:placeholder:text-zinc-900 rounded-lg p-2.5"
								/>
							</div>
						</div>
					</div>
					<div
						className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
						{link && (
							<Link to={link.href}>
								<div
									className="text-center text-zinc-900 border border-brand hover:bg-brand hover:text-white transition-all rounded-lg py-2 px-4">
									{link.name}
								</div>
							</Link>
						)}
					</div>
				</div>


				{children}


				<Pagination
					meta={meta}
					pagePaginate={pagePaginate}
					setPagePaginate={setPagePaginate}
				/>
			</div>
		</>
	);
}
