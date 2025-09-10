import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./SlideBanner.css";

const bannerData = {
  update: [
    "https://cdn.pixabay.com/photo/2021/03/26/15/21/beautiful-6126170_1280.jpg",
    "https://media.istockphoto.com/id/2059137136/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%97%90%EC%84%9C-%EA%B2%80%EC%9D%80-%EC%96%91%EB%B3%B5%EC%9D%84-%EC%9E%85%EC%9D%80-%EA%B8%88%EB%B0%9C-%EC%97%AC%EC%9E%90-%ED%8C%A8%EC%85%98-%EB%AA%A8%EB%8D%B8.jpg?s=2048x2048&w=is&k=20&c=NsTqYOw9emraS_r68wB5x6ZSiFa5f8BPDk9DBqB1eec=",
    "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
  ],
  male: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXG29odtYsTDOAsb2i1tblNR3hTgPEot5gA&s",
    "https://img.vogue.co.kr/vogue/2020/07/style_5f210ec413fd9.jpg",
    "https://lh3.googleusercontent.com/proxy/VcqXA0gdotPZLNT8HIcW1gv_5lwyWFtXO3mfezk7cZOremdT0cVM951IwulG4MyxTFiAMhKwE2Eh-FmtJmnuh7UkFzEVuppz__B6y394olTXsRG1o7czrDeYY3B0",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYMjc86NET4uxtq8XHk-j2BKvO9kgNyNMOQ&s",
    "https://modelnara.com/p/upload/per_img/eoqkr33/17-671-2516_Y_900x553_100_5.jpg",
    "https://img.wkorea.com/w/2022/09/style_63185f6ec5ab8.jpg",
    "https://i.pinimg.com/736x/7b/62/33/7b62332fd81cee283c0716ffd74dc8d9.jpg",
  ],
  female: [
    "https://file.newswire.co.kr/data/datafile2/thumb_640/2021/06/1040049794_20210630083158_5511153906.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Q9mmidpABAOukpIPcZzG0ELvOIXQ-7DmDw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBAJi4765B-heuOHlYedtSGDN9-KGonaoUQ&s",
    "https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDlfMjQg/MDAxNTU0ODA2ODIzNDkw.5X2HqrV12STlIYIM0Ii3E9aCvyiC41n58lob-lkEfR4g.DMVsl1lyPiBfp6KyyuYMlHVd-3c2S1aECS5M7y6-8e4g.PNG.cherall07/20180627_165711.png?type=w800",
    "https://i.namu.wiki/i/EZ6uGQaz1bKQQmgdf4rKGvgu7SZ1A_U4pf7qBjWx70gee6u7nUtX_EYMoM4Xftfu4VixlDMoApNt7BN0RuVyeA.webp",
    "https://modelnara.com/upload/pic/1626254701-7699.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtyyEsPCcZralGo7VTxVrN23Dah-veWGt_-auKs98OCWVMmkFGJmvqvgX0othQ-CcUSI&usqp=CAU",
  ],
};

const SlideBanner = ({ bannerKeyword, ...props }) => {
  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 5;
  const centerIndex = Math.floor(displayCount / 2);

  const itemWidth = 312;

  const displayData = bannerData[bannerKeyword];

  const prevBanner = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextBanner = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, displayData.length - displayCount)
    );
  };

  return (
    <div className="slideBanner">
      <div className="slide_wrapper">
        <button onClick={prevBanner} className="slide_btn prev">
          <GrPrevious />
        </button>
        <div
          className="slide_container"
          style={{
            transform: `translateX(-${startIndex * itemWidth}px)`,
          }}
        >
          {displayData?.map((item, index) => {
            const relativeIndex = index - startIndex;
            const isCenter = relativeIndex === centerIndex;
            const isBlur =
              relativeIndex === 0 || relativeIndex === displayCount - 1;
            const isSide =
              relativeIndex === 1 || relativeIndex === displayCount - 2;

            return (
              <div
                className={`slide_item ${
                  isCenter
                    ? "center"
                    : isSide
                    ? "side"
                    : isBlur
                    ? "blur"
                    : "hidden"
                }`}
                key={index}
              >
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
        <button onClick={nextBanner} className="slide_btn next">
          <GrNext />
        </button>
      </div>
    </div>
  );
};
export default SlideBanner;
