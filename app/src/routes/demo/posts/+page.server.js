/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {

    const res = await fetch('http://service:8000/posts')
    const posts = await res.json()
    return {
        posts
    }

}