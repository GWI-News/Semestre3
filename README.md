# Semestre3
Repositório para desenvolvimento do software GWI News, para o cumprimento do Projeto Transdisciplinar do curso Desenvolvimento de Software Multiplataforma, na faculdade Fatec Matão - Luiz Marchesan.

# Tarefas de Melhorias como Avaliação [11/06/2024] 
(As Sugestões de Códigos São Geradas para guiar exemplos não são implementações prontas. As utilize como guias de introdução)

### Tarefas de Melhoria

#### 1. Atualização dos Componentes Visuais (3 pontos)
**Descrição:** Atualizar os estilos dos botões em toda a aplicação para utilizar o framework Bootstrap, garantindo uma aparência mais moderna e consistente.

**Exemplo de Código:**
```jsx
// Antes
<button className="btn-old-style">Enviar</button>

// Depois
import 'bootstrap/dist/css/bootstrap.min.css';

<button className="btn btn-primary">Enviar</button>
```

#### 2. Implementação de Tooltips (3 pontos)
**Descrição:** Adicionar tooltips aos ícones de navegação para melhorar a acessibilidade e a experiência do usuário.

**Exemplo de Código:**
```jsx
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Página Inicial
  </Tooltip>
);

<OverlayTrigger placement="top" overlay={renderTooltip}>
  <i className="icon-home"></i>
</OverlayTrigger>
```

#### 3. Redesign da Barra de Navegação (3 pontos)
**Descrição:** Redesenhar a barra de navegação para torná-la responsiva e visualmente atraente usando componentes do Bootstrap.

**Exemplo de Código:**
```jsx
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">GWI-News</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
```

#### 4. Configuração do Ambiente de Deploy com GitHub Actions (8 pontos)
**Descrição:** Configurar GitHub Actions para automação de deploy no Firebase, garantindo uma integração contínua eficiente.

**Exemplo de Código:**
```yaml
name: Firebase Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build

    - name: Deploy to Firebase
      uses: w9jds/firebase-action@v1.4.0
      with:
        args: deploy
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

#### 5. Implementação de Área de Usuário (13 pontos)
**Descrição:** Criar uma área de perfil de usuário onde os usuários podem atualizar suas informações pessoais e visualizar seu histórico de atividades.

**Exemplo de Código:**
```jsx
import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from './api';

const UserProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getUserProfile().then(data => setProfile(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = () => {
    updateUserProfile(profile);
  };

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <input
        type="text"
        name="name"
        value={profile.name || ''}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Atualizar</button>
    </div>
  );
};
```

#### 6. Gerenciamento de Clains de Usuários (21 pontos)
**Descrição:** Implementar a gestão de clains de usuários para permitir permissões e acessos diferenciados dentro da aplicação.

**Exemplo de Código:**
```javascript
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const claims = userDoc.data().claims;
    if (claims.admin) {
      // Grant admin access
    } else {
      // Regular user access
    }
  }
});
```

#### 7. Integração com Firebase Analytics (34 pontos)
**Descrição:** Integrar Firebase Analytics para rastrear e analisar o comportamento do usuário dentro da aplicação.

**Exemplo de Código:**
```javascript
import { getAnalytics, logEvent } from 'firebase/analytics';

const analytics = getAnalytics();

logEvent(analytics, 'notification_received');
```

#### 8. Implementação de Visão de Dashboard (55 pontos)
**Descrição:** Criar um dashboard administrativo para visualizar métricas chave como número de usuários ativos, clains e interações com a plataforma.

**Exemplo de Código:**
```jsx
import React, { useState, useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'metrics'));
      let data = {};
      querySnapshot.forEach((doc) => {
        data = { ...data, ...doc.data() };
      });
      setMetrics(data);
    };
    fetchData();
  }, [db]);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>Total de Usuários Ativos: {metrics.activeUsers}</div>
      <div>Interações Totais: {metrics.totalInteractions}</div>
    </div>
  );
};

export default Dashboard;
```

#### 9. Uso do Firebase-Tools para Gerenciamento de Ambientes (21 pontos)
**Descrição:** Configurar e utilizar Firebase-Tools para gerenciar diferentes ambientes (desenvolvimento, staging, produção).

**Exemplo de Código:**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Configurar ambientes
firebase use --add
# Escolher alias e ID do projeto
# Exemplo:
# - development: projeto-dev
# - staging: projeto-staging
# - production: projeto-prod

# Deploy para o ambiente especificado
firebase deploy --only hosting --project projeto-dev
```

#### 10. Implementação de Notificações Push (34 pontos)
**Descrição:** Integrar notificações push para enviar atualizações importantes aos usuários, utilizando Firebase Cloud Messaging.

**Exemplo de Código:**
```javascript
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const messaging = getMessaging();

getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' }).then((currentToken) => {
  if (currentToken) {
    console.log('Token received: ', currentToken);
    // Enviar o token ao servidor
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Custom logic to handle the message
});
```
### Tarefas de Melhoria - Continuação

#### 11. Implementação de Modal de Confirmação (3 pontos)
**Descrição:** Adicionar um modal de confirmação para ações críticas, como exclusão de dados, para evitar ações acidentais.

**Exemplo de Código:**
```jsx
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, handleClose, handleConfirm }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Confirmar Ação</Modal.Title>
    </Modal.Header>
    <Modal.Body>Você tem certeza que deseja realizar esta ação?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirmar
      </Button>
    </Modal.Footer>
  </Modal>
);

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    // Ação confirmada
    handleClose();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Deletar
      </Button>
      <ConfirmModal show={show} handleClose={handleClose} handleConfirm={handleConfirm} />
    </>
  );
};
```

#### 12. Adição de Carregamento em Formulários (3 pontos)
**Descrição:** Implementar indicadores de carregamento em formulários para melhorar a experiência do usuário durante a submissão de dados.

**Exemplo de Código:**
```jsx
import { useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';

const SubmitForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulação de envio de dados
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" required />
      <Button type="submit" disabled={loading}>
        {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Enviar'}
      </Button>
    </form>
  );
};
```

#### 13. Melhoria na Responsividade da Página Principal (3 pontos)
**Descrição:** Melhorar a responsividade da página principal utilizando a grid do Bootstrap para garantir que todos os elementos sejam exibidos corretamente em diferentes dispositivos.

**Exemplo de Código:**
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => (
  <Container>
    <Row>
      <Col md={8}>Conteúdo Principal</Col>
      <Col md={4}>Barra Lateral</Col>
    </Row>
  </Container>
);
```

#### 14. Otimização da Performance da Aplicação (8 pontos)
**Descrição:** Implementar técnicas de lazy loading para componentes pesados, reduzindo o tempo de carregamento inicial da aplicação.

**Exemplo de Código:**
```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <HeavyComponent />
  </Suspense>
);
```

#### 15. Criação de Página de Erro 404 Personalizada (13 pontos)
**Descrição:** Desenvolver uma página de erro 404 personalizada para melhorar a experiência do usuário quando ele tenta acessar uma página inexistente.

**Exemplo de Código:**
```jsx
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center">
    <h1>404</h1>
    <p>Página não encontrada</p>
    <Link to="/">Voltar para Home</Link>
  </div>
);
```

#### 16. Implementação de Autenticação de Dois Fatores (21 pontos)
**Descrição:** Adicionar autenticação de dois fatores para melhorar a segurança da conta do usuário.

**Exemplo de Código:**
```javascript
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

const auth = getAuth();
const actionCodeSettings = {
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  handleCodeInApp: true,
};

sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch((error) => {
    console.error('Erro ao enviar link de autenticação:', error);
  });
```

#### 17. Implementação de Testes Automatizados com Jest (34 pontos)
**Descrição:** Configurar e implementar testes automatizados utilizando Jest para garantir a qualidade do código e funcionalidade da aplicação.

**Exemplo de Código:**
```javascript
// Install Jest
// npm install --save-dev jest

// Exemplo de teste básico
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

#### 18. Integração com Firebase Functions (55 pontos)
**Descrição:** Integrar Firebase Functions para executar lógica de back-end de forma escalável e segura, como envio de emails e processamento de pagamentos.

**Exemplo de Código:**
```javascript
// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email;
  const displayName = user.displayName;

  // Lógica para enviar email de boas-vindas
});
```

#### 19. Implementação de Log de Atividades do Usuário (21 pontos)
**Descrição:** Criar um log de atividades para rastrear ações importantes do usuário dentro da aplicação, ajudando na auditoria e solução de problemas.

**Exemplo de Código:**
```javascript
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

const logUserActivity = async (userId, activity) => {
  await setDoc(doc(db, 'userActivities', userId), {
    activity,
    timestamp: new Date(),
  });
};

// Chamar a função ao realizar uma ação importante
logUserActivity('user123', 'Login realizado');
```

#### 20. Implementação de Testes E2E com Cypress (34 pontos)
**Descrição:** Configurar e implementar testes de ponta a ponta (E2E) utilizando Cypress para garantir a funcionalidade completa do sistema em um ambiente de produção simulado.

**Exemplo de Código:**
```javascript
// Install Cypress
// npm install cypress --save-dev

// cypress/integration/sample_spec.js
describe('Login Page', () => {
  it('should allow a user to log in', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('user@example.com');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});
```
### Tarefas de Melhoria - Continuação

#### 21. Implementação de Tema Escuro (3 pontos)
**Descrição:** Adicionar a opção de tema escuro à aplicação para melhorar a acessibilidade e a experiência do usuário em ambientes com pouca luz.

**Exemplo de Código:**
```jsx
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
};

// CSS
// .dark-mode {
//   background-color: #121212;
//   color: #ffffff;
// }
```

#### 22. Adição de Página de Sobre (3 pontos)
**Descrição:** Criar uma página "Sobre" para fornecer informações sobre a aplicação e a equipe de desenvolvimento.

**Exemplo de Código:**
```jsx
const AboutPage = () => (
  <div>
    <h1>Sobre Nós</h1>
    <p>Informações sobre a aplicação e a equipe.</p>
  </div>
);

// Adicionar rota
// <Route path="/about" component={AboutPage} />
```

#### 23. Implementação de Feedback Visual para Campos Obrigatórios (3 pontos)
**Descrição:** Adicionar feedback visual para campos obrigatórios em formulários, melhorando a usabilidade e acessibilidade.

**Exemplo de Código:**
```jsx
import { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" className={submitted && !name ? 'error' : ''} required />
      <button type="submit">Enviar</button>
    </form>
  );
};

// CSS
// .error {
//   border-color: red;
// }
```

#### 24. Implementação de Filtro de Conteúdo (8 pontos)
**Descrição:** Adicionar funcionalidades de filtragem de conteúdo na página de notícias para permitir que os usuários encontrem artigos específicos facilmente.

**Exemplo de Código:**
```jsx
import { useState } from 'react';

const NewsPage = ({ articles }) => {
  const [filter, setFilter] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar notícias"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredArticles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

#### 25. Implementação de Carrossel de Imagens na Página Principal (13 pontos)
**Descrição:** Adicionar um carrossel de imagens na página principal para destacar as principais notícias.

**Exemplo de Código:**
```jsx
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src="image1.jpg" alt="First slide" />
      <Carousel.Caption>
        <h3>Primeiro Slide</h3>
        <p>Descrição do primeiro slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="image2.jpg" alt="Second slide" />
      <Carousel.Caption>
        <h3>Segundo Slide</h3>
        <p>Descrição do segundo slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
```

#### 26. Configuração de Logs Centralizados (21 pontos)
**Descrição:** Configurar logs centralizados usando Firebase Logging para monitorar e depurar problemas na aplicação.

**Exemplo de Código:**
```javascript
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();

const logError = httpsCallable(functions, 'logError');

const logClientError = (message) => {
  logError({ message })
    .then(() => console.log('Error logged successfully'))
    .catch((error) => console.error('Error logging:', error));
};

// Firebase Function
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.logError = functions.https.onCall((data, context) => {
  const message = data.message;
  console.error('Client Error:', message);
});
```

#### 27. Implementação de Busca em Tempo Real (34 pontos)
**Descrição:** Implementar uma funcionalidade de busca em tempo real para permitir que os usuários encontrem conteúdos de forma rápida e eficiente.

**Exemplo de Código:**
```jsx
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const RealTimeSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    if (query.trim()) {
      const q = query(
        collection(db, 'articles'),
        where('title', '>=', query),
        where('title', '<=', query + '\uf8ff')
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const articles = [];
        querySnapshot.forEach((doc) => {
          articles.push(doc.data());
        });
        setResults(articles);
      });

      return () => unsubscribe();
    }
  }, [query, db]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

#### 28. Integração com Firebase Remote Config (55 pontos)
**Descrição:** Utilizar Firebase Remote Config para permitir atualizações dinâmicas de configurações sem precisar fazer deploys completos.

**Exemplo de Código:**
```javascript
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const remoteConfig = getRemoteConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 3600000; // 1 hora

fetchAndActivate(remoteConfig)
  .then(() => {
    const welcomeMessage = getValue(remoteConfig, 'welcome_message').asString();
    console.log('Welcome message:', welcomeMessage);
  })
  .catch((error) => console.error('Error fetching remote config:', error));
```

#### 29. Implementação de Testes de Performance com Lighthouse (34 pontos)
**Descrição:** Configurar e executar testes de performance utilizando Lighthouse para identificar e corrigir problemas de desempenho.

**Exemplo de Código:**
```json
// package.json
{
  "scripts": {
    "lighthouse": "lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json"
  }
}

// Executar o teste
// npm run lighthouse
```

#### 30. Implementação de Acompanhamento de Progresso de Leitura (21 pontos)
**Descrição:** Adicionar uma barra de progresso para indicar ao usuário quanto falta para concluir a leitura de um artigo.

**Exemplo de Código:**
```jsx
import { useState, useEffect } from 'react';

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const handleScroll = () => {
    const element = document.getElementById(target);
    if (!element) return;

    const totalHeight = element.clientHeight - window.innerHeight;
    const windowScrollTop = window.scrollY;
    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }
    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }}></div>
  );
};

export default ReadingProgress;

// CSS
// .reading-progress-bar {
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 4px;
//   background-color: #29d;
//   z-index: 99;
// }
```
### Tarefas de Melhoria - Continuação

#### 31. Implementação de Favoritos para Artigos (3 pontos)
**Descrição:** Adicionar funcionalidade para que os usuários possam marcar artigos como favoritos e acessá-los facilmente em uma seção dedicada.

**Exemplo de Código:**
```jsx
import { useState } from 'react';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';

const db = getFirestore();

const Article = ({ article, user }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = async () => {
    await updateDoc(doc(db, 'users', user.uid), {
      favorites: arrayUnion(article.id)
    });
    setIsFavorited(true);
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <button onClick={handleFavorite} disabled={isFavorited}>
        {isFavorited ? 'Favoritado' : 'Favoritar'}
      </button>
    </div>
  );
};
```

#### 32. Implementação de Comentários em Artigos (13 pontos)
**Descrição:** Adicionar sistema de comentários em artigos para permitir a interação dos usuários com o conteúdo e entre si.

**Exemplo de Código:**
```jsx
import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';

const db = getFirestore();

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'comments'), where('articleId', '==', articleId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        commentsData.push(doc.data());
      });
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [articleId, db]);

  const handleSubmit = async () => {
    await addDoc(collection(db, 'comments'), {
      articleId,
      text: newComment,
      createdAt: new Date()
    });
    setNewComment('');
  };

  return (
    <div>
      <h3>Comentários</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleSubmit}>Comentar</button>
    </div>
  );
};
```

#### 33. Adição de Animações com React Spring (8 pontos)
**Descrição:** Adicionar animações a elementos interativos utilizando React Spring para melhorar a experiência visual.

**Exemplo de Código:**
```jsx
import { useSpring, animated } from 'react-spring';

const AnimatedButton = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return <animated.button style={props}>Clique Aqui</animated.button>;
};
```

#### 34. Implementação de Modo Offline com Workbox (21 pontos)
**Descrição:** Adicionar suporte para modo offline utilizando Workbox para garantir que os usuários possam acessar o conteúdo mesmo sem conexão à internet.

**Exemplo de Código:**
```javascript
// service-worker.js
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

// Precache files
precacheAndRoute(self.__WB_MANIFEST);

// Cache API requests
registerRoute(
  ({ url }) => url.origin === 'https://api.example.com',
  new StaleWhileRevalidate()
);

// Cache CSS and JS files
registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate()
);
```

#### 35. Integração com Google Analytics (13 pontos)
**Descrição:** Integrar Google Analytics para monitorar o uso da aplicação e obter insights sobre o comportamento do usuário.

**Exemplo de Código:**
```javascript
import ReactGA from 'react-ga';

// Inicializar Google Analytics
ReactGA.initialize('UA-000000-01');

// Registrar uma página visualizada
ReactGA.pageview(window.location.pathname + window.location.search);
```

#### 36. Implementação de Sistema de Notificações (21 pontos)
**Descrição:** Implementar um sistema de notificações para alertar os usuários sobre novos artigos e atualizações importantes.

**Exemplo de Código:**
```jsx
import { useEffect } from 'react';
import { getMessaging, onMessage } from 'firebase/messaging';

const messaging = getMessaging();

const Notifications = () => {
  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Mostrar notificação ao usuário
    });
  }, []);

  return <div>Notificações configuradas</div>;
};
```

#### 37. Criação de Página de FAQ (3 pontos)
**Descrição:** Desenvolver uma página de FAQ para responder às perguntas mais frequentes dos usuários e melhorar o suporte ao cliente.

**Exemplo de Código:**
```jsx
const FAQPage = () => (
  <div>
    <h1>Perguntas Frequentes</h1>
    <ul>
      <li>Como faço para resetar minha senha?</li>
      <li>Como posso contatar o suporte?</li>
    </ul>
  </div>
);

// Adicionar rota
// <Route path="/faq" component={FAQPage} />
```

#### 38. Implementação de Paginação em Listas de Artigos (13 pontos)
**Descrição:** Adicionar paginação em listas de artigos para melhorar a navegação e desempenho da página.

**Exemplo de Código:**
```jsx
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, limit, startAfter } from 'firebase/firestore';

const db = getFirestore();

const PaginatedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'articles'), orderBy('createdAt'), limit(10));
      const querySnapshot = await getDocs(q);
      const articlesData = [];
      querySnapshot.forEach((doc) => {
        articlesData.push(doc.data());
      });
      setArticles(articlesData);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };

    fetchData();
  }, [db]);

  const fetchMore = async () => {
    const q = query(
      collection(db, 'articles'),
      orderBy('createdAt'),
      startAfter(lastDoc),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    const articlesData = [];
    querySnapshot.forEach((doc) => {
      articlesData.push(doc.data());
    });
    setArticles([...articles, ...articlesData]);
    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <button onClick={fetchMore}>Carregar mais</button>
    </div>
  );
};
```

#### 39. Configuração de Testes A/B com Firebase (21 pontos)
**Descrição:** Implementar testes A/B utilizando Firebase para avaliar diferentes versões de funcionalidades e design.

**Exemplo de Código:**
```javascript
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const remoteConfig = getRemoteConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

fetchAndActivate(remoteConfig)
  .then(() => {
    const variant = getValue(remoteConfig, 'experiment_variant').asString();
    if (variant === 'A') {
      // Mostrar versão A
    } else {
      // Mostrar versão B
    }
  })
  .catch((error) => console.error('Error fetching remote config:', error));
```

#### 40. Implementação de Dashboard de Relatórios com Gráficos (34 pontos)
**Descrição:** Desenvolver um dashboard de relatórios com gráficos interativos utilizando Chart.js para visualizar métricas importantes.

**Exemplo de Código:**
```jsx
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

const ReportsDashboard = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'metrics'));
      const labels = [];
      const values = [];
      querySnapshot.forEach((doc) => {
        labels.push(doc.data().label);
        values.push(doc.data().value);
      });
      setData({
        labels,
        datasets: [
          {
            label: 'Métricas',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
       

 ],
      });
    };

    fetchData();
  }, [db]);

  return <Bar data={data} />;
};

export default ReportsDashboard;
```

