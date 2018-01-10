
interface IGenre {
	id: number;
	name: string;
}

interface IProductionCompany {
	id: number;
	name: string;
}

interface IProductionContries {
	iso_3166_1: string;
	name: string;
}

interface ISpokenLanguages {
	iso_3166_1: string;
	name: string;
}

export interface IMovie {
	id: number;
	title: string;
	overview?: string;
	poster_path?: string;
	backdrop_path?: string;
	release_date?: string;
	adult?: boolean;
	budget?: number;
	genres?: Array<IGenre>;
	homepage?: string;
	imdb_id?: string;
	original_language?: string;
	original_title?: string;
	popularity?: number;
	production_companies?: Array<IProductionCompany>;
	production_countries?: Array<IProductionContries>;
	revenue?: number;
	runtime?: number;
	spoken_languages?: Array<ISpokenLanguages>;
	status?: string;
	tagline?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}
