function handleShowCount(count) {
    if (count < 10_000) return count;
    else if (count >= 10_000 && count < 1_000_000) return (count / 1_000).toFixed(1) + "K";
    else if (count >= 1_000_000 && count < 1_000_000_000) return (count / 1_000_000).toFixed(1) + "M";
    else return (count / 1_000_000_000).toFixed(1) + "B";
}

export default handleShowCount;
