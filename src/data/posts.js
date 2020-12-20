module.exports= {
  posts:[
    {
    title:'Что это такое, и какую информацию тут можно найти //в статье про это ничего нет :( ',
    littleText: "что мы тут делаем",
    text:"<h2 id=\"-\">О чем этот блог?</h2>\n" +
      "<p>В этом блоге я буду пытаться писать код этого блога.<br>В то же время я буду стараться делать акцент на написание тестов для этого кода. И в то же время я буду писать об этом статьи, собственно это и есть цель блога.<br>К сожалению, я не обладаю писательскими талантами так, что по большей мере все это делается для меня лично. Но если вы тоже найдете, что-то для себя во всем этом, я буду очень рад. \n" +
      "<br><br>Пишите свои замечания и комментарии мне сразу в телеграм <code>@alexandrpenkov</code><br>Код вот тут <a href=\"https://github.com/apenkov/test_blog\">https://github.com/apenkov/test_blog</a> </p>\n"
  },
    {
      title:'Создаем реакт приложение которое далее будем тестировать. Часть 1',
      littleText: "установка create react app и первые компоненты",
      text:"<h1 id=\"-\">Что сначала</h1>\n" +
        "<p>начнем писать мы на react  // просто так<br>для начала установим <code>create-react-app</code><br>сделаем все по шагам отсюда <a href=\"https://create-react-app.dev/docs/getting-started/\">https://create-react-app.dev/docs/getting-started/</a><br>продублирую кратко команды которые надо вводить в терминале с краткими комментариями<br>после <code>//</code> это комментарий его не надо копировать в свой терминал</p>\n" +
        "<pre><code><span class=\"hljs-string\">npm </span><span class=\"hljs-string\">uninstall </span>-g <span class=\"hljs-built_in\">create-react-app</span> // это глобальная установка что бы вызвать потом <span class=\"hljs-built_in\">create-react-app</span> в любом местее  \n" +
        "// перейдите в директорию в которой будете работать\n" +
        "<span class=\"hljs-string\">npx </span><span class=\"hljs-built_in\">create-react-app</span> <span class=\"hljs-string\">my-app </span>// вызываем то что мы скачали и просим создать нам простой шаблон приложения\n" +
        "<span class=\"hljs-string\">cd </span><span class=\"hljs-string\">my-app </span>//переходим в созданную папку\n" +
        "<span class=\"hljs-string\">npm </span><span class=\"hljs-string\">start </span>// запускаем сборки приложения // в конце она автоматически откроется в бразуере, если нет то к терминале будет ссылка на локал хост с портом где можно открыть приложение\n" +
        "</code></pre><h3 id=\"-\">Теперь пора превратить это в блог</h3>\n" +
        "<p>//перейдем в папку <code>./src</code> и создадим директорию <code>Components</code>, а в ней файл <code>Blog.js</code>.<br>Создадим наш основной компонент Blog, в том же файле, где компонент App.  </p>\n" +
        "<pre><code><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">Blog</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
        "  <span class=\"hljs-keyword\">return</span> (\n" +
        "    <span class=\"xml\"><span class=\"hljs-tag\">&lt;&gt;</span>\n" +
        "      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n" +
        "        this is blog\n" +
        "      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n" +
        "    <span class=\"hljs-tag\">&lt;/&gt;</span>\n" +
        "  )\n" +
        "}</span>\n" +
        "</code></pre><p>Каждый пост будет в формате  </p>\n" +
        "<pre><code>data = {\n" +
        "    title: <span class=\"hljs-symbol\">'second</span> post',\n" +
        "    littleText: <span class=\"hljs-symbol\">'preview</span> text',\n" +
        "    text: <span class=\"hljs-symbol\">'big</span> text'\n" +
        "}\n" +
        "</code></pre><p>компонент для каждого поста будет выглядеть вот так (в пропсах передаем объект выше наш пост)  </p>\n" +
        "<pre><code>\n" +
        "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">Post</span>(<span class=\"hljs-params\">props</span>) </span>{\n" +
        "  <span class=\"hljs-keyword\">const</span> post = props.post;\n" +
        "  <span class=\"hljs-keyword\">return</span> (\n" +
        "      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"post\"</span>&gt;</span>\n" +
        "        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>{post.title}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n" +
        "        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"preview\"</span> &gt;</span>{post.littleText}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n" +
        "        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">{</span>`<span class=\"hljs-attr\">body</span>`} &gt;</span>{post.text}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n" +
        "      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n" +
        "  )\n" +
        "}\n" +
        "</code></pre><hr>\n" +
        "<p><em>Бежим дальше</em>  </p>\n" +
        "<p>Посты в блог я планирую передавать в формате  </p>\n" +
        "<pre><code>posts = {\n" +
        "  [\n" +
        "    {\n" +
        "      title: <span class=\"hljs-symbol\">'first</span> post',\n" +
        "      littleText: <span class=\"hljs-symbol\">'preview</span> text',\n" +
        "      text: <span class=\"hljs-symbol\">'big</span> text'\n" +
        "    }, {\n" +
        "    title: <span class=\"hljs-symbol\">'second</span> post',\n" +
        "    littleText: <span class=\"hljs-symbol\">'preview</span> text',\n" +
        "    text: <span class=\"hljs-symbol\">'big</span> text'\n" +
        "  }\n" +
        "  ]\n" +
        "}\n" +
        "</code></pre><p>То есть нам надо пройти по массиву <code>data</code> и для каждого поста создать компонент <code>Post</code><br>И тогда компонент для отображения всех произвольного количества постов =&gt;  </p>\n" +
        "<pre><code><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">Posts</span>(<span class=\"hljs-params\">props</span>) </span>{\n" +
        "  <span class=\"hljs-keyword\">const</span> posts = props.posts;\n" +
        "  <span class=\"hljs-keyword\">const</span> postsTemplate = posts.map(<span class=\"hljs-function\">(<span class=\"hljs-params\">post, index</span>)=&gt;</span>{\n" +
        "    <span class=\"hljs-keyword\">return</span> (\n" +
        "      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">key</span>=<span class=\"hljs-string\">{index}</span>&gt;</span>\n" +
        "        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Post</span> <span class=\"hljs-attr\">post</span> =<span class=\"hljs-string\">{post}/</span>&gt;</span>\n" +
        "      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n" +
        "    )\n" +
        "  })\n" +
        "  return(\n" +
        "    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n" +
        "      {postsTemplate}\n" +
        "    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n" +
        "  )\n" +
        "}</span>\n" +
        "</code></pre><p>его мы передаем в компонент <code>App</code>  </p>\n" +
        "<pre><code><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">App</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
        "  <span class=\"hljs-keyword\">return</span> (\n" +
        "    <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"App\"</span>&gt;</span>\n" +
        "      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Posts</span> <span class=\"hljs-attr\">posts</span>=<span class=\"hljs-string\">{posts}/</span>&gt;</span>\n" +
        "    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n" +
        "  );\n" +
        "}</span>\n" +
        "</code></pre><p>и тогда финальный вариант на текущий момент выглядит вот так<br>(тут картинка)<br>Вот код, который есть на данный момент, все что мы писали, находится в <code>src/App.js</code><br><a href=\"https://github.com/apenkov/test-blog-examplees/blob/create-project/src/App.js\">https://github.com/apenkov/test-blog-examplees/blob/create-project/src/App.js</a>  </p>\n"
    },
    {
      title:'2 статья, пишем первый тест',
      littleText:"написание теста для react, с помощью jest и react-test-renderer",
      text:"<p>Добавим первый тест для компонента Post создадим в папке <code>/Componeents</code> папку <code>test</code>, а в ней файл <code>Post.test.js</code> нужно будет установить зависимость <code>react-test-renderer</code>  и за импортить ее в файл вместе c реактом и самим компонентом Post<br>Создадим сам тест получилось вот так </p>\n" +
        "<pre><code><span class=\"hljs-keyword\">import</span> React <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n" +
        "<span class=\"hljs-keyword\">import</span> renderer <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react-test-renderer'</span>;\n" +
        "<span class=\"hljs-keyword\">import</span> Post <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">\"../Post\"</span>;\n" +
        "\n" +
        "describe(<span class=\"hljs-string\">'post tests'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n" +
        "  it(<span class=\"hljs-string\">'first tests'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n" +
        "    expect(<span class=\"hljs-literal\">true</span>).toEqual(<span class=\"hljs-literal\">true</span>)\n" +
        "  })\n" +
        "})\n" +
        "</code></pre><p>выполняю в консоли yarn jest <code>Test Suites: 1 passed, 1 total</code><br>хорошо, теперь надо сделать этот тест полезным, если возьмем документацию для <code>react-test-renderer</code> <a href=\"https://reactjs.org/docs/test-renderer.html\">https://reactjs.org/docs/test-renderer.html</a><br> то у нас получится вот такой тест </p>\n" +
        "<pre><code>const post = renderer\n" +
        "  .create(&lt;Post data={{<span class=\"hljs-string\">title:</span><span class=\"hljs-string\">'title'</span>,<span class=\"hljs-string\">littleText:</span><span class=\"hljs-string\">'little text'</span>, <span class=\"hljs-string\">text:</span><span class=\"hljs-string\">'big text'</span>}}/&gt;)\n" +
        "  .toJSON();\n" +
        "expect(post).toMatchSnapshot();\n" +
        "</code></pre><p>компонент Post принимает в себя объект поста вида </p>\n" +
        "<pre><code>{\n" +
        "   <span class=\"hljs-attribute\">title</span>:<span class=\"hljs-string\">'second posts'</span>,\n" +
        "   littleText: <span class=\"hljs-string\">\"preview tex\"</span>,\n" +
        "   text:<span class=\"hljs-string\">\"big text\"</span>\n" +
        "}\n" +
        "</code></pre><p>и отрисовывает его. Так как мы используем <code>toMatchSnapshot()</code> то сначала нам необходимо сделать снапшот с которым мы будем сравнивать, то что отрисовывает нам компонентзапустим команду в консоли <code>yarn jest -u</code> -u это сокращение для   --updateSnapshot<br>jest нам сделал снапшот можем его посмотреть </p>\n" +
        "<pre><code>\n" +
        "exports[`post tests first tests <span class=\"hljs-number\">1</span>`] = `\n" +
        "&lt;div\n" +
        "  <span class=\"hljs-built_in\">className</span>=<span class=\"hljs-string\">\"post\"</span>\n" +
        "&gt;\n" +
        "  &lt;p\n" +
        "    <span class=\"hljs-built_in\">className</span>=<span class=\"hljs-string\">\"title\"</span>\n" +
        "  &gt;\n" +
        "    title\n" +
        "  &lt;/p&gt;\n" +
        "  &lt;p\n" +
        "    <span class=\"hljs-built_in\">className</span>=<span class=\"hljs-string\">\"preview\"</span>\n" +
        "  &gt;\n" +
        "    little <span class=\"hljs-built_in\">text</span>\n" +
        "  &lt;/p&gt;\n" +
        "  &lt;button\n" +
        "    <span class=\"hljs-built_in\">className</span>=<span class=\"hljs-string\">\"post_readMore\"</span>\n" +
        "    href=<span class=\"hljs-string\">\"#\"</span>\n" +
        "    onClick={[Function]}\n" +
        "    style={\n" +
        "      Object {\n" +
        "        <span class=\"hljs-string\">\"visibility\"</span>: <span class=\"hljs-string\">\"visible\"</span>,\n" +
        "      }\n" +
        "    }\n" +
        "  &gt;\n" +
        "    Читать\n" +
        "  &lt;/button&gt;\n" +
        "  &lt;p\n" +
        "    <span class=\"hljs-built_in\">className</span>=<span class=\"hljs-string\">\"body\"</span>\n" +
        "    style={\n" +
        "      Object {\n" +
        "        <span class=\"hljs-string\">\"height\"</span>: <span class=\"hljs-number\">0</span>,\n" +
        "        <span class=\"hljs-string\">\"transition\"</span>: <span class=\"hljs-string\">\"height 2s ease\"</span>,\n" +
        "        <span class=\"hljs-string\">\"visibility\"</span>: <span class=\"hljs-string\">\"hidden\"</span>,\n" +
        "      }\n" +
        "    }\n" +
        "  &gt;\n" +
        "    big <span class=\"hljs-built_in\">text</span>\n" +
        "  &lt;/p&gt;\n" +
        "&lt;/div&gt;\n" +
        "`;\n" +
        "</code></pre>"
    },{
      title:' 4 статья, авто деплой на gh pages',
      littleText: "настраиваем автодеплой на gh pages с помощью git hub actions",
      text:"<p>Давайте попробуем задеплоить наше(мое) приложение на gh pages\n" +
        "<br>\n" +
        "gh(git hub pages) это бесплатный хостинг для статических файлов, \n" +
        "ну будем его не просто деплоить, а сразу настроим авто деплой с помощью github actions\n" +
        "у нас уже есть директория в корне проекта для пайплайнов <code>.github/workflows</code>\n" +
        "Создадим в ней файл <code>publish.yaml</code> тут будет лежать наш пайплайн написанный на yaml, сразу предупреждаю(почти сразу) мы\n" +
        "не будем делать велосипед, а возьмем готовое решение, я использую google и ищу готовое решение\n" +
        "<br></p>\n" +
        "<pre><code>...\n" +
        "</code></pre><p><br>\n" +
        " вот оно <code>https://github.com/marketplace/actions/deploy-to-github-pages</code>  я использовал его, но я, когда пишу статью нашел еще один экшен, и в нем на 300 звезд больше 1.2 vs 1.5\n" +
        " вот это <code>https://github.com/marketplace/actions/github-pages-action</code> но я уже буду писать про первое решение, которое сам использовал, а вообще когда нибудь в следующий раз посмотрим, что там у него под капотом\n" +
        " <br>\n" +
        " в общем у меня получился вот такой пайплайн,</p>\n" +
        "<pre><code><span class=\"hljs-string\">name:</span> build -&gt; deploy        <span class=\"hljs-comment\">// имя джобы</span>\n" +
        "<span class=\"hljs-string\">on:</span>                          <span class=\"hljs-comment\">// при каком действии</span>\n" +
        "<span class=\"hljs-symbol\">  push:</span>                      <span class=\"hljs-comment\">// на пуш</span>\n" +
        "<span class=\"hljs-symbol\">    branches:</span> [ master ]     <span class=\"hljs-comment\">// в ветку мастер -&gt; итог 4 строчек при пуше в мастер запустится эта джоба</span>\n" +
        "<span class=\"hljs-string\">jobs:</span>\n" +
        "  deploy-<span class=\"hljs-string\">job:</span>\n" +
        "    runs-<span class=\"hljs-string\">on:</span> ubuntu-latest   <span class=\"hljs-comment\">// на какой машине будет запуск</span>\n" +
        "<span class=\"hljs-symbol\">    steps:</span>                   <span class=\"hljs-comment\">// шаги ниже </span>\n" +
        "      - <span class=\"hljs-string\">name:</span> Checkout       \n" +
        "<span class=\"hljs-symbol\">        uses:</span> actions<span class=\"hljs-regexp\">/checkout@v2.3.1 /</span>/ использоование уже готового экшена этот деалет pull репника на машину runs-<span class=\"hljs-string\">on:</span> ubuntu-latest\n" +
        "<span class=\"hljs-symbol\">        with:</span>\n" +
        "          persist-<span class=\"hljs-string\">credentials:</span> <span class=\"hljs-literal\">false</span> <span class=\"hljs-comment\">// эта штука говорит нам что  # Whether to configure the token or SSH key with the local git config</span>\n" +
        "            <span class=\"hljs-comment\">// и по умолчанию она true нам не надо, так что ставим false</span>\n" +
        "\n" +
        "          node-<span class=\"hljs-string\">version:</span> <span class=\"hljs-string\">'14.x'</span> <span class=\"hljs-comment\">// версия ноды которую будем устанавливать</span>\n" +
        "\n" +
        "      - <span class=\"hljs-string\">name:</span> <span class=\"hljs-string\">'install'</span> \n" +
        "<span class=\"hljs-symbol\">        run:</span> npm i <span class=\"hljs-comment\">// теперь можно установить зависимости</span>\n" +
        "\n" +
        "      - <span class=\"hljs-string\">name:</span> Build\n" +
        "<span class=\"hljs-symbol\">        run:</span> npm run build <span class=\"hljs-comment\">// собираем </span>\n" +
        "\n" +
        "      - <span class=\"hljs-string\">name:</span> Deploy\n" +
        "<span class=\"hljs-symbol\">        uses:</span> JamesIves<span class=\"hljs-regexp\">/github-pages-deploy-action@3.7.1 /</span>/ собственно сам экшен для деплоя, грубо говоря после того как мы сдеали билд проекта\n" +
        "<span class=\"hljs-comment\">// он запушит статику которую мы сбилдлили в ветку BRANCH у нас это gh pages</span>\n" +
        "<span class=\"hljs-symbol\">        with:</span>\n" +
        // eslint-disable-next-line
        "<span class=\"hljs-symbol\">          GITHUB_TOKEN:</span> ${{ secrets.GITHUB_TOKEN }} <span class=\"hljs-comment\">// это надо указывать именно так,  гитхаб сам сходит и заберет ваш токен</span>\n" +
        "<span class=\"hljs-symbol\">          BRANCH:</span> gh-pages <span class=\"hljs-comment\">// ветка </span>\n" +
        "<span class=\"hljs-symbol\">          FOLDER:</span> build\n" +
        "<span class=\"hljs-symbol\">          CLEAN:</span> <span class=\"hljs-literal\">true</span> <span class=\"hljs-comment\">// удаляем файлы из ветки выше</span>\n" +
        "</code></pre><p>собственно я все описал в комментах выше можем сделать пуш в мастер и задеплоить наш проект, автоматически \n" +
        "<code>тут будет картинка моего успешного экшена</code>\n" +
        "осталось сделать самое важное \n" +
        "<br>\n" +
        "Идем в репозиторий -&gt; Settings-&gt; Options ищем GitHub Pages  и там выбираем наш бранч BRANCH у меня gh-pages\n" +
        "теперь gh pages будет брать статику из этой ветке и отображать ее нам, в ИНТЕРНЕТЕ.\n" +
        "В следующией статье посомтрим почему все равно ничего не заработало, всем пока !\n" +
        "))</p>\n"
    },{
      title:'3 статья, пишем ci на github actions для нашего теста',
      littleText: "превью",
      text:"сама статья стало быть"
    },{
      title:'тут что отвлеченное, хотел затонуть тему девопс, про докер и консулы всякие',
      littleText: "тоже самое что в названии",
      text:"тут текст"
    },

  ]
}
