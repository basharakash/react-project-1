import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Video from "./Video";
import useVideoList from "./hooks/useVideoList";
import Classes from "./styles/Loading.module.css"

export default function Videos() {
    const [page, setPage] = useState(1);
    const { videos, loading, error, hasMore } = useVideoList(page);
    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setPage(page + 8)}
                >
                    {videos.map((video, id) =>
                        video.noq > 0 ? (
                            <Link
                                to={`/quize/${video.youtubeID}`}
                                key={uuidv4()}
                            >
                                <Video
                                    title={video.title}
                                    id={video.youtubeID}
                                    noq={video.noq}
                                />
                            </Link>
                        ) : (
                            <Video
                                title={video.title}
                                id={video.youtubeID}
                                noq={video.noq}
                                key={uuidv4()}
                            />
                        )
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No data found!</div>}
            {error && <div>There was an error!</div>}
            {loading && <div className={ Classes.dots}></div>}
        </div>
    );
}
