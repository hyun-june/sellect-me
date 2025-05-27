import "./AdminUserUi.css";

const AdminUserUi = ({ data, ...props }) => {
  return (
    <ul className="admin_user">
      {data.map((item, index) => (
        <li key={index}>
          {item.icon && <div className="admin_icon_wrapper">{item.icon}</div>}
          <div className="admin_user_data">
            {item.label && (
              <span className="admin_user_label">{item.label}</span>
            )}
            {item.value != null && (
              <span className="admin_user_value">
                {`${item.value}${item.unit || ""}`}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AdminUserUi;
