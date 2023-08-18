export default function(): string {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // fängt bei 0 an
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
}