function getSecUntilTomorrow()
{
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    tomorrow.setMilliseconds(0);
    return (tomorrow.getTime() / 1000) - (new Date().getTime() / 1000);
}

DAY_SECONDS = 24 * 60 * 60;

function dayPercent()
{
    var curSecs = DAY_SECONDS - getSecUntilTomorrow();
    return curSecs / DAY_SECONDS;
}