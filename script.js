const stories = {
    story1: {
      title: "A Origem do Xadrez",
      text: "Há muito tempo, na Índia antiga, um sábio inventou o xadrez para ensinar um rei a importância de cada súdito no reino. O rei ficou tão impressionado que quis recompensar o sábio, mas o pedido simples do sábio - um grão de arroz dobrado para cada casa do tabuleiro - acabou por ensinar uma lição valiosa sobre crescimento exponencial."
    },
    story2: {
      title: "A Partida Imortal",
      text: "Em 1851, Adolf Anderssen jogou contra Lionel Kieseritzky uma partida que se tornaria lendária. Anderssen sacrificou várias peças, incluindo ambas as torres e a dama, para dar xeque-mate em Kieseritzky. Esta partida é conhecida como a 'Partida Imortal' e é um exemplo de brilhante ataque e sacrifício."
    },
    story3: {
      title: "O Grande Mestre Bobby Fischer",
      text: "Bobby Fischer, um prodígio americano do xadrez, se tornou o campeão mundial em 1972 ao derrotar Boris Spassky da União Soviética. Fischer foi conhecido por sua intensa dedicação e habilidades extraordinárias no tabuleiro, inspirando gerações de jogadores de xadrez."
    }
  };
  
  function showStory(storyKey) {
    const story = stories[storyKey];
    document.getElementById('story-title').innerText = story.title;
    document.getElementById('story-text').innerText = story.text;
  }
  