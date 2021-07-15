import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
    user{
        _id
        username
        email
        streamCount
        savedStreams{
            #_id
            streamId
            title
            image
            link
        }
    }
}
`
;
