export default function handler(req, res) {
  res.status(200).json({
    experience: [
      {
        "type": "study",
        "dateStart": "2023, Ago",
        "dateEnd": "2023, Jul",
        "institution": "Casa Thomas Jefferson",
        "role": "4Life - B",
        "locate": "Brasília, DF",
        "description": "...",
        "link": "https://thomas.org.br/"
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Nov",
        "institution": "Escolha a Escola",
        "role": "Guia de escolas",
        "locate": "Brasília, DF",
        "description": "Guia de escolas do DF utilizando Next.JS, Laravel e AWS",
        "link": "https://escolhaaescola.correiobraziliense.com.br"
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Out",
        "institution": "Eleições 2022",
        "role": "Cobertura das eleições",
        "locate": "Brasília, DF",
        "description": "Guia de Eleições do DF utilizando Next.JS e AWS",
        "link": "https://eleicoes.correiobraziliense.com.br"
      },
      {
        "type": "study",
        "dateStart": "2022, Ago",
        "dateEnd": "2022, Dez",
        "institution": "Casa Thomas Jefferson",
        "role": "4Life - A",
        "locate": "Brasília, DF",
        "description": "...",
        "link": "https://thomas.org.br/"
      },
      {
        "type": "job",
        "dateStart": "2020",
        "dateEnd": "Dez",
        "institution": "Vini Digital",
        "role": "CEO",
        "locate": "Brasília, DF",
        "description": "",
        "link": ""
      },
      {
        "type": "project",
        "dateStart": "2020",
        "dateEnd": "Set",
        "institution": "Migração CMS & Infraestrutura",
        "role": "Correio Braziliense",
        "locate": "Brasília, DF",
        "description": "...",
        "link": "https://www.correiobraziliense.com.br"
      },
      {
        "type": "job",
        "dateStart": "2019",
        "dateEnd": "",
        "institution": "Diários Associados",
        "role": "Gestor de Tecnologia",
        "locate": "Brasília, DF",
        "description": "",
        "link": ""
      },
      {
        "type": "certified",
        "dateStart": "2019",
        "dateEnd": "2022",
        "institution": "Fundamentos do Gerenciador de tags do Google",
        "role": "Google Academy",
        "locate": "Brasília, DF",
        "description": "Gerenciador de tags do Google pode simplificar a implementação de tags e o processo de gerenciamento para profissionais de marketing, analistas e desenvolvedores.",
        "link": "https://analytics.google.com/analytics/academy/certificate/f01blr-RTG-wofBAlg7ePA"
      },
      {
        "type": "study",
        "dateStart": "2018",
        "dateEnd": "2019",
        "institution": "Ecma Script 6 - ES6",
        "role": "Udacity",
        "locate": "Brasília, DF",
        "description": "As mudanças na linguagem de programação JavaScript. "
      },
      {
        "type": "job",
        "dateStart": "2018",
        "dateEnd": "2019",
        "institution": "Metrópoles",
        "role": "Coordenador de Tecnologia",
        "locate": "Brasília, DF",
        "description": "Fonte de novos desafios pessoais e profissionais. Atuei como Coordenador de tecnologia e tive a missão de por em práticas conhecimento de Engenharia absorvidos ao longos anos."
      },
      {
        "type": "job",
        "dateStart": "2017",
        "dateEnd": "2018",
        "institution": "Diários Associados",
        "role": "Analista Web",
        "locate": "Brasília, DF",
        "description": "Convidado a retornar a empresa que muito me fez crescer profissionalmente, pude mais uma vez participar da entrega da nova versão do website do Correio Braziliense. Site esse que obteve muitas tecnologias atuais e um desenvolvimento muito forte com foco no resultado da navegação."
      },
      // {
      //   "type": "study",
      //   "dateStart": "2016",
      //   "dateEnd": "Cursando",
      //   "institution": "Engenharia de software",
      //   "role": "Unicesumar",
      //   "locate": "Brasília, DF",
      //   "description": "O Curso de Bacharelado em Engenharia de Software tem como objetivo formar profissionais aptos a propor melhorias e inovações no planejamento, construção, gestão e manutenção de processos, serviços e produtos computacionais, baseados nas técnicas da Engenharia de Software: sistemas de software corretos, completos, seguros, amigáveis, usáveis, com qualidade, fáceis de manter e custo justo"
      // },
      {
        "type": "certified",
        "dateStart": "2015",
        "dateEnd": "2017",
        "institution": "Google Analytics",
        "role": "Certificação",
        "locate": "Brasília, DF",
        "description": "Prova de certificação da Google."
      },
      {
        "type": "job",
        "dateStart": "2015",
        "dateEnd": "2016",
        "institution": "Vulpe Design Studio",
        "role": "Sócio Fundador, Desenvolvedor Front-End, Designer Gráfico",
        "locate": "Brasília, DF",
        "description": "Condução da gestão estratégica do negócio, planejamento estratégico, gestão estratégica da informação, arquitetura corporativa de negócio."
      },
      {
        "type": "study",
        "dateStart": "2013",
        "dateEnd": "2015",
        "institution": "Universidade Paulista - UNIP",
        "role": "Designer Gráfico",
        "locate": "Brasília, DF",
        "description": "O Curso Superior de Tecnologia em Design Gráfico tem como objetivo desenvolver competências associadas à utilização de métodos e técnicas modernos no âmbito da Comunicação, formando profissionais capazes de atuar nos departamentos de comunicação, publicidade, propaganda e marketing de empresas industriais e de serviços, setor público, organizações não-governamentais e empresas especializadas. Resultado obtido na avaliação do MEC, Ato de Reconhecimento: Portaria nº 685, de 02/03/05, Data da Publicação: 03/03/05, Conceito: A"
      },
      {
        "type": "job",
        "dateStart": "2012",
        "dateEnd": "2015",
        "institution": "Diários Associados",
        "role": "Desenvolvedor Front-End",
        "locate": "Brasília, DF",
        "description": "Execução de briefings de especiais. Trabalhando com telas resposivas..."
      },
      {
        "type": "job",
        "dateStart": "2007",
        "dateEnd": "2012",
        "institution": "PAR CORRETORA DE SEGUROS",
        "role": "Analista Web Jr, Suporte Jr",
        "locate": "Brasília, DF",
        "description": "O meu primeiro emprego de carteira assinada. Iniciei minha carreira com o cargo de suporte técnico, como a maioria dos profissionais de TI. Tive acesso a tecnologias de administração de redes como Firewall Aker, Active Directory e Microsoft Exchange. Em meiados de 2009, adotei um desafio da empresa e assumi o desenvolvimento web. Trabalhei com desenvolvimento de interfaces para sistemas da intranet e web utilizando metodologia ágeis."
      }
    ],
    expertise: [
      {
        "title": "Front-End",
        "description": "A arte de juntar ótima experiência do usuário, boa navegação e tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta performance."
      },
      {
        "title": "Backend",
        "description": "Experiência com o CMS mais presente na web. Usado da forma correta e com os recursos certos, o WP pode ser o CMS da sua empresa."
      },
      {
        "title": "DevOps",
        "description": "Todos os estágios do pipeline de produção até o lançamento do produto do cliente."
      },
      {
        "title": "Design Gráfico / UX",
        "description": "Tendo Design Gráfico como a primeira formação, trabalho com ferramentas Adobe CC com foco na web."
      },
      {
        "title": "Métricas Web",
        "description": "Certificado pelo Google em 2015, possuo um nível avançado em métricas web. Ferramentas: Google Analytics e Data Studio; ChartBeat;"
      }
    ],
    awards: [
      {
        "link": "https://www.metropoles.com/materias-especiais/a-tragedia-de-mariana-mg-vista-pela-janela-do-trem-efvm",
        "date": "2019",
        "name": "2° Prêmio de Jornalismo ANPTrilhos",
        "category": "Mídia Digital",
        "title": "A tragédia de Mariana (MG) vista pela janela do trem"
      },
      {
        "link": "https://www.metropoles.com/materias-especiais/mulheres-caminhoneiras-superam-preconceitos-pelas-estradas-do-brasil-2",
        "date": "2018",
        "name": "25º Prêmio CNT de Jornalismo",
        "category": "Internet",
        "title": "Caminhoneiras, codinome coragem"
      },
      {
        "link": "https://especiais.correiobraziliense.net.br/ciclovias-em-busca-de-uma-cidade/",
        "date": "2017",
        "name": "24º Prêmio CNT de Jornalismo",
        "category": "Meio ambiente e transporte",
        "title": "Ciclovias em busca de uma cidade"
      }
    ],
    skills: [
      {
        "title": "HTML",
        "size": "80"
      },
      {
        "title": "CSS",
        "size": "85",
        "prop": {
          "1": "Stylus",
          "2": "PostCSS",
          "3": "Sass"
        }
      },
      {
        "title": "Javascript",
        "size": "75",
        "prop": {
          "1": "React Js",
          "2": "Next Js",
          "3": "Node JS",
        }
      },
      {
        "title": "Webpack",
        "size": "80"
      },
      {
        "title": "Git",
        "size": "80"
      },
      {
        "title": "PHP",
        "size": "40"
      },
      {
        "title": "Python",
        "size": "30"
      },
      {
        "title": "Scrum",
        "size": "80"
      },
      {
        "title": "Cloud",
        "size": "60",
        "prop": {
          "1": "AWS",
          "2": "GCP"
        }
      },
      {
        "title": "Google Analytics",
        "size": "90"
      },
      {
        "title": "SEO",
        "size": "90"
      },
      {
        "title": "Figma",
        "size": "60"
      },
      {
        "title": "Adobe",
        "size": "75",
        "prop": {
          "1": "Photoshop",
          "2": "Illustrator",
          "3": "XD"
        }
      }
    ],
    clients: [
      {
        name: 'Correio Braziliense',
        image: '/images/clients/cb.jpg'
      },
      {
        name: 'Mais Goiás',
        image: '/images/clients/mg.jpg'
      },
    ]
  })
}