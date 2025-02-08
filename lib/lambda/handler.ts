
export async function hander(event: string, context: string) {
  console.log('event:', event);
  console.log('context:', context);
  return 'Lambda test';
}