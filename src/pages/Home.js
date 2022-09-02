import { useSelector } from "react-redux";
import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

export default function Home() {
    const { totalVideos } = useSelector((state) => state.videos)
    const pageCount = Math.ceil(Number(totalVideos) / 8)
    return (
        <>
            <Tags />
            <VideoGrid />
            {Number(totalVideos) > 8 && <Pagination pageCount={pageCount} />}
        </>
    );
}
