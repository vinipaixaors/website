export default function handler(req, res) {
  const yearsOld = () => {
    const now = new Date();
    const mes = now.getMonth();
    const dia = now.getDate();
  
    if(( mes > 10) && ( dia > 17)){
      return now.getFullYear() - 1985;
    } else if(mes > 11) {
      return now.getFullYear() - 1985;
    } else {
      return now.getFullYear() - 1986;
    }
  }

  res.status(200).json({
    name: 'Vinícius Paixão',
    nickname: 'Vini',
    age: `${yearsOld()}`,
    leave: `Brasília-DF`,
    from: `Brasília-BR`,
    workingTime: `${new Date().getFullYear() - 2004}`,
    degrees: [{
      first: 'Design Gráfico',
      secound: 'Ciência da Computação',
      pos: ''
    }],
    languages:[
      {
        native: 'Português - BR',
        secound: 'Inglês',
      }
    ],
    email: `oi@vini.digital`,
    phone: `+5561993736305`,
    social:[
      {
        github: 'https://github.com/vinipaixaors/',
        linkedin: 'https://www.linkedin.com/in/viniciuspaixaors/',
        twitter: 'https://twitter.com/viniciuspaixaor',
        instagram: 'https://www.instagram.com/viniciuspaixaors/'
      }
    ]
  })
}