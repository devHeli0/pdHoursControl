Antes de começar, certifique-se de ter o **Docker** instalado na sua máquina local.

<ul>
    <li>Clone o repositório para sua máquina.</li>
    <li>Navegue até o diretório clonado.</li>
    <li>Abra um terminal e execute o comando ```python
    docker compose up --build
    ``` para iniciar os serviços.</li>
    <li>Aguarde até que todos os serviços estejam prontos.</li>
    <li>Abra seu navegador e vá para http://localhost:3001 para acessar a interface da aplicação.</li>
    <li>Com isso feito, o sistema estará pronto para ser utilizado.</li>
</ul>

<h3>Resumo</h3>
<p>No backend, foi adotada Clean Architecture e o CQRS para promover independência entre camadas e simplificar o gerenciamento do código. No frontend, foi utilizada uma arquitetura baseada em Features (Feature oriented architecture) com Redux Toolkit, facilitando a organização modular e a expansão da interface do usuário. A aplicação foi estilizada utilizando Tailwind CSS.  Ambos os lados foram dockerizados, garantindo consistência e portabilidade em diferentes ambientes, além de simplificar o processo de desenvolvimento, teste e implantação.<p/>

<h2>Link para a coleção do Postman: </h2>
https://www.postman.com/blue-capsule-295155/workspace/pdhourscontrol/collection/24461249-3695983e-6fa0-409e-9890-e48477d66eb8?action=share&creator=24461249&active-environment=24461249-af81c4e5-a501-4f1d-a741-22240b0ecf67
