/* swiper */
var swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

/* 탭 */
document.addEventListener('DOMContentLoaded', function() {
    // 초기 설정: advertising_product 탭 콘텐츠만 보이게 설정
    showTab('advertising_product');

    // 탭 클릭 이벤트 설정
    document.querySelectorAll('.tab-link').forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // 링크 클릭 시 페이지 이동 방지
            const targetClass = this.getAttribute('data-target');
            showTab(targetClass);
        });
    });
});

function showTab(className) {
    // 모든 탭 콘텐츠를 숨김
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // 선택한 탭 콘텐츠만 표시
    document.querySelector('.' + className).style.display = 'block';
}