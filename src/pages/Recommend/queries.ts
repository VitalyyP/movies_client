import { gql } from "@apollo/client";

export const moviesByIdsQuery = gql`
  query MoviesByIds($isd: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      image: posterPath
      releaseDate(format: "MMMM yyyy")
    }
  }
`;
// export const moviesByIdsQuery = gql`
//   query MoviesByIds($isd: [Int]) {
//     moviesByIds(isd: $isd) {
//       page
//       totalResults
//       totalPages
//       results {
//         id
//         title
//         image: posterPath
//         releaseDate(format: "MMMM yyyy")
//       }
//     }
//   }
// `;
