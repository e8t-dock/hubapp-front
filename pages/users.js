export default (props) => {
  const { locale, locales, defaultLocale } = props;
  console.log(locale, locales, defaultLocale);
  return (
    <div>
      <span>Users Component</span>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  return {
    props: { ctx },
  };
};
