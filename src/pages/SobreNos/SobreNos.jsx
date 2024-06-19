import React from 'react'
import styles from './SobreNos.module.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

const SobreNos = () => {
  const location = useLocation()  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.linha}`}>
          <div className={`${styles.linha} mb-1 pb-1`}>
            <h1 className={styles.sobreNosH1}>FAQ</h1>
            <Link to='/Faq' className={styles.sobreNosH2}>
              <h2>Clique Aqui para Acessar nosso Faq!</h2>
            </Link>
          </div>
        </div>
        <div className={styles.linha}>
          <h1 className={styles.sobreNosH1}>Nossos Serviços</h1>
          <div className={styles.miniDivisor}>
            <h2 className={styles.sobreNosH2}>Empregos</h2>
            <p className={styles.sobreNosP}>
              Mantenha-se atualizado com as últimas vagas de trabalho, oportunidades de carreira e <strong>tendências de mercado</strong> relevantes para profissionais em busca de novas oportunidades.
            </p>
            <img src="art_empregos.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div className={styles.miniDivisor}>
            <h2 className={styles.sobreNosH2}>Educação</h2>
            <p className={styles.sobreNosP}>
              Esteja atualizado sobre as tendências e novidades na área da educação, desde avanços na tecnologia educacional até e <strong>programas educacionais</strong> inovadores.
            </p>
            <img src="art_educacao.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div className={styles.miniDivisor}>
            <h2 className={styles.sobreNosH2}>Esportes</h2>
            <p className={styles.sobreNosP}>
              Esteja no centro da <strong>ação esportiva</strong> com nosso serviço de divulgação de notícias esportivas e desfrute de uma experiência envolvente e informativa que o manterá à frente do jogo.
            </p>
            <img src="art_esportes.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div className={styles.miniDivisor}>
            <h2 className={styles.sobreNosH2}>Entretenimento</h2>
            <p className={styles.sobreNosP}>
              Mantenha-se atualizado sobre lançamentos de <strong>filmes e séries</strong> e até mesmo <strong>shows e concertos</strong> exibidos na região, trazemos informações exclusivas, entrevistas com artistas, críticas e recomendações para que você.
            </p>
            <img src="art_entretenimento.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div className={`${styles.miniDivisor} m-0`}>
            <h2 className={styles.sobreNosH2}>Economia</h2>
            <p className={styles.sobreNosP}>
              Descubra insights valiosos e navegue pelo <strong>mundo dos negócios</strong> com confiança e conhecimento. Seja você um investidor, empreendedor ou profissional buscando compreender os desafios e oportunidades da economia atual, nosso serviço é a sua fonte confiável de informações.
            </p>
            <img src="art_economia.svg" alt="Nossa equipe" className={styles.image} />
          </div>
        </div>
        <div className={`${styles.linha}`}>
          <h1 className={styles.sobreNosH1}>Nossa Equipe</h1>
          <ul className={`${styles.sobreNosUl} m-0`}>
            <li className={styles.miniDivisor}>
              <h2 className={styles.sobreNosH2}>Carlos Ramos - Desenvolvedor</h2>
              <img src="carlos.jpg" alt="Carlos Ramos" className={styles.image2} />
              <p className={styles.sobreNosP}>Tenho 19 anos, e atualmente estou cursando faculdade de desenvolvimento de software.</p>
              <div className='text-center m-0 p-0'>
                <p className={`${styles.sobreNosP} mb-0`}>
                  Entre em Contato:
                </p>
                <ul className={styles.sobreNosUl}>
                  <li>
                    <a href='mailto:botelhoramos01@gmail.com' target='_blank' className={styles.sobreNosP}>E-mail</a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/carlos-eduardo-ramos-422985265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className={styles.sobreNosP}>Linkedin</a>
                  </li>
                  <li>
                    <a href='https://github.com/carloosramos' target='_blank' className={styles.sobreNosP}>GitHub</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.miniDivisor}>
              <h2 className={styles.sobreNosH2}>Gabriel Fecchio - Desenvolvedor</h2>
              <img src="gabriel.jpg" alt="Gabriel Fecchio" className={styles.image2} />
              <p className={styles.sobreNosP}>
                Tenho 19 anos, sou formado como técnico em administração e atualmente estou cursando faculdade de desenvolvimento de software.
              </p>
              <div className='text-center m-0 p-0'>
                <p className={`${styles.sobreNosP} mb-0`}>
                  Entre em Contato:
                </p>
                <ul className={styles.sobreNosUl}>
                  <li>
                    <a href='mailto:gabriellarocca0@gmail.com' target='_blank' className={styles.sobreNosP}>E-mail</a>
                  </li>
                  <li>
                    <a href='https://linkedin.com/in/gabriel-f-p-larocca/' target='_blank' className={styles.sobreNosP}>Linkedin</a>
                  </li>
                  <li>
                    <a href='https://github.com/GabrielFePL' target='_blank' className={styles.sobreNosP}>GitHub</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.miniDivisor}>
              <h2 className={styles.sobreNosH2}>Lucas Malachias - Desenvolvedor</h2>
              <img src="lucas.jpg" alt="Lucas Malachias" className={styles.image2} />
              <p className={styles.sobreNosP}>
                Tenho 22 anos, estou cursando desenvolvimento de software multiplataforma na Fatec Matão.
              </p>
              <div className='text-center m-0 p-0'>
                <p className={`${styles.sobreNosP} mb-0`}>
                  Entre em Contato:
                </p>
                <ul className={styles.sobreNosUl}>
                  <li>
                    <a href='mailto:contato.lmvieira@gmail.com' target='_blank' className={styles.sobreNosP}>E-mail</a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/lucas-malachias-vieira-066856288/' target='_blank' className={styles.sobreNosP}>Linkedin</a>
                  </li>
                  <li>
                    <a href='https://github.com/LMVieira2' target='_blank' className={styles.sobreNosP}>GitHub</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${styles.miniDivisor} m-0`}>
              <h2 className={styles.sobreNosH2}>Sophia Tavares - Scrum Master</h2>
              <img src="sophia.jpg" alt="Sophia Tavares" className={styles.image2} />
              <p className={styles.sobreNosP}>
                Tenho 19 anos, sou formada como técnico em administração e atualmente estou cursando faculdade de desenvolvimento de software.
              </p>
              <div className='text-center m-0 p-0'>
                <p className={`${styles.sobreNosP} mb-0`}>
                  Entre em Contato:
                </p>
                <ul className={styles.sobreNosUl}>
                  <li>
                    <a href='mailto:contato.lmvieira@gmail.com' target='_blank' className={styles.sobreNosP}>E-mail</a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/lucas-malachias-vieira-066856288/' target='_blank' className={styles.sobreNosP}>Linkedin</a>
                  </li>
                  <li>
                    <a href='https://github.com/LMVieira2' target='_blank' className={styles.sobreNosP}>GitHub</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SobreNos;
