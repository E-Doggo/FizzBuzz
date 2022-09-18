import Fizzbuzz from "./FizzBuzz.js"

describe("FizzBuzz", () => {
  it("deberia Imprimir el numero 1 que no tiene regla", () => {
    const fb = new Fizzbuzz();
    let resultado = fb.generarPara(1);
    expect(resultado).toEqual('1');
  });

  it("deberia Imprimir Fizz para el 3", () => {
    const fb = new Fizzbuzz();
    let resultado = fb.generarPara(3);
    expect(resultado).toEqual('Fizz');
  });

  it("deberia Imprimir Fizz para multiplos de 3", () => {
    const fb = new Fizzbuzz();
    let resultado = fb.generarPara(9);
    expect(resultado).toEqual('Fizz');
  });
  
  it("deberia Imprimir Buzz para el 5", () => {
    const fb = new Fizzbuzz();
    let resultado = fb.generarPara(5);
    expect(resultado).toEqual('Buzz');
  });

  it("deberia Imprimir Buzz para mutiplos de 5", () => {
    const fb = new Fizzbuzz();
    let resultado = fb.generarPara(10);
    expect(resultado).toEqual('Buzz');
  });

});