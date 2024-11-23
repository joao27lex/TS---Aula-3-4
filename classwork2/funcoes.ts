export function somar(element: Array<number>) {
    let sum = 0;
    element.forEach(item => {
        sum += item;
    });
    console.log(sum)
  }
  

export function mostrarMaior(element: Array<number>){
    console.log(Math.max(...element));
}

export function mostrarMenor(element: Array<number>){
    console.log(Math.min(...element));
}