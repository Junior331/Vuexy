export function waitSeconds(seconds: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`waited ${seconds} seconds`);
    }, seconds * 1000);
  });
}
