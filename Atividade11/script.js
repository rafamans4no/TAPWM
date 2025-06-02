//Retângulo com função construtora
class Retangulo {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  function calcularArea() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const ret = new Retangulo(base, altura);
    document.getElementById("resultadoArea").innerText = `Área: ${ret.calcularArea()} m²`;
  }
  
//Conta, Corrente e Poupança
  class Conta {
    constructor() {
      this._nome = "";
      this._banco = "";
      this._numero = "";
      this._saldo = 0;
    }
  
    set nome(valor) { this._nome = valor; }
    get nome() { return this._nome; }
  
    set banco(valor) { this._banco = valor; }
    get banco() { return this._banco; }
  
    set numero(valor) { this._numero = valor; }
    get numero() { return this._numero; }
  
    set saldo(valor) { this._saldo = valor; }
    get saldo() { return this._saldo; }
  }
  
  class Corrente extends Conta {
    constructor() {
      super();
      this._saldoEspecial = 0;
    }
  
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
    get saldoEspecial() { return this._saldoEspecial; }
  }
  
  class Poupanca extends Conta {
    constructor() {
      super();
      this._juros = 0;
      this._dataVencimento = "";
    }
  
    set juros(valor) { this._juros = valor; }
    get juros() { return this._juros; }
  
    set dataVencimento(valor) { this._dataVencimento = valor; }
    get dataVencimento() { return this._dataVencimento; }
  }
  
  function criarCorrente() {
    const c = new Corrente();
    c.nome = document.getElementById("nomeCorrente").value;
    c.banco = document.getElementById("bancoCorrente").value;
    c.numero = document.getElementById("numeroCorrente").value;
    c.saldo = parseFloat(document.getElementById("saldoCorrente").value);
    c.saldoEspecial = parseFloat(document.getElementById("saldoEspecial").value);
  
    document.getElementById("resultadoCorrente").innerText =
      `Conta Corrente:\nNome: ${c.nome}, Banco: ${c.banco}, Nº: ${c.numero}, Saldo: R$ ${c.saldo}, Saldo Especial: R$ ${c.saldoEspecial}`;
  }
  
  function criarPoupanca() {
    const p = new Poupanca();
    p.nome = document.getElementById("nomePoupanca").value;
    p.banco = document.getElementById("bancoPoupanca").value;
    p.numero = document.getElementById("numeroPoupanca").value;
    p.saldo = parseFloat(document.getElementById("saldoPoupanca").value);
    p.juros = parseFloat(document.getElementById("juros").value);
    p.dataVencimento = document.getElementById("dataVencimento").value;
  
    document.getElementById("resultadoPoupanca").innerText =
      `Conta Poupança:\nNome: ${p.nome}, Banco: ${p.banco}, Nº: ${p.numero}, Saldo: R$ ${p.saldo}, Juros: ${p.juros}%, Vencimento: ${p.dataVencimento}`;
  }
  