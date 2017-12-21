
import * as React from 'react';
import { connect } from "react-redux";

// assets
import './movies.css';

import { getTopRatedMovies } from "../../actions/movies/movies"


// movie interface
export interface IMovie {
	id: number;
	title: string;
	overview?: string;
}

@connect((store) => {
	return {
		moviesList: store.movies.movies.results,
	};
})

// class
class Movies extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		try {
			this.props.dispatch(getTopRatedMovies());
		} catch (e) {
			console.error('error-->', e);
		}
	}

	render() {
		const { moviesList } = this.props;
		console.log('moviesList-->', moviesList);// roberto
		return (
			<div>
				<p>
					{
						moviesList &&
						moviesList.length
					}
				</p>
				<div>
					{
						moviesList &&
						moviesList.map((movie: IMovie)=> {
							return(
								<h1>
									{movie.title}
								</h1>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default Movies;
