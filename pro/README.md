# Template limpio de Blogger

El siguiente código sirve para comenzar un template de blogger desde cero (Versión 3, Widgets 2), con algunos extras como los CDN de awesome font, css w3schools y animatecss

    <?xml version="1.0" encoding="UTF-8"  ?>
    <!DOCTYPE  html>
    <!--Es importante señalar el tipo de widget y vesión-->
    <html  b:defaultwidgetversion='2'  b:layoutsVersion='3'  xmlns='http://www.w3.org/1999/xhtml'  xmlns:b='http://www.google.com/2005/gml/b'  xmlns:data='http://www.google.com/2005/gml/data'  xmlns:expr='http://www.google.com/2005/gml/expr'>    
    &lt;head&gt;
      <!-- Google Analytics -->
      <b:include  data='blog'  name='google-analytics'/>
      <!-- Page Title -->
      <title>
        <b:if  cond='data:view.isSingleItem or data:view.isHomepage'>
          <data:view.title.escaped/>
        <b:elseif  cond='data:view.isSearch'/>
          <b:if  cond='data:view.search.label'>
            <b:eval  expr='&quot;Filtro por búsqueda : &quot; + data:view.search.label.escaped'/>
          <b:elseif  cond='data:view.search.query'/>
            <b:eval  expr='&quot;Resultados por búsqueda : &quot; + data:view.search.query.escaped'/>
          <b:else/>
            <data:messages.olderPosts/>
          </b:if>
        <b:elseif  cond='data:view.isArchive'/>
          <data:messages.blogArchive/> : <data:blog.pageName/>
        <b:else/>
          Página no encontrada
        </b:if>
      </title>
     <!-- Meta Description | Personalizar -->
      <b:if  cond='data:blog.metaDescription == &quot;&quot;'>
        <meta  expr:content='data:blog.pageName + &quot; : &quot;'  name='description'/>
      </b:if>
      <!-- Open Graph Meta Tags BEGIN -->
      <meta  expr:content='data:blog.url.canonical'  property='og:url'/>
      <meta  expr:content='data:view.title.escaped'  property='og:title'/>
      <meta  expr:content='data:view.description.escaped'  property='og:description'/>
      <b:if  cond='data:view.featuredImage'>
        <meta  expr:content='resizeImage(data:view.featuredImage, 1200, &quot;1200:630&quot;)'  property='og:image'/>
      <b:elseif  cond='data:widgets'/>
        <b:loop  values='data:widgets.Blog.first.posts where (p =&gt; p.featuredImage) map (p =&gt; p.featuredImage)'  var='imageUrl'>
          <meta  expr:content='resizeImage(data:imageUrl, 1200, &quot;1200:630&quot;)'  property='og:image'/>
        </b:loop>
      <b:elseif  cond='data:blog.postImageUrl'/>
        <meta  expr:content='resizeImage(data:blog.postImageUrl, 1200, &quot;1200:630&quot;)'  property='og:image'/>
      </b:if>
      <!-- Other tags -->
      <meta  content='Alejando R'  name='author'/>
      <meta  content='width=device-width, initial-scale=1.0'  name='viewport'/>
      <!-- Custom CDN -->
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' />
      <link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <!-- Custom styles -->
      <style  type='text/css'>/* <![CDATA[ */
        body, html {
          width: 100%;
          height: 100%;
          scroll-behavior:smooth;
        } 
      /* ]]> */</style>
      <b:if  cond='data:blog.isMobileRequest'>
      <b:comment  render='false'>
      <!-- Mobile -->
      </b:comment>
      <b:if  cond='data:view.isHomepage'>
        <b:comment  render='false'>
        <!-- Mobile | Homepage -->
        </b:comment>
        <b:else  />
        <b:comment  render='false'>
        <!-- Mobile | Pages -->
        </b:comment>
        </b:if>
        <b:else />
        <b:comment  render='false'>
        <!-- Desktop -->
        </b:comment>
        <b:if  cond='data:view.isHomepage'>
        <b:comment  render='false'>
        <!-- Desktop | Homepage -->
        </b:comment>
        <b:else  />
        <b:comment  render='false'>
        <!-- Desktop | Pages -->
        </b:comment>
        </b:if>
      </b:if>
      <!-- Layout Configuration -->
      <b:skin><![CDATA[
      ]]></b:skin>
    &lt;/head&gt;&lt;!--<head/>--&gt;   
    <body>
      <b:comment  render='false'>
      <!-- Dummy Section -->   
      </b:comment>
      <b:section  id='dummy'>
      </b:section> 
      <script>//<![CDATA[
      //]]></script>
    </body>
    </html>


# Condicionales + Vistas y Páginas

El siguiente código sirve para añadir las vistas principales y páginas que se adecuan a cualquier sitio, la estructura general sería:
Mobile
-Homepage
-Post
Desktop
-Homepage
-Post

    <b:if  cond='data:blog.isMobileRequest'>
    <b:comment  render='false'>
    <!-- Mobile -->
    </b:comment>
      <b:if  cond='data:view.isHomepage'>
      <b:comment  render='false'>
      <!-- Mobile | Homepage -->
      </b:comment>
      <b:else />
      <b:comment  render='false'>
      <!-- Mobile | Pages -->
      </b:comment>
    </b:if>
    <b:else/>
    <b:comment  render='false'>
    <!-- Desktop -->
    </b:comment>
      <b:if  cond='data:view.isHomepage'>
      <b:comment  render='false'>
      <!-- Desktop | Homepage -->
      </b:comment>
      <b:else />
      <b:comment  render='false'>
      <!-- Desktop | Pages -->
      </b:comment>
      </b:if>
    </b:if>
# Estructura

Existe una gran cantidad de widgets disponibles para blogger, sin embargo es necesario considerar algunos puntos necesarios para su uso:

## <b:section />

 1. Las etiquetas <b:section /> son propias de blogger y sirven como contenedores para los widgets
 2. Las etiquetas <b:section /> pueden estar embedidas en cualquier otra etiqueta html5
 3. Todas las etiquetas <b:section /> deben contar con un id único, el cual puede nombrarse de forma arbitraria
 4. Una vez renderizado el contenido, las etiquetas <b:section /> se muestran como divs

## <b:widget />

 1. Todos los widgets comienzan con la etiqueta <b:widget /> 
 2. Las etiquetas <b:widget /> deben encontrarse dentro de etiquetas <b:section />, es decir que no pueden estar embedidas directamente en otras etiquetas que no sean <b:section />
 3. Todas las etiquetas <b:widget /> deben contar con un id único, sin embargo el id debe seguir la [siguiente nomenclatura:](#widgets)
 4. Hello





FORMA CORRECTA

    <header>
      <b:section id='container'>
        <b:widget id='header' />
      </b:section>
    </header>


FORMA INCORRECTA

    <header>
      <b:widget id='header' />
    </header>


## Widgets

| ![Google AdSence](https://alexestudio86.github.io/enmicel/pro/documentation/icon-adsense.gif) | AdSence |
|--|--|

Reutilizable, retorna publicidad para el sitio (previamente validado por AdSence)

    <b:widget id='AdSense1' locked='true' title='' type='AdSense' visible='' />

| ![Atribution](https://alexestudio86.github.io/enmicel/pro/documentation/icon-attribution.gif) | Atribution |
|--|--|

No reutilizable, retorna información customizada en un cuadro de texto

<b:widget id='Attribution1' locked='true' title='' type='Attribution' visible='' />

| ![Blog Archive](https://alexestudio86.github.io/enmicel/pro/documentation/icon-blogarchive.gif) | Blog Archive |
|--|--|

Reutilizable, retorna una lista con links a las entradas o post

    <b:widget id='BlogArchive1' locked='' title='' type='BlogArchive' visible='' />

| ![Blogger Button](https://alexestudio86.github.io/enmicel/pro/documentation/icon-bloggerbutton.gif) | Blogger Button / Logo |
|--|--|

Reutilizable, retorna un botón de tipo insignia que apunta a blogger

    <b:widget id='BloggerButton1' locked='' title='' type='BloggerButton' visible='' />

| ![Blog List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-bloglist.gif) | Blog List |
|--|--|

Reutilizable, retorna una lista de links con los blogs creados y administrados por el autor

    <b:widget id='BlogList1' locked='' title='' type='BlogList' visible='' />

| ![Blog Post](https://alexestudio86.github.io/enmicel/pro/documentation/icon-blog.gif) | Blog Post |
|--|--|

No reutilizable, retorna los post (body, [título, imagen rescalable, texto, resumen del texto, fecha de posteo, etiquetas del post])

    <b:widget id='Blog' locked='' title='' type='Blog1' visible='' />

| ![Blog Search](https://alexestudio86.github.io/enmicel/pro/documentation/icon-blogsearch.gif) | Blog Search |
|--|--|

Reutilizable, retorna un formulario para búsqueda para listar resultados de post (principalmente nombre del post)

    <b:widget id='BlogSearch1' locked='' title='' type='BlogSearch' visible='' />

| ![Contact Form](https://alexestudio86.github.io/enmicel/pro/documentation/icon-contactform.gif) | Contact Form |
|--|--|

Reutilizable, retorna un formulario de contacto que llega a los administradores del blog, solo se pueden recibir 3 elementos, asunto, mensaje y correo electrónico

    <b:widget id='ContactForm1' locked='' title='' type='ContactForm' visible='' />

| ![Featured Post](https://alexestudio86.github.io/enmicel/pro/documentation/icon-featuredpost.gif) | Featured Post |
|--|--|

No reutilizable, retorna los datos generales de los post pero solo de una entrada seleccionada (body, [título, imagen rescalable, texto, resumen del texto, fecha de posteo, etiquetas del post])

    <b:widget id='FeaturedPost1' locked='' title='' type='FeaturedPost' visible='' />

| ![Feed](https://alexestudio86.github.io/enmicel/pro/documentation/icon-feed.gif) | Feed |
|--|--|

No reutilizable, retorna por rss el contenido del blog (proximamente dejará de estar disponibile)

    <b:widget id='Feed1' locked='' title='' type='Feed' visible='' />

| ![Followers](https://alexestudio86.github.io/enmicel/pro/documentation/icon-followers.gif) | Followers |
|--|--|

Reutilizable, Retorna un botón con la opción de seguir el blog a traves del perfil de google

    <b:widget id='Followers1' locked='' title='' type='Followers' visible='' />

| ![Labels](https://alexestudio86.github.io/enmicel/pro/documentation/icon-label.gif) | Labels|
|--|--|

Reutilizable, retorna una lista de las etiquetas únicas agregadas a los post, puede ser customizada para aplicar filtros o mostrar números de post por etiqueta

    <b:widget id='Label1' locked='' title='' type='Label' visible='' />

| ![Link List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-linklist.gif) | Link List |
|--|--|

Reutilizable, retorna una lista de textos customizables con link

    <b:widget id='LinkList1' locked='' title='' type='LinkList' visible='' />

| ![Page Header](https://alexestudio86.github.io/enmicel/pro/documentation/icon-header.gif) | Page Header |
|--|--|

No reutilizable, retorna una imagen rescalable, titulo del blog y descripción del widget

    <b:widget id='Header1' locked='true' title='' type='Header' visible='' />

| ![Page List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-pagelist.gif) | Page List / Pages |
|--|--|

Reutilizable, retorna una lista customizable de accesos a las páginas creadas desde el administrador o incluso la opción de crear links customizados

    <b:widget id='PageList1' locked='' title='' type='PageList' visible='' />

| ![Picture](https://alexestudio86.github.io/enmicel/pro/documentation/icon-image.gif) | Picture / Image |
|--|--|

Reutilizable, retorna la url de imágenes cargadas desde el cms, dando la opción de redimencionar la imagen

    <b:widget id='Image1' locked='' title='' type='Image' visible='' />

| ![Popular Post](https://alexestudio86.github.io/enmicel/pro/documentation/icon-popularposts.gif) | Popular Post |
|--|--|

Reutilizable, retorna los datos generales de los post mas populares (body, [título, imagen rescalable, texto, resumen del texto, fecha de posteo, etiquetas del post]), pudiendo listar de 1 a 10

    <b:widget id='PopularPosts1' locked='' title='' type='PopularPosts' visible='' />

| ![Profile](https://alexestudio86.github.io/enmicel/pro/documentation/icon-profile.gif) | Profile |
|--|--|

No reutilizable, retorna los datos del perfil del creador como nombre e imágen de perfil

    <b:widget id='Profile1' locked='' title='' type='Profile' visible='' />

| ![Report Abuse](https://alexestudio86.github.io/enmicel/pro/documentation/icon-reportabuse.gif) | Report Abuse|
|--|--|

No reutilizable, retorna un botón para denunciar el contenido inadecuado

    <b:widget id='ReportAbuse1' locked='' title='' type='ReportAbuse' visible='' />

| ![HTML/Javascript](https://alexestudio86.github.io/enmicel/pro/documentation/icon-html.gif) | HTML / JavaScript |
|--|--|

Reutilizable, retorna el contenido de un texto que puede ser interpretado como texto plano o código

    <b:widget id='HTML1' locked='' title='' type='HTML' visible='' />

| ![Stats](https://alexestudio86.github.io/enmicel/pro/documentation/icon-stats.gif) | Stats / Blog Stats |
|--|--|

No reutilizable, muestra gráficos simples de las visitas del sitio

    <b:widget id='Stats1' locked='' title='' type='Stats' visible='' />


| ![Subscribe](https://alexestudio86.github.io/enmicel/pro/documentation/icon-subscribe.gif) | Subscribe / Subscription Links |
|--|--|

Reutilizables, muestra botones para sucripción del blog a traves de serviucios de srss

    <b:widget id='Subscribe1' locked='' title='' type='Subscribe' visible='' />

| ![Text](https://alexestudio86.github.io/enmicel/pro/documentation/icon-text.gif) | Text |
|--|--|

Reutilizable, retorna texto plano

    <b:widget id='Text1' locked='' title='' type='Text' visible='' />

| ![Text List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-textlist.gif) | Text List / List |
|--|--|

Reutilizable, retorna una lista de texto plano

    <b:widget id='TextList1' locked='' title='' type='TextList' visible='' />

| ![Translate](https://alexestudio86.github.io/enmicel/pro/documentation/icon-translate.gif) | Translate |
|--|--|

No reutilizable, retorna una barra que permite traducior el sitio a traves del traductor de google

    <b:widget id='Translate1' locked='' title='' type='Translate' visible='' />

| ![Wikipedia](https://alexestudio86.github.io/enmicel/pro/documentation/icon-wikipedia.gif) | Wikipedia|
|--|--|

No reutilizable, retorna una barra de búsqueda en donde se pueden realizar búsquedas de wikipedia

    <b:widget id='Wikipedia1' locked='' title='' type='Wikipedia' visible='' />
