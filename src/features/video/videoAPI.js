import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};
export const likeVideo = async (id, count) => {
    const response = await axios.patch(`/videos/${id}`, { likes: count });

    return response.data;
};
export const unlikeVideo = async (id, count) => {
    const response = await axios.patch(`/videos/${id}`, { unlikes: count });

    return response.data;
};
