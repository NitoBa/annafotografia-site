import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript, } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }


    render() {
        return (
            <Html>

                <Head>
                    {/* <title>Mabloc</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Mabloc - Immunity for Humanity. We research and develop Monoclonal Antibodies with over 90% accuracy." />
                    <meta property="og:title" content="Mabloc" />
                    <meta property="og:url" content="https://mabloc.com" />
                    <meta property="og:description" content="Mabloc - Immunity for Humanity. We research and develop Monoclonal Antibodies with over 90% accuracy." />
                    <meta property="og:image" content="https://mabloc.com/assets/Images/mabloc.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:type" content="website" /> */}

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        );
    }

}