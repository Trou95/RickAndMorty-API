export interface IPaginateMeta {
	pages: number;
	count: number;
	next: string | null;
	previous: string | null;
}

export interface IPaginate<T> {
	results?: T[];
	info: IPaginateMeta
}
