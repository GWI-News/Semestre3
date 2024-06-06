import React from 'react';
import styles from './SobreNos.module.css';

const SobreNos = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.linha}>
          <h1 className={styles.sobreNosH1}>Conheça a Nossa Identidade, Equipe e Serviços!</h1>
          <p className={styles.sobreNosP}>Somos um portal de notícias regional comprometido em fornecer informações precisas, relevantes e atualizadas sobre os acontecimentos locais.
            Nossa equipe dedicada de jornalistas busca trazer coberturas abrangentes, incluindo notícias locais, eventos culturais, esportes e muito mais.
            Valorizamos a nossa comunidade e nos esforçamos para trazer uma perspectiva única e aprofundada sobre os assuntos que impactam a região.
            Nosso objetivo é ser uma fonte confiável de informação, promovendo a conscientização e o engajamento dos nossos leitores.
            Estamos comprometidos em contar as histórias que importam para a nossa comunidade e em fornecer um serviço de qualidade para mantê-los informados.</p>

          <h2 className={styles.sobreNosH2}>Missão</h2>
          <p className={styles.sobreNosP}>Nosso objetivo na GWI News é fornecer informações precisas, imparciais e relevantes sobre os acontecimentos locais.
            Estamos comprometidos em manter nossa comunidade regional informada, promovendo a transparência e o acesso à informação.
            Buscamos contar histórias impactantes, dar voz aos diversos segmentos da sociedade e contribuir para o desenvolvimento e engajamento da nossa região.</p>

          <h2 className={styles.sobreNosH2}>Visão</h2>
          <p className={styles.sobreNosP}>Nossa visão na GWI News é ser o principal portal de notícias regional, reconhecido pela excelência na cobertura jornalística e pela relevância das histórias que contamos.
            Almejamos ser uma fonte confiável de informação, estabelecendo uma relação de proximidade e confiança com nossos leitores.
            Buscamos nos adaptar às novas tendências e tecnologias, expandindo nosso alcance e impacto para melhor atender a comunidade regional</p>

          <h2 className={styles.sobreNosH2}>Valores</h2>
          <p className={styles.sobreNosP}>GWI News valoriza a ética, a imparcialidade e a veracidade dos fatos. Nosso compromisso com a integridade jornalística é fundamental para fornecer informações confiáveis e construir a confiança de nossos leitores.
            Além disso, valorizamos a diversidade de opiniões e a liberdade de expressão, promovendo o diálogo e o debate construtivo.
            Nossos valores também incluem o respeito pela comunidade e a responsabilidade social, buscando sempre trazer uma perspectiva positiva e inspiradora para o desenvolvimento da nossa região.</p>
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
          <h1 className={styles.sobreNosH1}>Nossos Serviços</h1>
          <div>
            <h2 className={styles.sobreNosH2}>Empregos</h2>
            <p className={styles.sobreNosP}>Descubra oportunidades profissionais com nosso serviço de divulgação de notícias de empregos.
              Mantenha-se atualizado com as últimas vagas de trabalho, oportunidades de carreira e tendências do mercado de trabalho com uma ampla gama de setores cobertos, desde tecnologia a finanças, saúde a marketing, oferecemos informações relevantes para profissionais em busca de novas oportunidades.
              Nossa equipe de especialistas compartilha as melhores vagas disponíveis, além de fornecer dicas úteis sobre currículos, entrevistas e desenvolvimento profissional.
              Esteja um passo à frente na busca por emprego com nosso serviço de divulgação de notícias de emprego e transforme sua carreira de forma positiva.</p>
            <img src="art_empregos.svg" alt="Nossa equipe" className={styles.image} />
          </div>

          <div>
            <h2 className={styles.sobreNosH2}>Educação</h2>
            <p className={styles.sobreNosP}>Esteja atualizado sobre as últimas tendências e novidades na área da educação, desde avanços na tecnologia educacional até políticas e programas educacionais inovadores.
              Nossa equipe de especialistas em educação traz informações abrangentes sobre instituições de ensino, cursos, bolsas de estudo e eventos educacionais.
              Quer você seja um estudante em busca de orientação sobre escolhas acadêmicas, um profissional buscando aprimorar suas habilidades ou um educador em busca de recursos e estratégias, nosso serviço oferece insights valiosos e inspiração para impulsionar sua jornada educacional</p>
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
      </div>
    </>
  );
}

export default SobreNos;
