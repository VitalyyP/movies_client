import { gql } from "@apollo/client";

export const moviesQuery = gql`
  query Movies($page: Int) {
    movies(page: $page) {
      page
      totalResults
      totalPages
      results {
        id
        title
        image: posterPath
        releaseDate(format: "MMMM yyyy")
      }
    }
  }
`;
