# Semestre3
Repositório para desenvolvimento do software GWI News, para o cumprimento do Projeto Transdisciplinar do curso Desenvolvimento de Software Multiplataforma, na faculdade Fatec Matão - Luiz Marchesan.

# Tarefas de Melhorias como Avaliação [11/06/2024] (As Sugestões de Códigos São Geradas para guiar exemplos não são implementações prontas. As utilize como guias de introdução)

### Tarefas de 3 Pontos (Alterações de Componentes Visuais)

1. **Melhoria do Layout da Página Inicial**
   - Ajustar o layout da página inicial para melhorar a usabilidade.

   ```jsx
   import React from 'react';
   import './HomePage.css';

   const HomePage = () => (
     <div className="home-container">
       <h1>Welcome to GWI News</h1>
       <p>Latest news updates</p>
     </div>
   );

   export default HomePage;
   ```

2. **Atualização do Componente de Botão**
   - Atualizar o componente de botão para seguir o novo padrão de design.

   ```jsx
   import React from 'react';
   import './Button.css';

   const Button = ({ label, onClick }) => (
     <button className="custom-button" onClick={onClick}>
       {label}
     </button>
   );

   export default Button;
   ```

3. **Redesign do Formulário de Login**
   - Melhorar o formulário de login com novo estilo.

   ```jsx
   import React from 'react';
   import './LoginForm.css';

   const LoginForm = () => (
     <form className="login-form">
       <input type="email" placeholder="Email" />
       <input type="password" placeholder="Password" />
       <button type="submit">Login</button>
     </form>
   );

   export default LoginForm;
   ```

### Tarefas de 5 Pontos (Pequenas Funcionalidades)

4. **Implementação de Tooltip em Botões**
   - Adicionar tooltips para melhorar a usabilidade dos botões.

   ```jsx
   import React from 'react';
   import './Button.css';
   import Tooltip from 'react-tooltip';

   const Button = ({ label, onClick }) => (
     <div>
       <button className="custom-button" onClick={onClick} data-tip={label}>
         {label}
       </button>
       <Tooltip place="top" type="dark" effect="solid" />
     </div>
   );

   export default Button;
   ```

5. **Adição de Placeholder em Campos de Formulário**
   - Incluir placeholders explicativos nos campos de formulário.

   ```jsx
   import React from 'react';
   import './ContactForm.css';

   const ContactForm = () => (
     <form className="contact-form">
       <input type="text" placeholder="Enter your name" />
       <input type="email" placeholder="Enter your email" />
       <textarea placeholder="Enter your message" />
       <button type="submit">Send</button>
     </form>
   );

   export default ContactForm;
   ```

### Tarefas de 8 Pontos (Integrações Simples)

6. **Integração com Serviço de Notícias**
   - Implementar integração com uma API de notícias para exibir as últimas atualizações.

   ```jsx
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const NewsFeed = () => {
     const [news, setNews] = useState([]);

     useEffect(() => {
       axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
         .then(response => setNews(response.data.articles));
     }, []);

     return (
       <div className="news-feed">
         {news.map((article, index) => (
           <div key={index} className="news-article">
             <h2>{article.title}</h2>
             <p>{article.description}</p>
           </div>
         ))}
       </div>
     );
   };

   export default NewsFeed;
   ```

### Tarefas de 13 Pontos (Funcionalidades Intermediárias)

7. **Implementação de Validação de Formulário**
   - Adicionar validação de campos em formulários para garantir a entrada correta de dados.

   ```jsx
   import React, { useState } from 'react';
   import './RegisterForm.css';

   const RegisterForm = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({});

     const validate = () => {
       const newErrors = {};
       if (!email.includes('@')) newErrors.email = 'Invalid email address';
       if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       if (validate()) {
         // Submit the form
       }
     };

     return (
       <form className="register-form" onSubmit={handleSubmit}>
         <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
         {errors.email && <span className="error">{errors.email}</span>}
         <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
         {errors.password && <span className="error">{errors.password}</span>}
         <button type="submit">Register</button>
       </form>
     );
   };

   export default RegisterForm;
   ```

### Tarefas de 21 Pontos (Funcionalidades Complexas)

8. **Criação de Painel de Controle do Usuário**
   - Desenvolver um painel de controle para que os usuários possam gerenciar suas informações e configurações.

   ```jsx
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';

   const Dashboard = () => {
     const [user, setUser] = useState(null);

     useEffect(() => {
       const unsubscribe = firebase.auth().onAuthStateChanged(user => {
         setUser(user);
       });
       return () => unsubscribe();
     }, []);

     if (!user) {
       return <div>Loading...</div>;
     }

     return (
       <div className="dashboard">
         <h1>Welcome, {user.displayName}</h1>
         <p>Email: {user.email}</p>
         {/* Additional user settings */}
       </div>
     );
   };

   export default Dashboard;
   ```

### Tarefas de 34 Pontos (Funcionalidades Avançadas)

9. **Implementação de Busca em Tempo Real com Firestore**
   - Adicionar funcionalidade de busca em tempo real utilizando Firestore.

   ```jsx
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/firestore';

   const Search = () => {
     const [query, setQuery] = useState('');
     const [results, setResults] = useState([]);

     useEffect(() => {
       if (query) {
         const unsubscribe = firebase.firestore()
           .collection('articles')
           .where('title', '>=', query)
           .where('title', '<=', query + '\uf8ff')
           .onSnapshot(snapshot => {
             setResults(snapshot.docs.map(doc => doc.data()));
           });
         return () => unsubscribe();
       }
     }, [query]);

     return (
       <div className="search">
         <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles" />
         <div className="search-results">
           {results.map((article, index) => (
             <div key={index} className="search-result">
               <h2>{article.title}</h2>
               <p>{article.content}</p>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default Search;
   ```

### Tarefas de 55 Pontos (Funcionalidades Muito Complexas)

10. **Implementação de Visão Dashboard com Gráficos Dinâmicos**
    - Desenvolver uma visão de dashboard que inclua gráficos dinâmicos utilizando dados do Firestore.

    ```jsx
    import React, { useEffect, useState } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import { Bar } from 'react-chartjs-2';

    const Dashboard = () => {
      const [data, setData] = useState({ labels: [], datasets: [] });

      useEffect(() => {
        const unsubscribe = firebase.firestore()
          .collection('analytics')
          .onSnapshot(snapshot => {
            const newData = snapshot.docs.map(doc => doc.data());
            const labels = newData.map(item => item.label);
            const values = newData.map(item => item.value);

            setData({
              labels,
              datasets: [
                {
                  label: 'User Activity',
                  data: values,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                },
              ],
            });
          });

        return () => unsubscribe();
      }, []);

      return (
        <div className="dashboard">
          <h1>Analytics Dashboard</h1>
          <Bar data={data} />
        </div>


### Tarefas de Melhoria para GWI-News

Para cada uma das tarefas, utilizaremos a sequência de Fibonacci variando entre 3 e 55 pontos. As tarefas envolvem desde pequenas melhorias em componentes visuais até implementações complexas, como a criação de dashboards dinâmicos e a comunicação com Firebase. 

#### Tarefas de 3 Pontos

11. **Melhoria do Layout da Página Inicial**
   - Ajustar o layout da página inicial para melhorar a usabilidade.
   
   ```jsx
   import React from 'react';
   import './HomePage.css';

   const HomePage = () => (
     <div className="home-container">
       <h1>Welcome to GWI News</h1>
       <p>Latest news updates</p>
     </div>
   );

   export default HomePage;
   ```

12. **Atualização do Componente de Botão**
   - Atualizar o componente de botão para seguir o novo padrão de design.
   
   ```jsx
   import React from 'react';
   import './Button.css';

   const Button = ({ label, onClick }) => (
     <button className="custom-button" onClick={onClick}>
       {label}
     </button>
   );

   export default Button;
   ```

13. **Redesign do Formulário de Login**
   - Melhorar o formulário de login com novo estilo.
   
   ```jsx
   import React from 'react';
   import './LoginForm.css';

   const LoginForm = () => (
     <form className="login-form">
       <input type="email" placeholder="Email" />
       <input type="password" placeholder="Password" />
       <button type="submit">Login</button>
     </form>
   );

   export default LoginForm;
   ```

#### Tarefas de 5 Pontos

14. **Implementação de Tooltip em Botões**
   - Adicionar tooltips para melhorar a usabilidade dos botões.
   
   ```jsx
   import React from 'react';
   import './Button.css';
   import Tooltip from 'react-tooltip';

   const Button = ({ label, onClick }) => (
     <div>
       <button className="custom-button" onClick={onClick} data-tip={label}>
         {label}
       </button>
       <Tooltip place="top" type="dark" effect="solid" />
     </div>
   );

   export default Button;
   ```

15. **Adição de Placeholder em Campos de Formulário**
   - Incluir placeholders explicativos nos campos de formulário.
   
   ```jsx
   import React from 'react';
   import './ContactForm.css';

   const ContactForm = () => (
     <form className="contact-form">
       <input type="text" placeholder="Enter your name" />
       <input type="email" placeholder="Enter your email" />
       <textarea placeholder="Enter your message" />
       <button type="submit">Send</button>
     </form>
   );

   export default ContactForm;
   ```

#### Tarefas de 8 Pontos

16. **Integração com Serviço de Notícias**
   - Implementar integração com uma API de notícias para exibir as últimas atualizações.
   
   ```jsx
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const NewsFeed = () => {
     const [news, setNews] = useState([]);

     useEffect(() => {
       axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
         .then(response => setNews(response.data.articles));
     }, []);

     return (
       <div className="news-feed">
         {news.map((article, index) => (
           <div key={index} className="news-article">
             <h2>{article.title}</h2>
             <p>{article.description}</p>
           </div>
         ))}
       </div>
     );
   };

   export default NewsFeed;
   ```

#### Tarefas de 13 Pontos

17. **Implementação de Validação de Formulário**
   - Adicionar validação de campos em formulários para garantir a entrada correta de dados.
   
   ```jsx
   import React, { useState } from 'react';
   import './RegisterForm.css';

   const RegisterForm = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({});

     const validate = () => {
       const newErrors = {};
       if (!email.includes('@')) newErrors.email = 'Invalid email address';
       if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       if (validate()) {
         // Submit the form
       }
     };

     return (
       <form className="register-form" onSubmit={handleSubmit}>
         <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
         {errors.email && <span className="error">{errors.email}</span>}
         <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
         {errors.password && <span className="error">{errors.password}</span>}
         <button type="submit">Register</button>
       </form>
     );
   };

   export default RegisterForm;
   ```

#### Tarefas de 21 Pontos

18. **Criação de Painel de Controle do Usuário**
   - Desenvolver um painel de controle para que os usuários possam gerenciar suas informações e configurações.
   
   ```jsx
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';

   const Dashboard = () => {
     const [user, setUser] = useState(null);

     useEffect(() => {
       const unsubscribe = firebase.auth().onAuthStateChanged(user => {
         setUser(user);
       });
       return () => unsubscribe();
     }, []);

     if (!user) {
       return <div>Loading...</div>;
     }

     return (
       <div className="dashboard">
         <h1>Welcome, {user.displayName}</h1>
         <p>Email: {user.email}</p>
         {/* Additional user settings */}
       </div>
     );
   };

   export default Dashboard;
   ```

#### Tarefas de 34 Pontos

19. **Implementação de Busca em Tempo Real com Firestore**
   - Adicionar funcionalidade de busca em tempo real utilizando Firestore.
   
   ```jsx
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/firestore';

   const Search = () => {
     const [query, setQuery] = useState('');
     const [results, setResults] = useState([]);

     useEffect(() => {
       if (query) {
         const unsubscribe = firebase.firestore()
           .collection('articles')
           .where('title', '>=', query)
           .where('title', '<=', query + '\uf8ff')
           .onSnapshot(snapshot => {
             setResults(snapshot.docs.map(doc => doc.data()));
           });
         return () => unsubscribe();
       }
     }, [query]);

     return (
       <div className="search">
         <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles" />
         <div className="search-results">
           {results.map((article, index) => (
             <div key={index} className="search-result">
               <h2>{article.title}</h2>
               <p>{article.content}</p>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default Search;
   ```

#### Tarefas de 55 Pontos

20. **Implementação de Visão Dashboard com Gráficos Dinâmicos**
    - Desenvolver uma visão de dashboard que inclua gráficos dinâmicos utilizando dados do Firestore.
    
    ```jsx
    import React, { useEffect, useState } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import { Bar } from 'react-chartjs-2';

    const Dashboard = () => {
      const [data, setData] = useState({ labels: [], datasets: [] });

      useEffect(() => {
        const unsubscribe = firebase.firestore()
          .collection('analytics')
          .onSnapshot(snapshot => {
            const newData = snapshot.docs.map(doc => doc.data());
            const labels = newData.map(item => item.label);
            const values = newData.map(item => item.value);

            setData({
              labels,
              datasets: [
                {
                  label: 'User Activity',
                  data: values,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                },
              ],
            });
          });

        return () => unsubscribe();
      }, []);

      return (
        <div className="dashboard">
          <h1>Analytics Dashboard</h1>
          <Bar data={data} />
        </div>
      );
    };

    export default Dashboard;
    ```

### Conclusão
Esta lista abrange

### Tarefas de Melhoria para GWI-News

Para cada uma das tarefas, utilizaremos a sequência de Fibonacci variando entre 3 e 55 pontos. As tarefas envolvem desde pequenas melhorias em componentes visuais até implementações complexas, como a criação de dashboards dinâmicos e a comunicação com Firebase.

#### Tarefas de 3 Pontos
21. **Melhoria do Layout da Página Inicial**
   - Ajustar o layout da página inicial para melhorar a usabilidade.

   ```jsx
   import React from 'react';
   import './HomePage.css';

   const HomePage = () => (
     <div className="home-container">
       <h1>Welcome to GWI News</h1>
       <p>Latest news updates</p>
     </div>
   );

   export default HomePage;
   ```

22. **Atualização do Componente de Botão**
   - Atualizar o componente de botão para seguir o novo padrão de design.

   ```jsx
   import React from 'react';
   import './Button.css';

   const Button = ({ label, onClick }) => (
     <button className="custom-button" onClick={onClick}>
       {label}
     </button>
   );

   export default Button;
   ```

23. **Redesign do Formulário de Login**
   - Melhorar o formulário de login com novo estilo.

   ```jsx
   import React from 'react';
   import './LoginForm.css';

   const LoginForm = () => (
     <form className="login-form">
       <input type="email" placeholder="Email" />
       <input type="password" placeholder="Password" />
       <button type="submit">Login</button>
     </form>
   );

   export default LoginForm;
   ```

#### Tarefas de 5 Pontos
24. **Implementação de Tooltip em Botões**
   - Adicionar tooltips para melhorar a usabilidade dos botões.

   ```jsx
   import React from 'react';
   import './Button.css';
   import Tooltip from 'react-tooltip';

   const Button = ({ label, onClick }) => (
     <div>
       <button className="custom-button" onClick={onClick} data-tip={label}>
         {label}
       </button>
       <Tooltip place="top" type="dark" effect="solid" />
     </div>
   );

   export default Button;
   ```

25. **Adição de Placeholder em Campos de Formulário**
   - Incluir placeholders explicativos nos campos de formulário.

   ```jsx
   import React from 'react';
   import './ContactForm.css';

   const ContactForm = () => (
     <form className="contact-form">
       <input type="text" placeholder="Enter your name" />
       <input type="email" placeholder="Enter your email" />
       <textarea placeholder="Enter your message" />
       <button type="submit">Send</button>
     </form>
   );

   export default ContactForm;
   ```

#### Tarefas de 8 Pontos
26. **Integração com Serviço de Notícias**
   - Implementar integração com uma API de notícias para exibir as últimas atualizações.

   ```jsx
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const NewsFeed = () => {
     const [news, setNews] = useState([]);

     useEffect(() => {
       axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
         .then(response => setNews(response.data.articles));
     }, []);

     return (
       <div className="news-feed">
         {news.map((article, index) => (
           <div key={index} className="news-article">
             <h2>{article.title}</h2>
             <p>{article.description}</p>
           </div>
         ))}
       </div>
     );
   };

   export default NewsFeed;
   ```

#### Tarefas de 13 Pontos
27. **Implementação de Validação de Formulário**
   - Adicionar validação de campos em formulários para garantir a entrada correta de dados.

   ```jsx
   import React, { useState } from 'react';
   import './RegisterForm.css';

   const RegisterForm = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({});

     const validate = () => {
       const newErrors = {};
       if (!email.includes('@')) newErrors.email = 'Invalid email address';
       if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       if (validate()) {
         // Submit the form
       }
     };

     return (
       <form className="register-form" onSubmit={handleSubmit}>
         <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
         {errors.email && <span className="error">{errors.email}</span>}
         <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
         {errors.password && <span className="error">{errors.password}</span>}
         <button type="submit">Register</button>
       </form>
     );
   };

   export default RegisterForm;
   ```

#### Tarefas de 21 Pontos
28. **Criação de Painel de Controle do Usuário**
   - Desenvolver um painel de controle para que os usuários possam gerenciar suas informações e configurações.

   ```jsx
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';

   const Dashboard = () => {
     const [user, setUser] = useState(null);

     useEffect(() => {
       const unsubscribe = firebase.auth().onAuthStateChanged(user => {
         setUser(user);
       });
       return () => unsubscribe();
     }, []);

     if (!user) {
       return <div>Loading...</div>;
     }

     return (
       <div className="dashboard">
         <h1>Welcome, {user.displayName}</h1>
         <p>Email: {user.email}</p>
         {/* Additional user settings */}
       </div>
     );
   };

   export default Dashboard;
   ```

#### Tarefas de 34 Pontos
29. **Implementação de Busca em Tempo Real com Firestore**
   - Adicionar funcionalidade de busca em tempo real utilizando Firestore.

   ```jsx
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/firestore';

   const Search = () => {
     const [query, setQuery] = useState('');
     const [results, setResults] = useState([]);

     useEffect(() => {
       if (query) {
         const unsubscribe = firebase.firestore()
           .collection('articles')
           .where('title', '>=', query)
           .where('title', '<=', query + '\uf8ff')
           .onSnapshot(snapshot => {
             setResults(snapshot.docs.map(doc => doc.data()));
           });
         return () => unsubscribe();
       }
     }, [query]);

     return (
       <div className="search">
         <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles" />
         <div className="search-results">
           {results.map((article, index) => (
             <div key={index} className="search-result">
               <h2>{article.title}</h2>
               <p>{article.content}</p>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default Search;
   ```

#### Tarefas de 55 Pontos
30. **Implementação de Visão Dashboard com Gráficos Dinâmicos**
    - Desenvolver uma visão de dashboard que inclua gráficos dinâmicos utilizando dados do Firestore.

    ```jsx
    import React, { useEffect, useState } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import { Bar } from 'react-chartjs-2';

    const Dashboard = () => {
      const [data, setData] = useState({ labels: [], datasets: [] });

      useEffect(() => {
        const unsubscribe = firebase.firestore()
          .collection('analytics')
          .onSnapshot(snapshot => {
            const newData = snapshot.docs.map(doc => doc.data());
            const labels = newData.map(item => item.label);
            const values = newData.map(item => item.value);

            setData({
              labels,
              datasets: [
                {
                  label: 'User Activity',
                  data: values,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                },
              ],
            });
          });

        return () => unsubscribe();
      }, []);

      return (
        <div className="dashboard">
          <h1>Analytics Dashboard</h1>
          <Bar data={data} />
        </div>
      );
    };

    export default Dashboard;
    ```
### Tarefas Adicionais de Melhoria para GWI-News

#### Tarefas de 5 Pontos

31. **Adição de Feedback Visual em Formulários**
    - Implementar feedback visual (mensagens de erro) em campos de formulário.

    ```jsx
    import React, { useState } from 'react';
    import './Form.css';

    const Form = () => {
      const [value, setValue] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
          setError('This field is required');
        } else {
          setError('');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder="Enter value" 
          />
          {error && <span className="error">{error}</span>}
          <button type="submit">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

32. **Atualização do Estilo da Navbar**
    - Melhorar o estilo da barra de navegação.

    ```jsx
    import React from 'react';
    import './Navbar.css';

    const Navbar = () => (
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );

    export default Navbar;
    ```

#### Tarefas de 8 Pontos

33. **Implementação de Carrossel de Imagens**
    - Adicionar um carrossel de imagens na página inicial.

    ```jsx
    import React from 'react';
    import { Carousel } from 'react-responsive-carousel';
    import 'react-responsive-carousel/lib/styles/carousel.min.css';

    const ImageCarousel = () => (
      <Carousel showThumbs={false}>
        <div>
          <img src="image1.jpg" alt="First slide" />
          <p className="legend">Caption 1</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Second slide" />
          <p className="legend">Caption 2</p>
        </div>
      </Carousel>
    );

    export default ImageCarousel;
    ```

34. **Integração com Serviço de Clima**
    - Integrar a aplicação com um serviço de API de clima para exibir informações do tempo.

    ```jsx
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const Weather = () => {
      const [weather, setWeather] = useState(null);

      useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
          .then(response => setWeather(response.data));
      }, []);

      if (!weather) return <div>Loading...</div>;

      return (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      );
    };

    export default Weather;
    ```

#### Tarefas de 13 Pontos

35. **Implementação de Página de Perfil do Usuário**
    - Criar uma página de perfil do usuário onde ele possa visualizar e editar suas informações.

    ```jsx
    import React, { useState, useEffect } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/auth';

    const UserProfile = () => {
      const [user, setUser] = useState(null);

      useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          setUser(user);
        });
        return () => unsubscribe();
      }, []);

      const handleUpdate = () => {
        if (user) {
          user.updateProfile({
            displayName: "New Name"
          }).then(() => {
            alert("Profile updated!");
          });
        }
      };

      if (!user) return <div>Loading...</div>;

      return (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      );
    };

    export default UserProfile;
    ```

36. **Melhoria do Sistema de Notificações**
    - Implementar um sistema de notificações para avisar os usuários sobre atualizações importantes.

    ```jsx
    import React, { useState, useEffect } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/firestore';

    const Notifications = () => {
      const [notifications, setNotifications] = useState([]);

      useEffect(() => {
        const unsubscribe = firebase.firestore()
          .collection('notifications')
          .onSnapshot(snapshot => {
            const newNotifications = snapshot.docs.map(doc => doc.data());
            setNotifications(newNotifications);
          });

        return () => unsubscribe();
      }, []);

      return (
        <div>
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification.message}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default Notifications;
    ```

#### Tarefas de 21 Pontos

37. **Criação de Modo Escuro/Claro**
    - Adicionar funcionalidade de alternância entre modo escuro e claro.

    ```jsx
    import React, { useState, useEffect } from 'react';
    import './ThemeToggle.css';

    const ThemeToggle = () => {
      const [theme, setTheme] = useState('light');

      useEffect(() => {
        document.body.className = theme;
      }, [theme]);

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      );
    };

    export default ThemeToggle;
    ```

38. **Integração com Serviço de Localização**
    - Adicionar integração com um serviço de localização para exibir a localização atual do usuário.

    ```jsx
    import React, { useState, useEffect } from 'react';

    const Location = () => {
      const [location, setLocation] = useState({});

      useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }, []);

      return (
        <div>
          <h2>Your Location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      );
    };

    export default Location;
    ```

#### Tarefas de 34 Pontos

39. **Implementação de Sistema de Comentários**
    - Adicionar um sistema de comentários para as notícias.

    ```jsx
    import React, { useState, useEffect } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/firestore';

    const Comments = ({ articleId }) => {
      const [comments, setComments] = useState([]);
      const [newComment, setNewComment] = useState('');

      useEffect(() => {
        const unsubscribe = firebase.firestore()
          .collection('articles')
          .doc(articleId)
          .collection('comments')
          .onSnapshot(snapshot => {
            const commentsData = snapshot.docs.map(doc => doc.data());
            setComments(commentsData);
          });

        return () => unsubscribe();
      }, [articleId]);

      const handleAddComment = () => {
        if (newComment.trim()) {
          firebase.firestore()
            .collection('articles')
            .doc(articleId)
            .collection('comments')
            .add({
              text: newComment,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          setNewComment('');
        }
      };

      return (
        <div>
          <h2>Comments</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
          <input 
            type="text" 
            value={newComment} 
            onChange={e => setNewComment(e.target.value)} 
            placeholder="Add a comment" 
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      );
    };

    export default Comments;
    ```

#### Tarefas de 55 Pontos

40. **Criação de Painel de Administração**
    - Desenvolver um painel de administração para gerenciar usuários e conteúdo da plataforma.

    ```jsx
    import React, { useState, useEffect } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import 'firebase/auth';

    const AdminPanel = () => {
      const [users, setUsers] = useState([]);

      useEffect(() => {
        const unsubscribe =
