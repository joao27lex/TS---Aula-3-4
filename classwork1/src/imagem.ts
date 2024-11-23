export function criaImagens(element: HTMLElement) {
    const img1 = "https://cdn.meutimao.com.br/_upload/noticia/2024/11/22/corinthians-e-o-nono-colocado-do-campeonato-rzm.jpg";
    const img2 = "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Memphis-Depay-marca-golaco-em-Corinthians-x-Cruzeiro-no-Brasileirao-scaled-aspect-ratio-512-320-1.jpg";
    const img3 = "https://cdn.meutimao.com.br/_upload/noticia/2024/11/20/memphis-sera-desfalque-do-corinthians-na-partida-5q.jpg";

    const arr = [img1, img2, img3];

    arr.forEach(iter => {
      const img = document.createElement('img');
      img.src = iter;

      element.appendChild(img);
    });
  }
  