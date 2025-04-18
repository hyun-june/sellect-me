import CustomBox from "../../components/CustomBox/CustomBox";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import "./VchatTicketPage.css";
import Button from "./../../components/Button/Button";
import { useState } from "react";

const ticketList = [
  {
    content: "10회권 + 1회권 무료",
    baseCount: 10,
    bonusCount: 1,
    price: 9900,
  },
  {
    content: "50회권 + 7회권 무료",
    baseCount: 50,
    bonusCount: 7,
    price: 49900,
  },
  {
    content: "100회권 + 15회권 무료",
    baseCount: 100,
    bonusCount: 15,
    price: 99900,
  },
];

const InfoMyTicket = {
  count: 22,
};

const VchatTicketPage = (props) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [myTicket, setMyTicket] = useState(InfoMyTicket.count);

  const handleTicket = (ticket) => {
    setSelectedTicket(ticket);
    console.log("선택", ticket);
  };

  const handlePayment = () => {
    setMyTicket(
      (prev) => prev + selectedTicket.baseCount + selectedTicket.bonusCount
    );
    console.log("구매", selectedTicket);
  };

  console.log("총 티켓", myTicket);
  return (
    <MainLayout {...props}>
      <div className="ticket_container">
        <h5>V-CHAT 이용권 구매</h5>
        <div>1회당 5분의 V-CHAT 시간을 제공합니다.</div>
        <div className="ticket_inner">
          <div className="ticket_list">
            {ticketList.map((ticket, index) => (
              <CustomBox
                className={`ticket_item ${
                  selectedTicket?.baseCount === ticket.baseCount &&
                  "ticket_select"
                }`}
                key={index}
                onClick={() => handleTicket(ticket)}
              >
                <span className="ticket_font">{ticket.content}</span>
                <span>{ticket.price.toLocaleString()}</span>
              </CustomBox>
            ))}
          </div>

          <div className="ticket_cart">
            <CustomBox className="ticket_item">
              <span>보유 중인 이용권</span>
              <span>
                <span>{myTicket}회권</span>({myTicket * 5}분)
              </span>
            </CustomBox>
            <CustomBox className="buy_ticket">
              <p>구매할 이용권 수</p>
              <p className="ticket_font">
                {selectedTicket ? (
                  <>
                    <strong>{selectedTicket.baseCount}회권</strong>
                    {" + "}
                    {selectedTicket.bonusCount}회권 (
                    {(selectedTicket.baseCount + selectedTicket.bonusCount) * 5}
                    분)
                  </>
                ) : (
                  "이용권을 선택해주세요."
                )}
              </p>
              <Button disabled={!selectedTicket} onClick={handlePayment}>
                결제하기
              </Button>
            </CustomBox>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VchatTicketPage;
