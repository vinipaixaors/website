import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { GitHub, Linkedin, Twitter, Instagram, MapPin, Phone, Globe, Mail } from 'react-feather'
import Flag from 'react-flagkit'
import { useState, useEffect } from 'react'

import HeaderSection from '../components/Header/HeaderSection'
import Expertise from '../components/Home/Expertise/Expertise'
import Skills from '../components/Home/Skills/Skills'
import Experience from '../components/Home/Experience/Experience'

export default function Home() {

  const [about, setAbout] = useState();
  const [expertise, setExpertise] = useState();
  const [skills, setSkills] = useState();
  const [experience, setExperience] = useState();

  useEffect(() => {
    fetch(`/api/about`)
      .then((response) => response.json())
      .then((response) => {
        setAbout(response);
      });

    fetch(`/api/data`)
      .then((response) => response.json())
      .then((response) => {
        setExpertise(response.expertise);
        setSkills(response.skills);
        setExperience(response.experience);
      });

  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Vinícius Paixão - Desenvolvedor web, Frontend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Currículum Vitae" />
        <meta name="keywords" content="desenvolvedor web, frontend, currículo, brasília, df" />
        <meta name="author" content="Vinícius Paixão" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://cv.vini.digital" />
        <meta property="og:title" content="Vinícius Paixão - Desenvolvedor web, Frontend" />
        <meta property="og:site_name" content="Vini Digital" />
        <meta property="og:description" content="Currículum Vitae" />
        <meta property="og:image" content="https://cv.vini.digital/images/share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </Head>

      <header className={styles.header}>


        <div className={`${styles.col} ${styles.col1}`}>
          <picture>
            <Image src="/images/avatar.jpeg" alt="Foto Vinícius" width={540} height={593} />
          </picture>
        </div>

        <div className={`${styles.contentText} ${styles.col}`}>

          <div className={styles.contentHeader}>
            <div>
              <div>
                <Flag country="BR" />
              </div>
              <div>
                <Flag country="US" />
              </div>
            </div>
          </div>

          <div className={styles.contentBody}>
            <h1>Vinícius Paixão</h1>
            <h2>Desenvolvedor web<span> frontend &amp; Designer</span></h2>
            {/* I am a WordPress Developer at heart and create features that are best suited for the job at hand. */}
            <ul className={styles.social}>
              <li><a href="https://github.com/vinipaixaors/" title="Github"><GitHub size={24} /></a></li>
              <li><a href="https://www.linkedin.com/in/viniciuspaixaors/" title="Linkedin"><Linkedin size={24} /></a></li>
              <li><a href="https://twitter.com/viniciuspaixaor" title="Twitter"><Twitter size={24} /></a></li>
              <li><a href="https://www.instagram.com/viniciuspaixaors/" title="Instagram"><Instagram size={24} /></a></li>
            </ul>
          </div>

          <div className={styles.contentFooter}>
            <hr />
            <ul className={styles.perosnalContact}>
              <li className={styles.local}>
                <div>
                  <MapPin size={16} />
                  <h5>Local</h5>
                </div>
                <div>Brasília, DF</div>
              </li>
              <li className={styles.whatsapp}>
                <div>
                  <Phone size={16} />
                  <h5>Phone</h5>
                </div>
                <div>
                  <Link href="tel:+5561993736305">(61) 99373-6305</Link>
                </div>
              </li>
              <li className={styles.email}>
                <div>
                  <Globe size={16} />
                  <h5>Web</h5>
                </div>
                <div>
                  <Link href="https://vini.digital">vini.digital</Link>
                </div>
              </li>
              <li className={styles.email}>
                <div>
                  <Mail size={16} />
                  <h5>E-mail</h5>
                </div>
                <div>
                  <Link href="mailto:oi@vini.digital">oi@vini.digital</Link>
                </div>
              </li>
            </ul>

          </div>

        </div>

      </header>

      <main className={styles.main}>
        <section>
          <header className={styles.col}>
            <h3>Intro</h3>
            <small>Um pouco sobre meu <strong>perfil</strong></small>
          </header>
          <main className={styles.col}>
            <p>
              Me chamo {about?.name}, tenho {about?.age} anos e moro em {about?.leave}. Trabalho pela minha empresa Vini Digital como consultor
              e desenvolvedor de software.
              Formado em design gráfico e estudante de ciência da Computação, atuo com tecnologia a {about?.workingTime} anos.
              {/* Conquistei <a href="#awards">três prêmios</a> nos últimos anos. */}
            </p>
            {/* <p>Atualmente, foco no desenvolvimento frontend para aplicações web e mobile.</p> */}
            <p>Possuo um perfil comunicativo, responsável, engajado e disposto a absorver desafios.
              Tenho muito interesse em novas tecnologias e tendências de mercado.
            </p>
            <p>Confira algumas das minhas experiências: </p>
          </main>
        </section>

        <section id="expertise">
          <HeaderSection 
            title="Experiência"
            desc="Ainda faltam muitas linhas de código"
            classTemplate={`${styles.col}`}
          />

          <Expertise 
            classTemplate={`${styles.col}`}
            data={expertise}
          />
        </section>

        <section id="skills">
          <HeaderSection 
            title="Habilidades"
            desc="Linguagens, ferramentas e soluções"
            classTemplate={`${styles.col}`}
          />

          <Skills 
            classTemplate={`${styles.col}`}
            data={skills}
          />
        </section>
        
        <section id="expirience">
          <HeaderSection 
            title="Experiência e Formação"
            desc="Lugares por onde passei, atuei e aprendi."
            classTemplate={`${styles.col}`}
          />

          <Experience 
            classTemplate={`${styles.col}`}
            data={experience}
          />
        </section>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
