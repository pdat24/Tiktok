function handleShowCount(count) {
    if (count < 10_000) return count;
    let result = null;
    if (count >= 10_000 && count < 1_000_000) result = (count / 1_000).toFixed(1) + "K";
    else if (count >= 1_000_000 && count < 1_000_000_000) result = (count / 1_000_000).toFixed(1) + "M";
    else result = (count / 1_000_000_000).toFixed(1) + "B";
    return result;
}

export default handleShowCount;
