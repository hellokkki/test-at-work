export const randomImageUrlCreator = async (width: number, height: number, count: number): Promise<string[]> => {
    const urls = [];
    for (let i = 0; i < count; i++) {
      const url = `https://source.unsplash.com/random/${width}x${height}`;
      urls.push(url)
    }
    return urls;
}