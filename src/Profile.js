const Profile = (props) => {
    return (
        <div>
            { props.profileInfos.isActive ? (

                <ul>
                    <li>firstName : {props.profileInfos.firstName}</li>
                    <li>lastName :  {props.profileInfos.lastName}</li>
                    <li>age : {props.profileInfos.age}</li>
                    <li>job : {props.profileInfos.job}</li>
                </ul>
        
            ) : (
                <p>L'utilisateur ne peut pas être affiché !</p>
            )}

        </div>
    
    )
}

export default Profile;