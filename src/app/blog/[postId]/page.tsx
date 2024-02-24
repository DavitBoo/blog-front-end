import { Metadata } from "next"

type Props = {
    params: {
        postId: string
    }
}


export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        /*esto debe sustituirse por una petición a la API del blog donde se reciba el título de la entrada*/
        setTimeout(() => {
           resolve(`${params.postId}`);
        }, 100);
    })
    return {
        title: `Post - ${title}`
    }
}



export default function Blog({params} : Props){
    return <h1>Blog: {params.postId}</h1>
}

