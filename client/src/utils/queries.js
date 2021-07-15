import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
    user{
        _id
        username
        email
    }
    streams{
        _id
        name
        image
    }
}
`
;
