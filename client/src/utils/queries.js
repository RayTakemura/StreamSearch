import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me{
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
