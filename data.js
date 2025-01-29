const toSectorV = [
    {
        from: 'sealdah',
        times:{
            0: '6:55',
            1:'7:15',
            2:'7:35',
            3:'7:55',
            4:'8:15',
            5:'8:35',
            6:'8:55',
            7:'9:10',
            8:'9:25',
            9:'9:40',
            10:'9:55',
            11:'10:10',
            12:'10:25',
            13:'10:40',
            14:'10:55',
            15:'11:15',
            16:'11:35',
            17:'11:55',
            18:'12:15',
            19:'12:35',
            20:'12:55',
            21:'13:15',
            22:'13:35',
            23:'13:55',
            24:'14:15',
            25:'14:35',
            26:'14:55',
            27:'15:15',
            28:'15:35',
            29:'15:55',
            30:'16:15',
            31:'16:35',
            32:'16:55',
            33:'17:07',
            34:'17:19',
            35:'17:31',
            36:'17:43',
            37:'17:55',
            38:'18:07',
            39:'18:19',
            40:'18:31',
            41:'18:43',
            42:'18:55',
            43:'19:07',
            44:'19:19',
            45:'19:31',
            46:'19:43',
            47:'19:55',
            48:'20:15',
            49:'20:35',
            50:'20:55',
            51:'21:15',
            52:'21:35'          
        }
    }
]

const toSealdah = [
    {
        from: 'saltlakesectorv',
        times:{
            0: '7:00',
            1:'7:20',
            2:'7:40',
            3:'8:00',
            4:'8:20',
            5:'8:40',
            6:'9:00',
            7:'9:15',
            8:'9:30',
            9:'9:45',
            10:'10:00',
            11:'10:15',
            12:'10:30',
            13:'10:45',
            14:'11:00',
            15:'11:20',
            16:'11:40',
            17:'12:00',
            18:'12:20',
            19:'12:40',
            20:'13:00',
            21:'13:20',
            22:'13:40',
            23:'14:00',
            24:'14:20',
            25:'14:40',
            26:'15:00',
            27:'15:20',
            28:'15:40',
            29:'16:00',
            30:'16:20',
            31:'16:40',
            32:'16:52',
            33:'17:04',
            34:'17:16',
            35:'17:28',
            36:'17:40',
            37:'17:52',
            38:'18:04',
            39:'18:16',
            40:'18:28',
            41:'18:40',
            42:'18:52',
            43:'19:04',
            44:'19:16',
            45:'19:28',
            46:'19:40',
            47:'20:00',
            48:'20:20',
            49:'20:40',
            50:'21:00',
            51:'21:20',
            52:'21:40'
    }
    }
]
const date = new Date();
const currentTime = date.getHours() + ':' + date.getMinutes();
// console.log( currentTime);

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const direction = document.getElementById('direction').value;
    const currentStation = document.getElementById('from-station').value;
    // console.log(direction, currentStation);
    
    if (direction === 'toSealdah') {
        findTforSealdah(currentStation);
        
    }else{
        findTforSectorV(currentStation);
    }
})

function findTforSealdah(currentStation) {
    for (let i = 0; i < toSealdah.length; i++) {
        if (toSealdah[i].from === currentStation) {
            console.log('Matching station found:', currentStation);

            const times = Object.values(toSealdah[i].times); // Extract times as an array
            
            for (let j = 0; j < times.length; j++) {
                if (times[j] >= currentTime) {
                    console.log('Next available time:', times[j]); 
                    break; // Stop at the first available time
                }
            }
        }
    }
}
