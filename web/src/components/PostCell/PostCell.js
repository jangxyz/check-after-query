export const QUERY = gql`
  query PostQuery {
    post {
      id
    }
  }
`

export const afterQuery = (data) => ({ ...data })

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return JSON.stringify(post)
}
