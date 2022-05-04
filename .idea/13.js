let dateInput = document.querySelector('.header_input-date');
let tem = 1;
let dateInputCalendar = document.querySelector('.header_input-date--calendar')
dateInput.onclick = function () {
    if (tem === 1) {
        dateInputCalendar.style.display = 'flex'
        tem = 2
    } else if (tem === 2) {
        dateInputCalendar.style.display = 'none'
        tem = 1
    }
}
dateInputCalendar.onclick = function () {
    dateInputCalendar.style.display = 'flex'
}
let calendarDayBtns = document.querySelectorAll('.calendar_day-btn')
for (let calendarDayBtn of calendarDayBtns) {
    if (calendarDayBtn.innerHTML === '') {
        calendarDayBtn.style.background = '#fff'
    }
}
// let arrayQuantityChange =new Array();
// let x=0
//     arrayQuantityChange[x]=new Array();
//     arrayQuantityChange[x].push('-',0,'+');
//     x++;
//     let quantityChanges = document.getElementsByClassName('quantity--form-item-change')
// function displayQuantityChange () {
//     let result = ''
//     for (let i = 0; i < 3; i++) {
//         result += `<button class="change_increase-btn">${arrayQuantityChange[i][0]}</button>`
//             + `<p class="value_change" >${arrayQuantityChange[i][1]}</p>`
//             + `<button class="change_reduction-btn" >${arrayQuantityChange[i][2]}</button>`
//         for(let quantityChange of quantityChanges){
//             console.log(quantityChange)
//             quantityChange.innerHTML= result;
//         }
//     }
// }
// displayQuantityChange();
// // phần thân
// //img quang cáo
let modalSingIn = document.getElementById('modal-signIn');
let headerItemSignIn = document.getElementById('header_feature-item-signIn')
headerItemSignIn.onclick= function (){
    modalSingIn.style.display='flex'
}
let signInBtn = document.querySelector('.byClassical-submit-btn');
signInBtn.onclick= function (){
    modalSingIn.style.display='none'
}
let i=0;
function loadImg1 (){
    let arrayAdverFrirst= ['https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-sieu-xe-lamborghini-dep_094240591.jpg',
        'https://sieunhandaichien.mobi/sieu-xe-tieng-anh-la-gi/imager_893.jpg',
        'https://tapchisieuxe.com/wp-content/uploads/2020/10/van-hoa-do-sieu-xe-o-nhat-ban-doc-dao-va-dien-ro-so-mot-the-gioi-0-1.jpg']
    document.querySelector('.first-adver__content-img').src=arrayAdverFrirst[i];
    i++;
    if(i===arrayAdverFrirst.length){
        i=0
    }
    setTimeout('loadImg1()',1000)
}
loadImg1();
let j=0;
function loadImg2(){
    let arrayAdverFrirst=[' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL3t-Jk_qciBzYp97RNCeQfeZHXWCWtzsjQ&usqp=CAU',
        'https://msmobile.com.vn/upload_images/images/hinh-nen-sieu-xe-cho-may-tinh-3.jpg',
        'https://media.vov.vn/sites/default/files/styles/large/public/2021-07/most-expensive-cars_1.jpg'
    ]
    document.querySelector('.second-adver__content-img').src= arrayAdverFrirst[j]
    j++
    if(j===arrayAdverFrirst.length){
        j=0
    }
    setTimeout('loadImg2()',1000)
}
loadImg2();
let k=0
function loadImg3(){
    let arrayAdverFrirst=['https://cdn.tgdd.vn//GameApp/1343936//1-800x450.jpg',
        'https://xehay.vn/uploads/images/2020/4/3/xehay-Koenigsegg-240420-3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPfDk9jhL_kVBKhoxZRs-QpOEXne_HSLEXA&usqp=CAU'
    ]
    document.querySelector('.third-adver__content-img').src= arrayAdverFrirst[k]
    k++
    if(k===arrayAdverFrirst.length){
        k=0
    }
    setTimeout('loadImg3()',1000)
}
loadImg3();
// SAN PHAM
class ProductItem {
    id
    img
    nameTicket
    priceTicket
    dateShow
    priceTicketPromo

    constructor(id,img, nameTicket, dateShow, priceTicket, priceTicketPromo) {
        this.id=id
        this.img = img;
        this.nameTicket = nameTicket;
        this.dateShow = dateShow;
        this.priceTicket = priceTicket;
        this.priceTicketPromo = priceTicketPromo;
    }
}

let productItem = [
    new ProductItem(1,'https://toplist.vn/images/800px/lee-min-ho-566328.jpg',
        'Ác nữ báo thù', '30/4/2020', '138.000', '112.000'
    ),
    new ProductItem(2,'https://vmvc.com.vn/nhung-hinh-anh-hot-boy-viet-nam/imager_39860.jpg',
        'Tử thần vùng Texas 2022', '1/5/2020', '89.000', '76.000'
    ),
    new ProductItem(3,'https://vnn-imgs-f.vgcloud.vn/2018/06/23/11/trai-dep-han-quoc-32-tuoi-cao-1-88-m-noi-bat-khi-di-xem-world-cup-2.jpg',
        'Ngọn lửa trái tim', '27/4/2020', '112.000', '99.000'
    ),
    new ProductItem(4,'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        'Cuộc phục kích', '21/6/2020', '125.000', '106.000'
    ),
    new ProductItem(5,'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
        'Cổng địa ngục 2022', '16/5/2020', '98.000', '80.000'
    ),
    new ProductItem(6,'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
        'Trận chiến hồ trường tân ', '9/5/2020', '147.000', '132.000'
    ),
    new ProductItem(7,'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
        'Lãnh chúa nổi dậy', '9/5/2020', '92.000', '83.000'
    ),
    new ProductItem(8,'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
        'Người giải phóng(phần 1)', '2/5/2020', '136.000', '113.000'
    ),
]
console.log(productItem.length)
function displayProduct() {
    let result = ''
    for (let i = 0; i < productItem.length; i++) {
        result += ` <div class="grid_colum_2-10">
                       <div class="product-item">
                           <div class="product-item--content">
                           <img width="100%" src="${productItem[i].img}"> 
                           <div class="ticket-item-content">
                               <h3 class="ticket-item--title">${productItem[i].nameTicket}</h3>
                                <span>Ngày khởi chiếu:</span>
                                <p class="ticket-item--dateShow">${productItem[i].dateShow}</p>
<div class="ticket-item-price">
                                    <span>Price : </span>
                                   <p class="ticket-item--price-translate">${productItem[i].priceTicket}</p>
                                    -
                                   <p class="ticket-item--pricePromo">${productItem[i].priceTicketPromo}</p>
                                </div>
                                <div class="ticket-item-content_footer">
                                     <button onclick="buyTicket(${i})" class="ticket-item-content--btn">Mua ngay</button>
                                      <a href="" class="ticket-item-content--link">Xem thêm</a>
                                 </div>
                            </div>
                           </div>
                       </div>
                    </div>`
    }
    document.getElementById("display").innerHTML = result;

}
displayProduct();
let newArray = [];
function buyTicket(index){
    let result=''
    result += ` <div style="width: 24.6555%" class="grid_colum_2-10">
                       <div class="product-item">
                           <div class="product-item--content">
                           <img width="100%" src="${productItem[index].img}">
                           <div class="ticket-item-content">
                               <h3 class="ticket-item--title">${productItem[index].nameTicket}</h3>
                                <span>Ngày khởi chiếu:</span>
                                <p class="ticket-item--dateShow">${productItem[index].dateShow}</p>
                                <div class="ticket-item-price">
                                    <span>Price : </span>
                                   <p class="ticket-item--price-translate">${productItem[index].priceTicket}</p>
                                    -
                                   <p class="ticket-item--pricePromo">${productItem[index].priceTicketPromo}</p>
                                </div>
                                <div class="ticket-item-content_footer">
                                      <a href="" class="ticket-item-content--link">Xem thêm</a>
                                 </div>
                            </div>
                           </div>
                       </div>
                    </div>`
    newArray.push(result)
}
let historyBuyTicket= document.getElementById('history-buyTicket');
historyBuyTicket.onclick=function () {
    document.getElementById("display").innerHTML = newArray
}