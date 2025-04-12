import { Helmet } from "react-helmet";

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vecinos Opinan",
    url: "https://www.vecinosopinan.com.ar",
    logo: "https://www.vecinosopinan.com.ar/vologo.png",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default StructuredData;
