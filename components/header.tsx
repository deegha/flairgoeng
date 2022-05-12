import Head from 'next/head'

interface IProps {
  title: string
  metaDescription: string
  metaContent: string
}

export const Header: React.FunctionComponent<IProps> = ({
  title,
  metaContent,
  metaDescription,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={metaDescription} content={metaContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
