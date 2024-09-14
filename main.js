let sideBar = document.querySelector(".sidebar");
let iconBars = document.querySelector(".fa-bars");

iconBars.addEventListener("click", function() {
    sideBar.classList.toggle("show");
});

   


document.querySelectorAll('.main-item').forEach(mainItem => {
    mainItem.addEventListener('click', (event) => {
        // منع التفاعل مع العناصر الداخلية
        event.preventDefault();
        // الحصول على العناصر .sub-items بداخل العنصر المحدد
        const subItems = mainItem.querySelector('.sub-items');
        // تبديل عرض .sub-items
        if (subItems) {
            subItems.style.display = subItems.style.display === 'none' ? 'flex' : 'none';
        }
    });
});

// إضافة مستمع حدث لعناصر .sub-item لمنع تأثير النقر على .sub-items
document.querySelectorAll('.sub-item').forEach(subItem => {
    subItem.addEventListener('click', (event) => {
        // منع تمرير الحدث إلى .sub-items
        event.stopPropagation();
    });
});


const chart = document.getElementById("line-chart").getContext('2d')
const myChart = new Chart(chart , {
    type: 'line',
    data: {
        labels: ['w1' , 'w3' , 'w5' , 'w7' , 'w9'  , 'w11' ],
        datasets: [{
            label: 'Online Revenue',
            data: [0, 900, 800 , 0 , 500 , 900],
            fill: false,
            backgroundColor: '#810bf436', 
            borderColor: '#810bf4',
            borderCapStyle: 'round',
            tension: 0.5,
            pointRadius: 0,
        },{
            label: 'Offline Revenue',
            data: [500, 1200, 400 , 0 , 700 ,400],
            fill: false,
            backgroundColor: '#06f2fc1f', 
            borderColor: '#06f2fc', 
            borderCapStyle: 'round',
            tension: 0.5,
            pointRadius: 0,
        }],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                grid:{
                    display: false,
                },
                display: false,
                beginAtZero: true,
                max: 1200,
                ticks: {
                    color: 'white',
                }
            },
            x: {
                grid:{
                    display: false,
                },
                display: false, 
                ticks: {
                    color: 'white'
                }
            }
        },
        plugins: {
            legend: {
                display: false, 
                position: "top",
                align: "end",
                labels: {
                    padding: 10,
                    boxWidth: 15
                }
            }
        }
    } 
})