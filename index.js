class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`O ${this.tipo + " " + this.nome + " aos "+ this.idade + " anos"} atacou usando ${this.ataque}`)
    }
        
    
}

    let mago = new heroi ("Gandalf", 265 , "Mago", "Magia")
    let guerreiro = new heroi ("Link", 17 ,"Guerreiro", "Master Sword")
    let monge = new heroi ("Buda", 53 ,"Monge" , "Artes Marciais")
    let ninja = new heroi ("Ryu Haiabusa", 31 , "Ninja",  "Shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()


