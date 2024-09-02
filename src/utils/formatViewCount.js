export default function formatViewCount(viewCount) {
    if (viewCount < 1000) {
        return viewCount;
    } else if (viewCount < 1000000) {
        return (viewCount / 1000).toFixed(1) + "K";
    } else if (viewCount < 1000000000) {
        return (viewCount / 1000000).toFixed(1) + "M";
    } else {
        return (viewCount / 1000000000).toFixed(1) + "B";
    }
}
