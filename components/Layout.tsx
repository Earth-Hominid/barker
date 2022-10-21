import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  styles: string;
  width: string;
}

const Layout: React.FC<Props> = ({ title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <header id="header">
        <Header />
      </header>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Barker | Bark at the world',
  description:
    'Barking by day, howling by night. Barker is a social platform to share howls, woofs, and barks.',
  keywords: `Chris Doll, barker, full stack developer
  `,
};
