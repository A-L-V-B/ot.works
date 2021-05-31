import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"
import { _getLocale } from "../../core/utils"
import { _localizeField } from "../../core/utils"
// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const Seo = ({
  pageTitle,
  pageDescription,
  pageImage,
  pathname,
  page,
  template,
}) => {
  const { site, sanitySettings } = useStaticQuery(query)
  const {
    buildTime,
    siteMetadata: {
      // siteTitle,
      // siteDescription,
      siteUrl,
      defaultBanner,
      author,
      twitter,
      facebook,
    },
  } = site

  //const localizedPath = i18n[locale].default ? '' : `/${i18n[locale].path}`
  const homeURL = `${siteUrl}`
  const siteTitle = _localizeField(sanitySettings.siteTitle)

  const seo = {
    title: page ? pageTitle + " – " + siteTitle : siteTitle,
    description: pageDescription,
    image: pageImage || defaultBanner,
    url: `${siteUrl}${pathname || ""}`,
  }
  // console.log(seo)
  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: homeURL,
    //headline,
    //inLanguage: siteLanguage,
    mainEntityOfPage: homeURL,
    description: seo.description,
    name: seo.title,
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Person",
      name: author,
    },
    //datePublished: '2019-01-18T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultBanner}`,
    },
  }

  let schemaArticle = null

  if (page) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author,
      },
      copyrightHolder: {
        "@type": "Person",
        name: author,
      },
      copyrightYear: "2019",
      creator: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: author,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${defaultBanner}`,
        },
      },
      //datePublished: node.first_publication_date,
      //dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.title,
      //inLanguage: 'en',
      url: seo.url,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
  }
  const alternateLang = _getLocale() === "en" ? "fr" : "en"
  const alternatehref = _getLocale() === "en" ? `${siteUrl}/` : `${siteUrl}/en`
  return (
    <>
      <Helmet title={seo.title}>
        <html lang={_getLocale()} />
        <link
          rel="alternate"
          hreflang={alternateLang}
          href={alternatehref}
        ></link>

        {/* <meta property="article:modified_time" content={buildTime} /> */}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="gatsby-starter" content="Gatsby Starter Prismic i18n" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) }
        {!page && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {page && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        {/* <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
        <body className={template} />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={page ? "article" : "website"}
        url={seo.url}
        //locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  page: PropTypes.bool,
  //node: PropTypes.object,
  locale: PropTypes.string,
}

Seo.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  page: false,
  //node: null,
  locale: "fr-fr",
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteTitle
        # siteDescription
        siteUrl
        defaultBanner: banner
        ogLanguage
        author
        twitter
        facebook
      }
    }
    sanitySettings {
      siteTitle {
        fr
        en
      }
    }
  }
`
