export function sumOfDigits(n: number): number {
    return n.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
}
// .toString converte para numero
// .split transforma em um array de numeros
// .reduce vai acumulando os valores com valor inicial de zero
// .parseInt conerte para numero de base 10