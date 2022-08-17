import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import NewsCard from "./news-card";

const newsContent = {
  "en-US": {
    title: "NEWS",
    content: Array(10)
      .fill(undefined)
      .map((_, idx) => ({
        title: `[${idx}] [en-US] Find in-depth information about Next.js features and API.`,
      })),
  },
  "zh-CN": {
    title: "资讯",
    content: Array(10)
      .fill(undefined)
      .map((_, idx) => ({
        title: `[${idx}] [zh-CN] Find in-depth information about Next.js features and API.`,
      })),
  },
};

// const router = useRouter()
// router.push('/news', '/news', {locale: 'en-US'})

export default (props) => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  console.log(locale, locales, defaultLocale, asPath);
  const { title, content } = newsContent[locale];
  return (
    <div className={styles.container}>
      <Head>
        <title>App - {title}</title>
      </Head>
      <main className={styles.main}>
        <div>
          <div>
            <span>Current Language: </span>
            <span
              style={{
                borderRadius: "3px",
                backgroundColor: "blue",
                color: "white",
                padding: "2px",
              }}
            >
              {locale}
            </span>
          </div>
          <Link
            activeClassName={styles.linkActive}
            href={asPath}
            locale="en-US"
          >
            en-US
          </Link>
          <Link
            activeClassName={locale === "zh-CN"}
            href={asPath}
            locale="zh-CN"
          >
            zh-CN
          </Link>
          <div>
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              {content.map((item, i) => (
                <NewsCard key={i} news={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// getServerSideProps

export async function getStaticProps(context) {
  return {
    props: { context },
  };
}
