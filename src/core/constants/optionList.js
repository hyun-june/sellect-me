export const languageList = [
  "Korean",
  "English",
  "Japanese",
  "Chinese",
  "Spanish",
  "French",
  "German",
  "Russian",
  "Portuguese",
  "Hindi",
  "Arabic",
  "Italian",
  "Vietnamese",
  "Thai",
  "Indonesian",
];

export const genderList = ["남성", "여성", "기타"];

export const entityList = ["개인", "법인 사업자"];

export const bankList = [
  "국민은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "농협은행",
  "기업은행",
  "SC제일은행",
  "씨티은행",
  "케이뱅크",
  "카카오뱅크",
  "토스뱅크",
  "수협은행",
  "대구은행",
  "부산은행",
  "광주은행",
  "전북은행",
  "제주은행",
];

export const colorList = [
  "Black",
  "Dark Brown",
  "Brown",
  "Light Brown",
  "Blonde",
  "Red",
  "Gray",
  "White",
  "Blue",
  "Green",
  "Hazel",
];

export const countryList = require("country-list");
export const countryNames = countryList.getNames();

export const regions = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원특별자치도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

export const modelCategoryList = [
  { value: "fitting", label: "피팅모델" },
  { value: "media", label: "미디어모델" },
  { value: "part", label: "부분모델" },
  { value: "narrator", label: "나레이터모델" },
  { value: "other", label: "기타" },
];

export const modelDetailCategory = {
  fitting: [
    "피팅/의류모델",
    "웨딩/한복모델",
    "유아/아동모델",
    "수영복/속옷모델",
    "얼굴비노출피팅모델",
    "셀카피팅모델",
  ],
  media: [
    "화보모델",
    "잡지/지면모델",
    "방송/영상모델",
    "CF/뮤비모델",
    "패션쇼/워킹모델",
    "인플루언서모델",
  ],
  part: [
    "헤어모델",
    "얼굴/피부모델",
    "손/팔모델",
    "발/다리모델",
    "바디/근육모델",
    "세미누드모델",
  ],
  narrator: [
    "행사/판촉도우미",
    "의전/전시도우미",
    "통역/번역도우미",
    "레이싱/라운드모델",
    "댄서/치어/공연팀",
    "MC/사회.진행팀",
  ],

  other: [
    "단역/보조출연",
    "주연/조연배우",
    "뮤지컬/가수",
    "밴드/음악인",
    "방송댄서/무용",
    "방송MC/쇼호스트",
    "개그",
    "유튜버",
    "틱톡",
    "동물모델",
  ],
};
