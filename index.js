// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "2월의 시작, 모두가 쫄리기 시작하는 순간!" },
  { "number": 2, "message": "투투데이와 유사하지만 아니니까 쉬면 안돼요" },
  { "number": 3, "message": "2월달은 다른 달보다 짧다는 걸 기억하세요" },
  { "number": 4, "message": "8." },
  { "number": 5, "message": "2렇게 살면 5떡해" },
  { "number": 6, "message": "울고 싶으면 울면서 하세요!" },
  { "number": 7, "message": "벌써 2월이 된지 일주일되는 날이에요, 섬뜩하죠?" },
  { "number": 8, "message": "2주차의 시작! 1주차보다 스스로를 더 굴리세요" },
  { "number": 9, "message": "독설같지만 사실 응원이에요." },
  { "number": 10, "message": "잘 때만 누워요." },
  { "number": 11, "message": "경각심을 잃지 마세요." },
  { "number": 12, "message": "1인분은 하는 사람이 되보아요." },
  { "number": 13, "message": "지금 뭐하고 계세요?" },
  { "number": 14, "message": "초콜릿 사드세요." },
  { "number": 15, "message": "2월의 절반 이상이 지났다는 걸 아나요?" },
  { "number": 16, "message": "절반이 지났다니까요." },
  { "number": 17, "message": "이 날은 좀 놀아도 되지 않을까? 안돼요." },
  { "number": 18, "message": "힘이 없겠지만 그냥 해요." },
  { "number": 19, "message": "아직 앞자리가 1이라고 안주하고 있나요?" },
  { "number": 20, "message": "짜잔! 앞자리가 2랍니다." },
  { "number": 21, "message": "모두에게 다가오는 개강, 가오가 함께하기를!" },
  { "number": 22, "message": "안 죽어요." },
  { "number": 23, "message": "No sibal keep going." },
  { "number": 24, "message": "숨통이 조여오나요? 그래도 할 건 해야죠." },
  { "number": 25, "message": "페이스를 잃지 마세요." },
  { "number": 26, "message": "모른 척 하지마세요." },
  { "number": 27, "message": "후반이라고 흐트러지지 말고 할 일하세요" },
  { "number": 28, "message": "2월달의 끝이에요. 사실 구라에요" },
  { "number": 29, "message": "29일, 그나마 방학이 하루 더 있는 해에요." },
  { "number": 30, "message": "3월, 멋진 방학이었어요. 수고 많았어요!" }
];

