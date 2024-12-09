import './ProfileInfoList.css'

const ProfileInfoList = ({ list, ...props }) => {
    return (
        <div className="profile_inner_List">
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>
                        <span>{item.content}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileInfoList
