export interface CheckinEvent {
  id: number;
  name: string;
  description: string;
  start: string;
  stop: string;
  geo_description: string;
  url: string;
  image: string;
  period: string;
}

export async function getHunsfosEvents(): Promise<CheckinEvent[]> {
  const key = process.env.CHECKIN_API_KEY;
  const secret = process.env.CHECKIN_API_SECRET;

  if (!key || !secret) return [];

  const credentials = Buffer.from(`${key}:${secret}`).toString('base64');

  const res = await fetch('https://api.checkin.no/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        searchEvent(input: "Hunsfos") {
          id name description start stop geo_description url image period
        }
      }`,
    }),
    next: { revalidate: 3600 }, // cache 1 hour
  });

  const data = await res.json();
  const events: CheckinEvent[] = data?.data?.searchEvent ?? [];

  // Filter to Hunsfos Bryggeri only (customerId 15327 in image URL)
  // and only future events
  const now = new Date();
  return events.filter((e) => {
    const isHunsfos = e.image?.includes('/15327/');
    const eventDate = new Date(e.stop);
    return isHunsfos && eventDate > now;
  });
}

export function formatEventDate(start: string): { day: string; month: string; time: string } {
  // start format: "Saturday 25. April 18:00"
  const parts = start.split(' ');
  // ["Saturday", "25.", "April", "18:00"]
  const day = parts[1]?.replace('.', '') ?? '';
  const month = parts[2] ?? '';
  const time = parts[3] ?? '';
  return { day, month, time };
}
