if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      let reg;
      reg = await navigator.serviceWorker.register('/sw.js', { type: "module" });
      console.log('🟢 Service worker registrada! 😎', reg);
    } catch (err) {
      console.log('🔴 Service worker registro falhou: ', err);
    }
  });
}

let posicaoInicial; // variável para capturar a posição
const capturarLocalizacao = document.getElementById('localizacao');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const mapa = document.getElementById("gmap_canvas") // prof

const sucesso = (posicao) => { // callback de sucesso para captura da posição
posicaoInicial.coords.latitude = document.getElementById('latInput').value
posicaoInicial.coords.latitude = document.getElementById('longInput').value
  posicaoInicial = posicao;
  latitude.innerHTML = posicaoInicial.coords.latitude;
  longitude.innerHTML = posicaoInicial.coords.longitude;
  mapa.src = "https://maps.google.com/maps?q=" + posicaoInicial.coords.latitude + "," + posicaoInicial.coords.longitude + "&z=19&ie=UTF8&iwloc=&output=embed" //prof
};

const sucessoIr = (posicao)=> { 
  posicaoInicial = posicao;
  latitude.innerHTML = posicaoInicial.coords.latitude;
  longitude.innerHTML = posicaoInicial.coords.longitude;
  mapa.src = "https://maps.google.com/maps?q=" + posicaoInicial.coords.latitude + "," + posicaoInicial.coords.longitude + "&z=19&ie=UTF8&iwloc=&output=embed" //prof
};

const erro = (error) => { // callback de erro (falha na captura de localização)
  let errorMessage;
  switch (error.code) {
    case 0:
      errorMessage = "Erro desconhecido";
      break;
    case 1:
      errorMessage = "Permissão negada!";
      break;
    case 2:
      errorMessage = "Captura de posição indisponível!";
      break;
    case 3:
      errorMessage = "Tempo de solicitação excedido!";
      break;
  }

  console.log('Ocorreu um erro: ' + errorMessage);
};

capturarLocalizacao.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(sucesso, erro);
});

irLocalizacao.addEventListener('click', () => { 
  navigator.geolocation.getCurrentPosition.sucessoIr(sucesso, erro);
});

