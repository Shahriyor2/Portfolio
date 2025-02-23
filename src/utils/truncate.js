export function truncate(text, maxLength) {
  return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
}
