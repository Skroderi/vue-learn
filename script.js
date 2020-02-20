new Vue({
    el:'#app',
    data:{
        title:'Hello !!',
        link: 'http://google.com',
        finishedLink:'<a href="http://google.com">googlee</a>',
        counter:0,
        x:0,
        y:0,
    },
    methods:{
        changeTitle: function(e){
            this.title = e.target.value;
            console.log('render title');
            
        },
        sayHello: function (){
            console.log('render  func hello');
            
            return 'Hello from func'
        },
        increase:function(number, event){
            // console.log(event);
            
            console.log('render from increase func');
            this.counter += number
        },
        updateCoordinates: function(e){
            console.log('coordinates');
            
            this.x= e.clientX;
            this.y=e.clientY;
        },
        alertMe:function(){
            alert('alert!')
        }
        // dummy: function(e){
        //     e.stopPropagation()
        // }
    }
})

new Vue({
    el:'#app2',
    data:{
        name:"Max",
        counter:0,
        secondCounter:0,
        link: 'http://google.com'
        // result:''
    },
    computed:{
        output:function(){
            console.log('computed');
            
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    },
    watch:{
        counter:function(value){
            var vm = this
           setTimeout(function(){
            vm.counter = 0
           },2000) 
        },
    },
    methods:{
        result(){
            console.log('method');
            
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        },
        changeLink:function(){
            this.link= 'htpp://apple.com'
        }
        // increase:function(){
        //     this.counter++;
        //     this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        // },
        // decrease:function(){
        //     this.counter--;
        //     this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5';

        // }
    }
})


new Vue({
    el:'#app3',
    data:{
        attachRed:false,
        color:'green',
        size: '25',
        width: '50'
    },
    computed:{
       divClasses: function(){
            return{
                red:this.attachRed,
                blue:!this.attachRed
            }
        },
        myStyle: function(){
            return {
                width: this.width + 'px',
                fontSize:this.size + 'px'
            }
        }
    }
    
})




new Vue({
    el:'#app4',
    data:{
        show:true
    }
})



var vm5 = new Vue({
    el:'#app5',
    template: '<h1> aaaaa</h1>',
    data:{
        ingredients:['meat', 'fruit', 'cookies'],
        persons:[
            {name:'Max', age: 27, color: 'red'},
            {name:'Anna', age: 'unkown', color:'blue'}
        ]
    }
})

vm5.$mount('#app5')

document.getElementById('app5').appendChild(vm5.$el)

