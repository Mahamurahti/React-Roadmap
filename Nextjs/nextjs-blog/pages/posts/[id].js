import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }){
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths(){
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
    // Fallback: false = if getStaticPaths doesnt return anything = 404 page
    // Fallback: true = @see https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
}

import Layout from "../../components/layout";
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
    </Layout>
}