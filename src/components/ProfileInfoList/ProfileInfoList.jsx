import './ProfileInfoList.css'

const ProfileInfoList = ({ list, ...props }) => {
    return (
        <div className="profile_inner_List">
            <dl>
                {list.map((item, index) => (
                    <div key={index}>
                        <dt>{item.title}</dt>
                        <dd>{item.content}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default ProfileInfoList
