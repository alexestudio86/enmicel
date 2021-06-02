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

