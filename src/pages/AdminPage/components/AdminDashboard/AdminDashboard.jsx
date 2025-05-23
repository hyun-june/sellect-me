import "./AdminDashboard.css";

const AdminDashboard = () => {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10).replaceAll("-", "/");

  const dashboardData = [
    {
      title: "TODAY",
      items: [
        { label: "방문자", value: 0, unit: "명" },
        { label: "셀럽 신규 가입자", value: 0, unit: "명" },
        { label: "셀렉터 신규 가입자", value: 0, unit: "명" },
        { label: "회원 탈퇴", value: 0, unit: "명" },
      ],
    },
    {
      title: "TOTAL",
      items: [
        { label: "방문자", value: 0, unit: "명" },
        { label: "셀럽 신규 가입자", value: 0, unit: "명" },
        { label: "셀렉터 신규 가입자", value: 0, unit: "명" },
        { label: "회원 탈퇴", value: 0, unit: "명" },
      ],
    },
    {
      title: "자금관리",
      items: [
        { label: "입금 대기", value: 0, unit: "건" },
        { label: "취소 / 환불 요청", value: 0, unit: "건" },
        { label: "취소 / 환불 처리 완료", value: 0, unit: "건" },
      ],
    },
    {
      title: "고객센터",
      items: [
        { label: "문의", value: 0, unit: "건" },
        { label: "신고", value: 0, unit: "건" },
      ],
    },
  ];

  const DashboardCard = ({ title, items }) => {
    return (
      <div className="dashboard_card">
        <h4>{title}</h4>
        <ul>
          {items.map(({ label, value, unit }, index) => (
            <li key={index}>
              <span className="dashboard_card_label">{label}</span>
              <span className="dashboard_card_value">{`${value}${unit}`}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleTodo = () => {
    console.log("투두 버튼");
  };

  return (
    <div className="admin_dashboard_container">
      <h3>이번 주 투두리스트</h3>
      <button onClick={handleTodo}>
        {formattedDate} 에스크로 공지 등록하기
      </button>
      <div className="dashboard_grid">
        {dashboardData.map((section, index) => (
          <DashboardCard
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
