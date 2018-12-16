import axios from 'axios';

const url = 'http://localhost:5000/api/schedule';


class RequestMethods {
    //GET
    static getPosts(){
        return new Promise( async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    })
                    )
                );
            }catch (err) {
                reject(err);

            }
        })
    }

    //CREATE Posts
    static createPost(nameOfApplicant) {
        return axios.post(url, {
           nameOfApplicant
        });
    }

    //Delete Posts

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default RequestMethods;