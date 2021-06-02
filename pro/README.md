# Template limpio de Blogger

El siguiente código sirve para comenzar un template de blogger desde cero, con algunos extras como los CDN de awesome font, css w3schools y animatecss

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

    <b:widget id='AdSense1' locked='true' title='' type='AdSense' visible='' />

| ![Atribution](https://alexestudio86.github.io/enmicel/pro/documentation/icon-attribution.gif) | Atribution |
|--|--|

    <b:widget id='Attribution1' locked='true' title='' type='Attribution' visible='' />

| ![Blog Archive](https://alexestudio86.github.io/enmicel/pro/documentation/icon-blogarchive.gif) | Blog Archive |
|--|--|

    <b:widget id='BlogArchive1' locked='' title='' type='BlogArchive' visible='' />

| ![Blogger Button](https://alexestudio86.github.io/enmicel/pro/documentation/icon-bloggerbutton.gif) | Blogger Button / Logo |
|--|--|

    <b:widget id='BloggerButton1' locked='' title='' type='BloggerButton' visible='' />

| ![Blog List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-bloglist.gif) | Blog List |
|--|--|

    <b:widget id='BlogList1' locked='' title='' type='BlogList' visible='' />

| ![Blog Post](https://alexestudio86.github.io/enmicel/pro/documentation/icon-blog.gif) | Blog Post |
|--|--|

    <b:widget id='Blog' locked='' title='' type='Blog1' visible='' />

| ![Blog Search](https://alexestudio86.github.io/enmicel/pro/documentation/icon-blogsearch.gif) | Blog Search |
|--|--|

    <b:widget id='BlogSearch1' locked='' title='' type='BlogSearch' visible='' />

| ![Contact Form](https://alexestudio86.github.io/enmicel/pro/documentation/icon-contactform.gif) | Contact Form |
|--|--|

    <b:widget id='ContactForm1' locked='' title='' type='ContactForm' visible='' />

| ![Featured Post](https://alexestudio86.github.io/enmicel/pro/documentation/icon-featuredpost.gif) | Featured Post |
|--|--|

    <b:widget id='FeaturedPost1' locked='' title='' type='FeaturedPost' visible='' />

| ![Feed](https://alexestudio86.github.io/enmicel/pro/documentation/icon-feed.gif) | Feed |
|--|--|

    <b:widget id='Feed1' locked='' title='' type='Feed' visible='' />

| ![Followers](https://alexestudio86.github.io/enmicel/pro/documentation/icon-followers.gif) | Followers |
|--|--|

    <b:widget id='Followers1' locked='' title='' type='Followers' visible='' />

| ![Labels](https://alexestudio86.github.io/enmicel/pro/documentation/icon-label.gif) | Labels|
|--|--|

    <b:widget id='Label1' locked='' title='' type='Label' visible='' />

| ![Link List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-linklist.gif) | Link List |
|--|--|

    <b:widget id='LinkList1' locked='' title='' type='LinkList' visible='' />

| ![Page Header](https://alexestudio86.github.io/enmicel/pro/documentation/icon-header.gif) | Page Header |
|--|--|

    <b:widget id='Header1' locked='true' title='' type='Header' visible='' />

| ![Page List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-pagelist.gif) | Page List / Pages |
|--|--|

    <b:widget id='PageList1' locked='' title='' type='PageList' visible='' />

| ![Picture](https://alexestudio86.github.io/enmicel/pro/documentation/icon-image.gif) | Picture / Image |
|--|--|

    <b:widget id='Image1' locked='' title='' type='Image' visible='' />

| ![Popular Post](https://alexestudio86.github.io/enmicel/pro/documentation/icon-popularposts.gif) | Popular Post |
|--|--|

    <b:widget id='PopularPosts1' locked='' title='' type='PopularPosts' visible='' />

| ![Profile](https://alexestudio86.github.io/enmicel/pro/documentation/icon-profile.gif) | Profile |
|--|--|


    <b:widget id='Profile1' locked='' title='' type='Profile' visible='' />

| ![Report Abuse](https://alexestudio86.github.io/enmicel/pro/documentation/icon-reportabuse.gif) | Report Abuse|
|--|--|

    <b:widget id='ReportAbuse1' locked='' title='' type='ReportAbuse' visible='' />

| ![HTML/Javascript](https://alexestudio86.github.io/enmicel/pro/documentation/icon-html.gif) | HTML / JavaScript |
|--|--|

    <b:widget id='HTML1' locked='' title='' type='HTML' visible='' />

| ![Stats](https://alexestudio86.github.io/enmicel/pro/documentation/icon-stats.gif) | Stats / Blog Stats |
|--|--|

    <b:widget id='Stats1' locked='' title='' type='Stats' visible='' />


| ![Subscribe](https://alexestudio86.github.io/enmicel/pro/documentation/icon-subscribe.gif) | Subscribe / Subscription Links |
|--|--|

    <b:widget id='Subscribe1' locked='' title='' type='Subscribe' visible='' />

| ![Text](https://alexestudio86.github.io/enmicel/pro/documentation/icon-text.gif) | Text |
|--|--|

    <b:widget id='Text1' locked='' title='' type='Text' visible='' />

| ![Text List](https://alexestudio86.github.io/enmicel/pro/documentation/icon-textlist.gif) | Text List / List |
|--|--|

    <b:widget id='TextList1' locked='' title='' type='TextList' visible='' />

| ![Translate](https://alexestudio86.github.io/enmicel/pro/documentation/icon-translate.gif) | Translate |
|--|--|

    <b:widget id='Translate1' locked='' title='' type='Translate' visible='' />

| ![Wikipedia](https://alexestudio86.github.io/enmicel/pro/documentation/icon-wikipedia.gif) | Wikipedia|
|--|--|

    <b:widget id='Wikipedia1' locked='' title='' type='Wikipedia' visible='' />
