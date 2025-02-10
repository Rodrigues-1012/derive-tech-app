// components/MetaTags.js

import Head from 'next/head';

const MetaTags = ({ title, description, keywords, imageUrl, url, type = 'website', schema }) => {

  console.log('MetaTags props:', { title, description, keywords, imageUrl, url, type, schema });

  // Valores padrão caso alguma prop não seja fornecida
  const defaultTitle = 'Derive Technologies - Enterprise IT Support & Services Provider';
  const defaultDescription = 'Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years.';
  const defaultImage = 'https://phpstack-611111-4140859.cloudwaysapps.com/storage/upload/DeriveAbout.jpg';
  const defaultUrl = 'https://derivetech.com/';

  return (
    <Head>
      
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || 'Home page'} />


      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <meta name="format-detection" content="telephone=no" />

      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || defaultUrl} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

export default MetaTags;