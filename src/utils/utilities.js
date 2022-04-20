export function getExpirationTime() {
  return Date.now() + 15 * 1000;
}

let nextId = 0;
export function generateId() {
  return (nextId = nextId + 1);
}
