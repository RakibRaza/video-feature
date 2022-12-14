import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchLike, fetchUnlike } from "../../features/video/videoSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
    const dispatch = useDispatch()

    const handleLike = () => {

    }
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div onClick={() => dispatch(fetchLike({ id, count: likes + 1 }))} className="shrink-0 cursor-pointer">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
            </div>
            <div className="flex gap-1">
                <div onClick={() => dispatch(fetchUnlike({ id, count: unlikes + 1 }))} className="shrink-0 cursor-pointer">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
            </div>
        </div>
    );
}
