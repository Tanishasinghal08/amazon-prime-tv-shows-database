   var ctx = document.getElementById('myChart-d').getContext('2d');
   var  myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: ['Pataal Lok',
           'Upload',
           'The Marvelous Mrs. Maisel',
           'Four More Shots Please',
           'Fleabag',
           'Made in Heaven',
           'Homecoming',
           'Mirzapur',
           'The Family Man',
           'Modern Love',
           'Inside Edge',
           'The Boys',
          'Hanna',
           'Hunters',
           'Breathe',
           'The Forgotten Army- Azaadi ke Liye',
           'Tom Clancy Jack Ryan',
           'Tales from the Loop',
           'The Test: A New Era for Australia Team',
           'The Man in the High Castle',
           'One Mic Stand',
           'Undone',
           'American Gods',
           'The Tick',
           'Jestination Unknown',
           'Suits',
           
        ],


           datasets: [{
               label: 'Age+',
               data: [
                18,
                16,
                16,
                18,
                18,
                18,
                16,
                18,
                18,
                16,
                18,
                18,
                16,
                18,
                16,
                18,
                16,
                18,
                16,
                18,
                16,
                16,
                18,
                16,
                16,
                16,
                18,
                
                ],
               backgroundColor: [
                   'rgba(255,0,255,1)',
                   
               ],
               borderColor: [
                   'rgba(255,0,255,1)',
                   
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }


       }
   });




var ctx = document.getElementById('myChart-tc').getContext('2d');
var  myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Pataal Lok',
            'Upload',
            'The Marvelous Mrs. Maisel',
            'Four More Shots Please',
            'Fleabag',
            'Made in Heaven',
            'Homecoming',
            'Mirzapur',
            'The Family Man',
            'Modern Love',
            'Inside Edge',
            'The Boys',
           'Hanna',
            'Hunters',
            'Breathe',
            'The Forgotten Army- Azaadi ke Liye',
            'Tom Clancy Jack Ryan',
            'Tales from the Loop',
            'The Test: A New Era for Australia Team',
            'The Man in the High Castle',
            'One Mic Stand',
            'Undone',
            'American Gods',
            'The Tick',
            'Jestination Unknown',
            'Suits',
            
        
     ],


        datasets: [{
            label: 'IMDb rating',
            data: [
                7.5,
                8.1,
                8.7,
                5.3,
                8.7,
                8.3,
                7.5,
                8.5,
                8.6,
                8,
                8,
                8.7,
                7.5,
                7.2,
                8.4,
                8,
                8.1,
                7.5,
                9,
                8,
                6.5,
                8.2,
                7.8,
                7.4,
                6.2,
                8.5,
                

             ],
            backgroundColor: [
                'rgba(0,0,255,1)',
                'rgba(1)',
                
            ],
            borderColor: [
                'rgba(0,0,255,1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }


    }
});


var ctx = document.getElementById('myChart-dis').getContext('2d');
var  myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Pataal Lok',
        'Upload',
        'The Marvelous Mrs. Maisel',
        'Four More Shots Please',
        'Fleabag',
        'Made in Heaven',
        'Homecoming',
        'Mirzapur',
        'The Family Man',
        'Modern Love',
        'Inside Edge',
        'The Boys',
       'Hanna',
        'Hunters',
        'Breathe',
        'The Forgotten Army- Azaadi ke Liye',
        'Tom Clancy Jack Ryan',
        'Tales from the Loop',
        'The Test: A New Era for Australia Team',
        'The Man in the High Castle',
        'One Mic Stand',
        'Undone',
        'American Gods',
        'The Tick',
        'Jestination Unknown',
        'Suits',''
     ],


        datasets: [{
            label: 'Total no of seasons',
            data: [
                1,
                1,
                3,
                2,
                2,
                1,
                2,
                1,
                1,
                1,
                2,
                2,
                2,
                1,
                1,
                1,
                2,
                1,
                1,
                4,
                1,
                1,
                2,
                2,
                1,
                8,
                 
             ],
            backgroundColor: [
                'rgba(0,255,255,1)',
                
            ],
            borderColor: [
                'rgba(0,255,255,1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }


    }
});




