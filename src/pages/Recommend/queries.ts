import { gql } from "@apollo/client";

export const moviesByIdsQuery = gql`
  query MoviesByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      image: posterPath
      releaseDate(format: "MMMM yyyy")
    }
  }
`;
