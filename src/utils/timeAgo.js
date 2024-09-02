export default function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = [
        { name: "year", seconds: 31536000 },
        { name: "month", seconds: 2592000 },
        { name: "week", seconds: 604800 },
        { name: "day", seconds: 86400 },
        { name: "hour", seconds: 3600 },
        { name: "minute", seconds: 60 },
        { name: "second", seconds: 1 }
    ];

    for (const interval of intervals) {
        const intervalValue = Math.floor(diffInSeconds / interval.seconds);
        if (intervalValue >= 1) {
            return `${intervalValue} ${interval.name}${intervalValue > 1 ? 's' : ''} ago`;
        }
    }
}