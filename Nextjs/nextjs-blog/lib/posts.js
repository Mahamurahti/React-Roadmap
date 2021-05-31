import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(){
    // Get files from /posts (file system)
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(name => {
        // Get id from file name by removing .md ending
        const id = name.replace(/\.md$/, '')
        // Get the full path of the file
        const fullPath = path.join(postsDirectory, name)
        // Get the content from the file
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        // Use gray-matter to parse the data
        const matterResult = matter(fileContents)
        // Return the id and the data
        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort((a,b) => {
        if(a.date < b.date)
            return 1
        else
            return -1
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    // Must be an array of objects, not just strings
    // And also must have a params key to work
    return fileNames.map(name => {
        return {
            params: {
                id: name.replace(/\.md$/, '')
            }
        }
    })
    // You can use an external api endpoint like so:
    // const res = await fetch('..')
    // const posts = await res.json()
    // return posts.map(post => {
    //     return {
    //         params: {
    //             id: post.id
    //         }
    //     }
    // })
}

export async function getPostData(id){
    // Get the full path of the file
    const fullPath = path.join(postsDirectory, `${id}.md`)
    // Get the content from the file
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the data
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into a HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Return the id, content and the data
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}