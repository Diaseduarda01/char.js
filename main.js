 // Pegando o elemento 'myChart' do DOM, que é onde o gráfico será renderizado
 const ctx = document.getElementById('myChart');

 // Definindo as etiquetas (labels) que aparecerão no eixo x do gráfico
 const labels = [
     '12.00',  
     '13.00', 
     '14.00',    
     '15.00',   
     '16.00',     
     '17.00'     
 ];

 // Definindo os dados que serão usados no gráfico
 const data = {
     labels: labels, // Utiliza as etiquetas definidas acima para o eixo x
     datasets: [     // Array que contém os diferentes datasets (conjuntos de dados)
         {
             label: 'Temperatura', // Nome do primeiro dataset
             backgroundColor: "rgb(255, 0, 0)", // Cor de fundo das barras (vermelha)
             borderColor: 'rgb(255, 0, 0)', // Cor da borda das barras (também vermelha)
             data: [30, 29, 28, 25, 22, 23], // Valores do dataset 1 para cada mês (y)
         },
         {
             label: 'Umidade', // Nome do segundo dataset
             backgroundColor: 'rgb(0, 0, 255)', // Cor de fundo das barras (azul)
             borderColor: 'rgb(0, 0, 255)', // Cor da borda das barras (também azul)
             data: [80,82,80,85,80,83], // Valores do dataset 2 para cada mês (y)
         }
     ]
 };

 // Configuração do gráfico
 const config = {
     type: 'line',  
     data: data,   // Dados que definimos anteriormente (rótulos e datasets)
     options: {}   // Configurações adicionais, neste caso, está vazio (pode ser usado para personalizar mais o gráfico)
 };

 // Inicializando e criando o gráfico com as configurações definidas
 new Chart(ctx, config);





  // Pegando o elemento 'myChart' do DOM, que é onde o gráfico será renderizado
  const get = document.getElementById('myChart2');

  // Definindo as etiquetas (labels) que aparecerão no eixo x do gráfico
  const labels2 = [
      'January',  
      'February', 
      'March',    
      'April',   
      'May',     
      'June'     
  ];
 
  // Definindo os dados que serão usados no gráfico
  const data2 = {
      labels: labels2, // Utiliza as etiquetas definidas acima para o eixo x
      datasets: [     // Array que contém os diferentes datasets (conjuntos de dados)
          {
              label: 'Temperatura', // Nome do primeiro dataset
              backgroundColor: "rgb(255, 0, 0)", // Cor de fundo das barras (vermelha)
              borderColor: 'rgb(255, 0, 0)', // Cor da borda das barras (também vermelha)
              data: [22,24,27,23,20,18], // Valores do dataset 1 para cada mês (y)
          },
          {
              label: 'Umidade', // Nome do segundo dataset
              backgroundColor: 'rgb(0, 0, 255)', // Cor de fundo das barras (azul)
              borderColor: 'rgb(0, 0, 255)', // Cor da borda das barras (também azul)
              data: [90,89,93,87,88,82], // Valores do dataset 2 para cada mês (y)
          }
      ]
  };
 
  // Configuração do gráfico
  const config2 = {
      type: 'bar',  
      data: data2,   // Dados que definimos anteriormente (rótulos e datasets)
      options: {}   // Configurações adicionais, neste caso, está vazio (pode ser usado para personalizar mais o gráfico)
  };
 
  // Inicializando e criando o gráfico com as configurações definidas
  new Chart(get, config2)