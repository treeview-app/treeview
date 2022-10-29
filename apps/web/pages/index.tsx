import { Button } from 'web-ui/components/inputs';
import { Header1, Header2 } from 'web-ui/components/typography';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { WithLocale } from '../types/locales';
import createServerSideTranslations from '../utils/createServerSideTranslations';

function Index() {
  const { t } = useTranslation('index');

  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
      <Header2>{t('index')}</Header2>
      <Link href="/hello/MyName">
        <Button>{t('goToHelloPage')}</Button>
      </Link>
      <Link href="/users">
        <Button>{t('goToUsersPage')}</Button>
      </Link>
    </>
  );
}

async function getStaticProps({ locale }: WithLocale<unknown>) {
  return {
    props: {
      ...(await createServerSideTranslations({ locale, namespaces: ['common', 'index'] })),
    },
  };
}

export { getStaticProps };
export default Index;
