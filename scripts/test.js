function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remianigSeconds = time % 3600;
    const minute = parseInt(remianigSeconds / 60);
    remianigSeconds =remianigSeconds % 60;
    return `${hour} hour ${minute} minute ${remianigSeconds} second ago`;
}
console.log(getTimeString(7865));
