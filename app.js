console.log("hi  there its for VUE JS Tutorial ");

// job is control full website or certain component

const appp = Vue.createApp(
    {
         data()
        {
            return{
                url:'https://www.google.co.in/',
                showBooksDetails : true ,
                title : 'The Final Project title',
                author : 'subhash ghai',
                Age :30,
                message:'mouse clicked',
                xPoistion :0 ,
                yPoistion :0,
                books :[
     {bookName:"wings of fire ",writer :"D A P G Kalam",img:'Assets/kalam.jpeg',isfave:true},
      {bookName:"3 mistkes of my life",writer :"sunil",img:'Assets/mistake.jpeg',isfave:false},
                    {bookName:"Monk who sold ferrari ",
                    writer :"Shyam bhai",img:'Assets/monk.jpeg',isfave:true},
                    
                    {bookName:"Half GirlFriend  ",
                    writer :"Chetan Bhagat",img:'Assets/half.jpeg',isfave:true},
                    
                ]
            }
        },
        computed:{
            filterBooks()
            {
                return this.books.filter((book) => book.isfave)
            }
        },
        methods:{
            changeFav(books)
            {
                books.isfave = !books.isfave
            }
            ,
            changeTitle()
            {
                console.log('you have clicked ')
                this.title = 'The sharelookhomes secrate'

            },
            changeTitle2(value)
            {
                console.log('you have clicked ',value)
                this.showBooksDetails = true
                this.title = value

            },
            
            showDetails()
            { 
                this.showBooksDetails = false

            },
            toggleShow()
            { 
                this.showBooksDetails = !this.showBooksDetails 
            },
            mouseAction(e,data)
            {    
                       this.message = 'Moue has done '+ e.type +' '+ data
                       this.xPoistion = e.offsetX
                       this.yPoistion = e.offsetY      

            }

        }

    }
)
appp.mount('#app2')