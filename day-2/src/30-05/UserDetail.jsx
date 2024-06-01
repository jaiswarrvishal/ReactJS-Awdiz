import { useParams } from 'react-router-dom';

function UserDetail(){
    const { username } = useParams();
    // const { username, id } = useParams();
    // console.log(username, id, "username, id")
    return(
        <div>
            <h1>UserDetail - {username}</h1>
        </div>
    )
}
export default UserDetail;