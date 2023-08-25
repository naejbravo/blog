import rss, {pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(){
    const posts = await getCollection('posts');
    return rss({
        title: 'Astro alumno | Blog',
        description: 'Mi viaje de aprendizaje en Astro',
        site: 'https://my-blog-site.netlify.app',
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}`
        })),
        customData: `<language>en-us</language>`,
    });
}