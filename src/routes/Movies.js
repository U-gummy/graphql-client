import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
  {
    allMovies {
      id
      title
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    return <h2>Could not fetch</h2>;
  }
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {data.allMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h1>Tweets</h1>
      <ul>
        {data.allTweets.map((tweet) => (
          <li key={tweet.id}>
            {tweet.text}/by: {tweet.author.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
