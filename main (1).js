/*Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9,25333333*/

/*obtemNomeAtleta(), que retorna o nome do atleta
obtemIdadeAtleta(), que retorna a idade do atleta
obtemPesoAtleta(), que retorna o peso do atleta
obtemNotasAtleta(), que retorna as notas do atleta
obtemCategoria(), que retorna a categoria do atleta
obtemIMC(), que retorna o IMC do atleta
obtemMediaValida(), que retorna a média válida do atleta*/
class Atleta {
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    obtemNomeAtleta(){
        return this.nome
    }
    obtemIdadeAtleta(){
        return this.idade
    }
    obtemPesoAtleta(){
        return this.peso
    }
    obtemNotasAtleta(){
        return this.notas
    }
    calculaCategoria(){
        if (this.idade >= 9 && this.idade <=11){
            return "Infanti"
        }
        else if (this.idade >= 12 && this.idade <=13){
            return "Juvenil"
        }
        else if (this.idade >= 14 && this.idade <=15){
            return "Intermediário"
        }
        else if (this.idade >= 16 && this.idade <=30){
            return "Adulto"
        }
        else {
            return "Sem categoria"
        }
    }
    calculaIMC(){
        /*Fórmula: imc = peso / (altura x altura)*/
        let imc = this.peso / (this.altura*this.altura)
        return imc
    }
    calculaMediaValida(){
        let soma = 0
        let cont = 0
        this.notas.forEach(function(nota){
            soma += nota
            cont++
        })
        let media = soma / cont
        return media
    }
}
let atleta1 = new Atleta("João", 15, 60, 1.70, [8, 9, 7, 10])
console.log("Nome: ", atleta1.obtemNomeAtleta())
console.log("Idade: ", atleta1.obtemIdadeAtleta())
console.log("Peso: ", atleta1.obtemPesoAtleta())
console.log("Altura: ",  atleta1.altura)
console.log("Notas: ",  atleta1.obtemNotasAtleta())
console.log("Categoria: ",  atleta1.calculaCategoria())
console.log("IMC: ",  atleta1.calculaIMC())
console.log("Média: ", atleta1.calculaMediaValida())