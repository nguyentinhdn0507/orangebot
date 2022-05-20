export const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
export const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
export const formatSize = (size) => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
};
