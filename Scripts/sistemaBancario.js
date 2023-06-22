
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("relogio").innerText = time;
  document.getElementById("relogio").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();




let saldo = 0;

function atualizarSaldo() {
  document.getElementById("saldo").textContent = "Saldo atual: R$ " + saldo.toFixed(2);
}


function realizarDeposito() {
  const deposito = parseFloat(prompt("Digite o valor do depósito:"));
  saldo += deposito;
  alert("Depósito realizado com sucesso.");
  atualizarSaldo();
}

function realizarSaque() {
  const saque = parseFloat(prompt("Digite o valor do saque:"));
  if (saldo >= saque) {
    saldo -= saque;
    alert("Saque realizado com sucesso.");
  } else {
    alert("Saldo insuficiente.");
  }
  atualizarSaldo();
}

function verificarSaldo() {
  alert("Saldo atual: R$ " + saldo.toFixed(2));
}



function pagarContas() {
  alert("Função fora do ar no momento!\ndesculpe pelo transtorno.");
}

function tranferir() {
  alert("Função fora do ar no momento!\ndesculpe pelo transtorno.");
}

function cartao() {
  alert("Função fora do ar no momento!\ndesculpe pelo transtorno.");
}

function encerrarSistema() {
  alert("Retire seu cartão");
  alert("Obrigado")
  window.close(); // Fechar a janela do navegador
}










function realizarEmprestimo() {







  var run = true;
  while (run === true) {
    var escolhas = prompt('Escolha o valor do EMPRESTIMO ?\n-------------------------- \n(1) R$50,00 \n(2) R$100,00\n(3) R$200,00\n(4) R$300,00\n(5) R$500,00\n(6) Encerrar');
    switch (escolhas) {
      
      case '1':
        saldo =+  50 
        alert("R$" + saldo + ",00" + " adicionado a sua conta");
        console.log(saldo);
        break;
      
        

      case '2':
        saldo =+ 100 
        alert("R$" + saldo + ",00" + " adicionado a sua conta");
        console.log(saldo);
        break;
        alert(saldo);
        break;


      
      case '3':
        saldo =+ 200 
        alert("R$" + saldo + ",00" + " adicionado a sua conta");
        console.log(saldo);
        break;
        alert(saldo);
        break;


        case '4':
          saldo =+ 300 
          alert("R$" + saldo + ",00" + " adicionado a sua conta");
          console.log(saldo);
          break;
          alert(saldo);
          break;



        case '5':
          saldo =+ 500 
          alert("R$" + saldo + ",00" + " adicionado a sua conta");
          console.log(saldo);
          break;
          alert(saldo);
          break;

      case '6':
        alert('Até logo');
        run = false;
        break;

      case null:
        console.log('Obrigado');
        run = false;
        break;
      default:
        alert( escolhas + ' é uma opção invalida, tente novamente.');
        break;
    }
  }
}