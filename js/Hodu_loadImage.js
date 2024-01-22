const imageList = document.querySelector(".list-image");
let pageToFetch = 1;
const scrollButton = document.querySelector('.btn_scroll');

async function fetchImages(pageNum){

    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit =6');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const data = await response.json();
        console.log(data);

        makeImageList(data);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(data){
    data.forEach((item) => {
        imageList.innerHTML += "<li><img src=" + item.download_url +" alt=''/></li>";
    })
}

window.addEventListener('scroll', ()=>{
    // 스크롤이 상단으로부터 얼마나 이동했나? (뷰포트의 높이 + 스크롤된 길이)
    // 화면에 로딩된 전체 페이지의 높이는?
    // 뷰포트의 높이 + 스크롤된 길이 + 대략 10px === 화면에 로딩된 전체 페이지의 높이

    if(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight){
        fetchImages(pageToFetch += 1);
    }


})

const infinityScroll = () => {
    console.log('scroll!');
}

const throttling = (callback, delay) => {
    let timer = null;
    return () => {
        console.log(timer);

        if (timer === null) {
            timer = setTimeout(() => {
                callback();
                timer = null;
            }, delay);
        }
    };
};

window.addEventListener('scroll', throttling(infinityScroll, 3000));

function openResult(){
    imageList.style.display = 'flex';
}

scrollButton.addEventListener('click', openResult)
scrollButton.addEventListener('click', fetchImages)

