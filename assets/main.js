
    function cekJodoh(event) {
        event.preventDefault();
            let nama = $('#search').val();
            let namaJodoh = $('#search2').val();
            if (nama == '' && namaJodoh == '') {
                alert('Isi Dulu Namanya Woi !!')
            } else {
                let status = [
                    'kosong'
                ]
                const randomStatus = Math.floor(Math.random() * status.length);
                if (randomStatus == 0) {
                    let kecocokan = [
                        'Cinta Sejati',
                        'CInta Pertama',
                        'Cinta Terakhir',
                        'Kurang Cocok',
                        'Sangat Cocok',
                        'Fiksss Jodoh',
                        'Mungkin Menikah',
                        'Menikah',
                        'Gak Cocok',
                        'Lumayan Cocok',
                        'Sering Berantem'
                    ];
                    const random = Math.floor(Math.random() * kecocokan.length);
                    container.style.display = "block";
                    $('#result').html(`${nama}  💖  ${namaJodoh} :  ${kecocokan[random]}`)
                   
                
                } else {
               
                }

            }
    }

    let shareButton = document.querySelector('#shareBtn');
    let judul = document.querySelector('#judul');
    let p1 = document.querySelector('.p1');
    let shareText = document.querySelector('#shareText');
    let refreshButton = document.querySelector('.refreshButton');
    let form = document.querySelector('.search');
    let container = document.querySelector('.loading');
    let output = document.querySelector('.output')
    let fill = document.querySelector('.fill')
    let click = document.querySelector('#btn-search')

    click.addEventListener('click', () => {
        var a = 0;
        var run = setInterval(frames,50);
        function frames () {
            a =a+1;
            if ( a == 101) {
                clearInterval(run);
                container.style.display = "none";
                output.style.display = " block";
                refreshButton.style.display = 'block';
                shareText.style.display = 'block';
                p1.style.display = 'none';
                shareButton.style.display = 'block';
            } else if ( a == 1) {
                form.style.display = 'none';
                judul.style.display = 'none';
                output.style.display = "none";
                shareButton.style.display = 'none';
                shareText.style.display = 'none';
            } 
            
            else {
                var counter = document.querySelector('.counter');
                counter.textContent = a + "%";
                fill.style.width = a + "%";
            }
        }
    })

   let hasilJodoh = $(document).ready( function (){
    $('#btn-search').click(cekJodoh);
    
    }); 

   
// made by @hendragunadiee ( on instagram )
