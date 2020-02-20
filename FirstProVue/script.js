new Vue({
    el:'#app',
    data:{
    isGameStarted:false,
    healthPlayer: 100,
    healthAI:100,
    historyActions:[]
    },
    methods:{
startGame: function(){
    this.isGameStarted=true
    this.healthPlayer= 100
    this.healthAI=100
    this.historyActions=[]
        },
giveUp:function(){
    this.isGameStarted=false,
    alert('You lose!')
    this.historyActions=[]
},
basicAttack: function(){
    const maxHit = 10
    const minHit = 2

    const hitValue = Math.floor(Math.random() * (maxHit - minHit)) + minHit;  
    return hitValue
},
specialAttack:function(){
    const maxHit = 20
    const minHit = 10
  const hitValue = Math.floor(Math.random() * (maxHit - minHit)) + minHit;  
    return hitValue
},
heal: function(){
    const maxHeal = 16
    const minHeal = 10
  const healValue = Math.floor(Math.random() * (maxHeal - minHeal)) + minHeal;  
    return healValue
},
checkWhoWin: function(){
    if(this.healthAI <=0 ){
        this.healthAI = 0
        setTimeout(()=>{
        if(confirm('You won! New Game?')){
            this.startGame()
        }else{
            this.isGameStarted=false
        }
        },100)  
    }else if(this.healthPlayer <=0 ){
        this.healthPlayer = 0
        setTimeout(()=>{
            if(confirm('You Lose! New Game?')){
                this.startGame()
            }else{
                this.isGameStarted=false
            }
            },100) 
    }
},
action: function(action,type){
switch(type){
    case 'attack':
        const playerHit = action()
        const aiHit = this.basicAttack()
        this.healthPlayer -=aiHit
        this.healthAI -=playerHit
    this.checkWhoWin()

    this.historyActions.unshift({
        isPlayer:true,
        isHeal: false,
        text: `Player hits Monster for ${playerHit} `
    },
    {
        isPlayer:false,
        isHeal: false,
        text: `Monster hits Player for ${aiHit} `
    },)
    break;

    case 'heal':
        const healValue = action();
        const aiAttack = this.basicAttack()
        this.healthPlayer +=healValue

        if(this.healthPlayer >=100 ){
            this.healthPlayer = 100
        }
        this.healthPlayer -=aiAttack
        this.checkWhoWin()
        this.historyActions.unshift({
            isPlayer:true,
            isHeal: true,
            text: `Player heals himself for ${healValue} `
        },

        {
            isPlayer:false,
            isHeal: false,
            text: `Monster hits Player for ${aiAttack} `
        },)

    break;
    
    default:
    console.log('error');
    }
},
    },
})