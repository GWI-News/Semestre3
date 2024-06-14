import React from 'react'
import styles from './SobreNos.module.css'

import { Link } from 'react-router-dom'

const SobreNos = () => {
  return (
    <>
      <div className={styles.container}>
        <div div className={styles.linha}>
          <h1 className={styles.sobreNosH1}>Nossos Serviços</h1>
          <div>
            <h2 className={styles.sobreNosH2}>Empregos</h2>
            <p className={styles.sobreNosP}>
              Mantenha-se atualizado com as últimas vagas de trabalho, oportunidades de carreira e <strong>tendências de mercado</strong> relevantes para profissionais em busca de novas oportunidades.
              Nossa equipe de especialistas compartilha as <strong>melhores vagas</strong> disponíveis, além de fornecer dicas úteis sobre currículos, entrevistas e <strong>desenvolvimento profissional</strong>.
            </p>
            <img src="art_empregos.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div>
            <h2 className={styles.sobreNosH2}>Educação</h2>
            <p className={styles.sobreNosP}>
              Esteja atualizado sobre as tendências e novidades na área da educação, desde avanços na <strong>tecnologia educacional</strong> até e programas educacionais inovadores.
            </p>
            <img src="art_educacao.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div>
            <h2 className={styles.sobreNosH2}>Esportes</h2>
            <p className={styles.sobreNosP}>Descubra o mundo emocionante do esporte com o nosso serviço de divulgação de notícias esportivas do Portal de Notícias!
              Mantenha-se atualizado com as últimas informações, resultados, análises e destaques dos principais eventos esportivos em todo o mundo. De futebol a basquete, tênis a corrida, cobrimos uma ampla variedade de esportes para satisfazer todos os gostos e interesses.
              Com uma equipe de jornalistas especializados, trazemos a você coberturas abrangentes, entrevistas exclusivas e análises aprofundadas para que você não perca nenhum lance importante.
              Esteja no centro da ação esportiva com nosso serviço de divulgação de notícias esportivas e desfrute de uma experiência envolvente e informativa que o manterá à frente do jogo.</p>
            <img src="art_esportes.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div>
            <h2 className={styles.sobreNosH2}>Entretenimento</h2>
            <p className={styles.sobreNosP}>Mantenha-se atualizado de lançamentos de filmes e séries a shows e concertos, trazemos informações exclusivas, entrevistas com artistas, críticas e recomendações para que você nunca perca os acontecimentos mais quentes do mundo do entretenimento.
              Quer você seja um cinéfilo, um aficionado por música ou um fã de cultura pop, nosso serviço oferece uma dose diária de diversão e inspiração. Esteja sempre à frente das tendências e mergulhe no emocionante universo do entretenimento com nosso serviço de divulgação de notícias de entretenimento.
              Prepare-se para se divertir e explorar um mundo de possibilidades!</p>
            <img src="art_entretenimento.svg" alt="Nossa equipe" className={styles.image} />
          </div>
          <div>
            <h2 className={styles.sobreNosH2}>Economia</h2>
            <p className={styles.sobreNosP}>Nossa equipe de especialistas em economia traz análises aprofundadas, informações sobre empresas, relatórios de mercado e cobertura de eventos que afetam o cenário econômico.
              Seja você um investidor, empreendedor ou profissional buscando compreender os desafios e oportunidades da economia atual, nosso serviço oferece uma visão abrangente e confiável para ajudá-lo a tomar decisões informadas.
              Esteja à frente das mudanças econômicas e maximize seu potencial financeiro com nosso serviço de divulgação de notícias de economia.
              Descubra insights valiosos e navegue pelo mundo dos negócios com confiança e conhecimento.</p>
            <img src="art_economia.svg" alt="Nossa equipe" className={styles.image} />
          </div>
        </div>
        <div className={styles.linha}>
          <h1 className={styles.sobreNosH1}>Nossa Equipe</h1>
          <ul className={styles.sobreNosUl}>
            <li>
              <img src="carlos.jpg" alt="Carlos Ramos" className={styles.image2} />
              <p className={styles.sobreNosP}><strong>Carlos Ramos - Desenvolvedor</strong></p>
              <p className={styles.sobreNosP}>informações do carlos informações do carlos informações do carlos informações do carlos informações do carlos informações do carlos</p>
            </li>
            <li>
              <img src="gabriel.jpg" alt="Gabriel Fecchio" className={styles.image2} />
              <p className={styles.sobreNosP}><strong>Gabriel Fecchio - Desenvolvedor</strong></p>
              <p className={styles.sobreNosP}>informações do gabriel informações do gabriel informações do gabriel informações do gabriel informações do gabriel informações do gabriel</p>
            </li>
            <li>
              <img src="lucas.jpg" alt="Lucas Malachias" className={styles.image2} />
              <p className={styles.sobreNosP}><strong>Lucas Malachias - Desenvolvedor</strong></p>
              <p className={styles.sobreNosP}>informações do lucas informações do lucas informações do lucas informações do lucas informações do lucas informações do lucas</p>
            </li>
            <li>
              <img src="sophia.jpg" alt="Sophia Tavares" className={styles.image2} />
              <p className={styles.sobreNosP}><strong>Sophia Tavares - Desenvolvedora e Scrum Master</strong></p>
              <p className={styles.sobreNosP}>informações da sophia informações da sophia informações da sophia informações da sophia informações da sophia informações da sophia</p>
            </li>
          </ul>
        </div>
        <div>
          <Link to='/Faq' className={styles.sobreNosH2}>
            <h2>Clique Aqui para Acessar nosso Faq!</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SobreNos;
