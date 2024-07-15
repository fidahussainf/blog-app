import axiosClient from "..";

const Api = "/api/posts";  

class postAPI {
  static createPost(data) {
    return axiosClient.post(`${Api}/create-post`, data);
  }
  static getAllPosts() {
    return axiosClient.get(`${Api}/posts`);
  }
  static viewPost(id) {
    return axiosClient.get(`${Api}/posts/${id}`);
  }
  static updatePost(id, data) {
    return axiosClient.put(`${Api}/posts/${id}`, data);
  }
  static deletePost(id) {
    return axiosClient.delete(`${Api}/posts/${id}`);
  }
  static likePost(id) {
    return axiosClient.post(`${Api}/posts/${id}/like`);
  }
}

export default postAPI;
