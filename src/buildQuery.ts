export function buildQuery(data: Record<string, string | string[]>): string {
  const queryArray: string[][] = [];

  for (const property in data) {
    if (Array.isArray(data[property])) {
      const dataProperty: string[] =  data[property] as string[];
      dataProperty.forEach(item => {
        queryArray.push([property, item]);
      });
    } else {
      queryArray.push([property, data[property] as string]);
    }
  }

  const query = new URLSearchParams(queryArray).toString();
  return query;
}
