import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(){
    // Get filed from /posts
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