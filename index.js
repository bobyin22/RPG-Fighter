function createPlayer(name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function(hp) {
      // write your code here
      // hint: 1. 在動手寫 code 之前，試著先列出有哪些可能性，再設計 if-else 邏輯 2. 魔法師和戰士補的血量不同，需要根據不同的補血量扣除不同的 MP


      //大if判斷 有血沒血 
      if (this.hp > 0) {

        //小if判斷 法力夠不夠
        if (this.mp >= hp * 2) {
          this.mp -= hp * 2 //扣法力
          this.hp += hp //補血
          return `${this.name} 回血 HP! (HP=${this.hp}, MP=${this.mp})`
        }
        else {
          return `${this.name} MP不足，無法回血`
        }
      }
      else {
        return `${this.name}沒血了，無法戰鬥`
      }

    },
    attack: function(enemy) {
      // write your code here
      // hint: 在動手寫 code 之前，試著先列出有哪些可能性，再設計 if-else 邏輯
      const damage = Math.floor(Math.random() * 100) + 1   //計算攻擊量 0<x0.9999  -> 1<x<101
      enemy.hp -= damage //無論如何會先扣血攻擊別人血量  

      if (enemy.hp > 0) { //判斷對手hp
        return `${this.name} 攻擊 ${enemy.name}. ${enemy.name} 失去 ${damage} HP\n${enemy.name} 還活者. (HP=${enemy.hp})`
      }
      else {  //印出誰死亡文字
        return `${this.name} 攻擊 ${enemy.name}. ${enemy.name} 失去 ${damage} HP\n${enemy.name} 死了.`
      }
    }
  }
}
console.log('======遊戲開始 CREATE PLAYERS 開始這一回合======')
const magician = createPlayer('Magician', 30, 100)
const warrior = createPlayer('Warrior', 100, 30)
console.log(magician) // {name: "Magician", hp: 30, mp: 100}
console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
console.log('====== START FIGHT ======')
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician))
  console.log(magician.cure(20)) // 魔法師補血 20 點
  // console.log(magician) //額外加上讓自己可以查看HP MP狀況
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log('Change sides \n')
    console.log(magician.attack(warrior))
    console.log(warrior.cure(10)) // 戰士補血 10 點
    // console.log(warrior) //額外加上讓自己可以查看HP MP狀況
  }
  console.log('======')
}
console.log('GAME OVER.')
console.log('======遊戲結束 FINISH PLAY 再執行一次看誰贏======')

/*
思考步驟
1. 判斷誰攻擊 用this.name this.hp 去完成文字敘述
2. 攻擊 補血 函式都要寫上return印出文字，寫console.log也可正確印出但是因為沒有return後面會加上一行undefined
*/
