// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Food from './food/food';
import Animal from './animal.class';

export default class Hippopotamus extends Animal{

  eat(food: Food){
    if(food.isVegan()){
      this.weight = this.weight + 20;
    }else if (!food.isVegan()){
      return 'beurk';
    }
  }

  sleep(){
    if(this.weight >= 20){
      this.weight -= 20;
    }else{
      this.weight = 0;
    }
  }

  swim(): void{
    if(this.weight >= 50){
      this.weight -= 50;
    }else{
      this.weight = 0;
    }
  }
}
