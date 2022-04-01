export default function getDate() {
  const date = new Date().toString().slice(0, 15).split(' ');
  return `${date[0]}, ${date[1]} ${date[2]} of ${date[3]}`;
}
